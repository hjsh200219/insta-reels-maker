import ReelForm from '@/components/ReelForm';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 bg-gray-50">
      <div className="w-full max-w-4xl">
        {/* 페이지 제목 등 추가적인 요소 배치 가능 */}
        {/* <h1 className="text-3xl font-bold text-center mb-8">Instagram Reels 생성기</h1> */}
        <ReelForm />
      </div>
    </main>
  );
}
