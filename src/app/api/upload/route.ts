import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';
import { nanoid } from 'nanoid'; // 고유 파일 이름 생성을 위한 라이브러리

// nanoid 설치 필요: npm install nanoid

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');

  if (!filename || !request.body) {
    return NextResponse.json(
      { error: "Missing filename or request body." },
      { status: 400 },
    );
  }

  // 파일 확장자 추출
  const fileExtension = filename.split('.').pop();
  // 고유한 파일 이름 생성 (예: abcdef123.png)
  const uniqueFilename = `${nanoid()}.${fileExtension}`;

  try {
    // Vercel Blob에 파일 업로드
    // request.body를 직접 전달해야 함 (Next.js 13+ App Router 방식)
    const blob = await put(uniqueFilename, request.body, {
      access: 'public',
      // 필요시 추가 옵션 설정 (e.g., cacheControlMaxAge)
    });

    // 업로드 성공 시 Blob URL 반환
    return NextResponse.json(blob);

  } catch (error) {
    console.error('Error uploading file to Vercel Blob:', error);
    let errorMessage = 'Failed to upload file.';
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    return NextResponse.json(
        { error: 'Error uploading file', details: errorMessage },
        { status: 500 },
    );
  }
} 