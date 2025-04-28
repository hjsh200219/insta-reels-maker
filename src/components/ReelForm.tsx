'use client';

import React, { useState, FormEvent, ChangeEvent, useRef, useCallback, useId } from 'react';
import { PlusCircle, Trash2, AlertCircle, Loader2 } from 'lucide-react';
// Prisma 타입 임포트 제거
// import type { ReelRequest, ImageDescription } from '@prisma/client';

// --- Prisma 모델 구조 기반 타입 직접 정의 시작 ---
interface ImageDescription {
  id: string;
  imageUrl: string;
  description: string;
  order: number;
  reelRequestId: string;
  createdAt: string; // JSON 직렬화 고려하여 string으로 처리
}

interface ReelRequest {
  id: string;
  title: string;
  instagramUrl: string;
  referenceUrl: string | null;
  createdAt: string; // JSON 직렬화 고려하여 string으로 처리
  updatedAt: string; // JSON 직렬화 고려하여 string으로 처리
  images: ImageDescription[];
}
// --- Prisma 모델 구조 기반 타입 직접 정의 끝 ---

interface ImageDescriptionPair {
  imageUrl: string;
  description: string;
}

// API 응답 타입 정의 (직접 정의한 타입 사용)
interface ApiResponse {
  message: string;
  data: ReelRequest; // 직접 정의한 타입 사용
  aiGeneratedIdeas: string | null;
}

// Vercel Blob API 응답 타입
interface VercelBlobApiResponse {
    url: string;
    pathname: string;
    contentType?: string;
    contentDisposition: string;
    // 기타 필드...
}

// API 에러 응답 타입 정의
interface ApiErrorResponse {
  error: string;
}

// 상태 관리를 위한 타입 확장
interface ImageDescriptionPairState extends ImageDescriptionPair {
  clientOnlyId: string; // Hydration 안전한 클라이언트 ID 추가
  isUploading: boolean;
  uploadError: string | null;
}

// 고유 ID 생성을 위한 클라이언트 측 카운터 (컴포넌트 외부에 선언)
let clientItemIdCounter = 0;

const ReelForm: React.FC = () => {
  // useId 훅을 사용하여 컴포넌트 인스턴스별 고유 기본 ID 생성
  const baseId = useId();

  const [title, setTitle] = useState<string>('');
  const [instagramUrl, setInstagramUrl] = useState<string>('');
  const [referenceUrl, setReferenceUrl] = useState<string>('');
  // 초기 상태 항목에 안정적인 clientOnlyId 부여
  const [imageDescriptions, setImageDescriptions] = useState<ImageDescriptionPairState[]>(
    // 초기 항목은 서버/클라이언트 동일하게 렌더링되어야 함
    // Date.now() 대신 안정적인 ID 생성 로직 사용
    () => [
      {
        clientOnlyId: `${baseId}-initial-0`, // useId 기반 초기 ID
        imageUrl: '',
        description: '',
        isUploading: false,
        uploadError: null
      }
    ]
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [aiIdeas, setAiIdeas] = useState<string | null>(null);
  const fileInputRefs = useRef<Map<string, HTMLInputElement>>(new Map()); // Key를 string (clientOnlyId)으로 변경

  const setFileInputRef = useCallback((id: string, node: HTMLInputElement | null) => {
    if (node) {
      fileInputRefs.current.set(id, node);
    } else {
      fileInputRefs.current.delete(id);
    }
  }, []);

  const handleDescriptionChange = (clientOnlyId: string, value: string) => {
    setImageDescriptions((prevPairs) =>
      prevPairs.map((pair) =>
        pair.clientOnlyId === clientOnlyId ? { ...pair, description: value } : pair
      )
    );
  };

  const handleFileChange = async (clientOnlyId: string, event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const pairIndex = imageDescriptions.findIndex(p => p.clientOnlyId === clientOnlyId);
    if (pairIndex === -1) return;

    setImageDescriptions(prev => prev.map(p => p.clientOnlyId === clientOnlyId ? { ...p, isUploading: true, uploadError: null, imageUrl: '' } : p));

    try {
      const response = await fetch(
        `/api/upload?filename=${encodeURIComponent(file.name)}`,
        {
          method: 'POST',
          body: file,
        }
      );

      if (!response.ok) {
        let errorMsg = 'File upload failed.';
        try {
            const errorData = await response.json();
            errorMsg = errorData.error || errorData.details || errorMsg;
        } catch { /* JSON 파싱 실패 시 기본 메시지 사용 */ }
        throw new Error(errorMsg);
      }

      const newBlob: VercelBlobApiResponse = await response.json();

      setImageDescriptions(prev => prev.map(p => p.clientOnlyId === clientOnlyId ? { ...p, imageUrl: newBlob.url, isUploading: false } : p));

    } catch (err: unknown) {
      console.error('File upload error:', err);
      const message = err instanceof Error ? err.message : 'Unknown upload error';
      setImageDescriptions(prev => prev.map(p => p.clientOnlyId === clientOnlyId ? { ...p, uploadError: message, isUploading: false } : p));
    }
  };

  const addImageDescriptionPair = () => {
    // 클라이언트 측에서만 호출되므로 카운터 사용 가능
    const newClientOnlyId = `${baseId}-client-${clientItemIdCounter++}`;
    setImageDescriptions((prevPairs) => [
      ...prevPairs,
      { clientOnlyId: newClientOnlyId, imageUrl: '', description: '', isUploading: false, uploadError: null },
    ]);
  };

  const removeImageDescriptionPair = (clientOnlyId: string) => {
    const inputRef = fileInputRefs.current.get(clientOnlyId);
    if (inputRef) {
      inputRef.value = '';
      fileInputRefs.current.delete(clientOnlyId);
    }
    setImageDescriptions((prevPairs) => prevPairs.filter((pair) => pair.clientOnlyId !== clientOnlyId));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (imageDescriptions.some(p => p.isUploading)) {
      setError('아직 업로드 중인 이미지가 있습니다. 잠시 후 다시 시도해주세요.');
      return;
    }
     if (imageDescriptions.some(p => p.uploadError)) {
      setError('이미지 업로드에 실패한 항목이 있습니다. 확인 후 다시 시도해주세요.');
      return;
    }
    if (imageDescriptions.some(p => !p.imageUrl)) {
      setError('모든 항목에 이미지를 업로드해야 합니다.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);
    setAiIdeas(null);

    if (!title || !instagramUrl || imageDescriptions.some(pair => !pair.description)) {
      setError('제목, Instagram URL, 그리고 모든 설명은 필수 입력 항목입니다.');
      setIsLoading(false);
      return;
    }

    // API로 보낼 때는 clientOnlyId 제외
    const imagesData = imageDescriptions.map(({ imageUrl, description }) => ({ imageUrl, description }));

    const formData = {
      title,
      instagramUrl,
      referenceUrl: referenceUrl || undefined,
      images: imagesData,
    };

    console.log('Submitting final form data:', formData);

    try {
      const response = await fetch('/api/reels', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        let errorMessage = '릴스 요청 생성에 실패했습니다.';
        try {
          const errorResult: ApiErrorResponse = await response.json();
          errorMessage = errorResult.error || errorMessage;
        } catch (jsonError) {
          console.error('Failed to parse error response JSON:', jsonError);
        }
        throw new Error(errorMessage);
      }

      const result: ApiResponse = await response.json();
      setSuccessMessage(result.message || '릴스 요청이 성공적으로 제출되었습니다!');
      setAiIdeas(result.aiGeneratedIdeas);

      // 폼 초기화 시 초기 상태와 동일하게 재생성
      setTitle('');
      setInstagramUrl('');
      setReferenceUrl('');
      setImageDescriptions([
         {
            clientOnlyId: `${baseId}-initial-0`, // 재초기화 시에도 안정적인 ID 사용
            imageUrl: '',
            description: '',
            isUploading: false,
            uploadError: null
          }
      ]);
       fileInputRefs.current.forEach(ref => {
        if (ref) ref.value = '';
       });
       fileInputRefs.current.clear();

    } catch (err: unknown) {
      console.error('Failed to submit reel request:', err);
      let message = '오류가 발생했습니다. 다시 시도해주세요.';
      if (err instanceof Error) {
        message = err.message;
      }
      setError(message);
      setAiIdeas(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-4 md:p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">새 릴스 요청 생성</h2>

      {error && <div className="p-3 bg-red-100 text-red-700 rounded-md mb-4">{error}</div>}
      {successMessage && (
        <div className="p-3 bg-green-100 text-green-700 rounded-md mb-4">
          {successMessage}
        </div>
      )}

      {aiIdeas && (
        <div className="mt-6 p-4 border border-blue-200 bg-blue-50 rounded-md">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">✨ AI 생성 릴스 아이디어</h3>
          <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans bg-white p-3 rounded border border-gray-200">
            {aiIdeas}
          </pre>
        </div>
      )}

      <div>
        <label htmlFor={`${baseId}-title`} className="block text-sm font-medium text-gray-700 mb-1">
          타이틀 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id={`${baseId}-title`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div>
        <label htmlFor={`${baseId}-instagramUrl`} className="block text-sm font-medium text-gray-700 mb-1">
          게시할 Instagram 주소 <span className="text-red-500">*</span>
        </label>
        <input
          type="url"
          id={`${baseId}-instagramUrl`}
          value={instagramUrl}
          onChange={(e) => setInstagramUrl(e.target.value)}
          required
          placeholder="https://www.instagram.com/yourprofile"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div>
        <label htmlFor={`${baseId}-referenceUrl`} className="block text-sm font-medium text-gray-700 mb-1">
          참고 릴스 URL (선택)
        </label>
        <input
          type="url"
          id={`${baseId}-referenceUrl`}
          value={referenceUrl}
          onChange={(e) => setReferenceUrl(e.target.value)}
          placeholder="https://www.instagram.com/reels/abc..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-800">이미지 및 설명 <span className="text-red-500">*</span></h3>
        {imageDescriptions.map((pair, index) => (
          // key prop에 안정적인 clientOnlyId 사용
          <div key={pair.clientOnlyId} className="p-4 border border-gray-200 rounded-md space-y-3 relative">
            <p className="text-sm font-medium text-gray-600">항목 #{index + 1}</p>
            <div>
              {/* htmlFor과 id에 clientOnlyId 사용 */}
              <label htmlFor={`imageFile-${pair.clientOnlyId}`} className="block text-sm font-medium text-gray-700 mb-1">
                이미지 파일 <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="file"
                  id={`imageFile-${pair.clientOnlyId}`}
                  onChange={(e) => handleFileChange(pair.clientOnlyId, e)}
                  accept="image/*"
                  ref={(node) => setFileInputRef(pair.clientOnlyId, node)}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 disabled:opacity-50 disabled:pointer-events-none"
                  disabled={pair.isUploading}
                />
                {pair.isUploading && <Loader2 className="animate-spin h-5 w-5 text-indigo-600" />}
              </div>
              {pair.uploadError && (
                <p className="mt-1 text-xs text-red-600 flex items-center">
                   <AlertCircle size={14} className="mr-1" /> {pair.uploadError}
                </p>
              )}
               {pair.imageUrl && !pair.isUploading && !pair.uploadError && (
                 <div className="mt-2 text-xs text-gray-600">
                    <span className="font-medium">업로드 완료:</span>
                    <a href={pair.imageUrl} target="_blank" rel="noopener noreferrer" className="ml-1 text-indigo-600 hover:underline break-all">{pair.imageUrl}</a>
                 </div>
               )}
            </div>
            <div>
              {/* htmlFor과 id에 clientOnlyId 사용 */}
              <label htmlFor={`description-${pair.clientOnlyId}`} className="block text-sm font-medium text-gray-700 mb-1">
                설명 <span className="text-red-500">*</span>
              </label>
              <textarea
                id={`description-${pair.clientOnlyId}`}
                value={pair.description}
                onChange={(e) => handleDescriptionChange(pair.clientOnlyId, e.target.value)}
                required
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {imageDescriptions.length > 1 && (
              <button
                type="button"
                onClick={() => removeImageDescriptionPair(pair.clientOnlyId)}
                className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-600 rounded-full hover:bg-red-100 transition-colors disabled:opacity-50"
                aria-label="항목 삭제"
                disabled={pair.isUploading}
              >
                <Trash2 size={18} />
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addImageDescriptionPair}
          className="flex items-center px-4 py-2 border border-dashed border-gray-400 text-gray-600 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <PlusCircle size={20} className="mr-2" />
          이미지/설명 항목 추가
        </button>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isLoading || imageDescriptions.some(p => p.isUploading)}
          className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${(isLoading || imageDescriptions.some(p => p.isUploading)) ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isLoading ? '처리 중...' : (imageDescriptions.some(p => p.isUploading) ? '이미지 업로드 중...' : '릴스 생성 요청')}
        </button>
      </div>
    </form>
  );
};

export default ReelForm; 