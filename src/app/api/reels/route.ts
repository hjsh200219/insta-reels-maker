import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'; // Prisma 클라이언트 경로 수정 (@prisma/client 사용 권장)
import { generateReelIdeas } from '@/lib/azureOpenai'; // Azure OpenAI 유틸리티 임포트

// Prisma Client 인스턴스 생성 (Best Practice: 함수 외부에서 한 번만 생성)
// 참고: https://www.prisma.io/docs/guides/performance-and-optimization/connection-management#serverless-environments-faas
let prisma: PrismaClient;
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  // 개발 환경에서는 global 객체를 사용하여 HMR 시 인스턴스 재사용
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

declare global {
  // eslint-disable-next-line no-unused-vars, no-var
  var prisma: PrismaClient | undefined;
}

// 이미지 및 설명 데이터 타입 정의
interface ImageInput {
  imageUrl: string;
  description: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      title,
      instagramUrl,
      referenceUrl,
      images,
    }: {
      title: string;
      instagramUrl: string;
      referenceUrl?: string;
      images: ImageInput[];
    } = body;

    if (!title || !instagramUrl || !images || images.length === 0 || images.some(img => !img.imageUrl || !img.description)) {
      return NextResponse.json(
        { error: 'Missing required fields: title, instagramUrl, and all images must have both imageUrl and description.' },
        { status: 400 }
      );
    }

    // Prisma를 사용하여 데이터베이스에 데이터 저장
    const newReelRequest = await prisma.reelRequest.create({
      data: {
        title,
        instagramUrl,
        referenceUrl,
        images: {
          // 연결된 ImageDescription 레코드들을 생성
          create: images.map((img, index) => ({
            imageUrl: img.imageUrl, // 실제 이미지 업로드/처리 로직은 별도 구현 필요
            description: img.description,
            order: index, // 이미지 순서 저장
          })),
        },
      },
      // 생성된 ReelRequest와 연결된 ImageDescription 정보 함께 반환
      include: {
        images: true,
      },
    });

    // Azure OpenAI 호출하여 릴스 아이디어 생성
    let aiIdeas: string | null = null;
    try {
      aiIdeas = await generateReelIdeas({
        title: newReelRequest.title,
        images: newReelRequest.images, // 저장된 이미지 데이터 사용
        referenceUrl: newReelRequest.referenceUrl ?? undefined,
      });
      console.log('AI Generated Ideas:', aiIdeas);
    } catch (aiError) {
      // AI 호출 실패 시 에러 로깅 (하지만 요청 자체는 성공으로 간주할 수 있음)
      console.error('Failed to generate AI ideas:', aiError);
      // 여기서 에러 응답을 보낼 수도 있지만, 우선은 null로 두고 진행
    }

    // 성공 응답 (생성된 데이터 및 AI 아이디어 포함)
    return NextResponse.json(
      {
        message: 'Reel request created successfully',
        data: newReelRequest,
        aiGeneratedIdeas: aiIdeas, // AI 결과 추가
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error creating reel request:', error);
    if (error instanceof SyntaxError) {
        return NextResponse.json({ error: 'Invalid JSON format in request body.' }, { status: 400 });
    }
    // Prisma 관련 오류 등 구체적인 오류 처리 추가 가능
    return NextResponse.json(
      { error: 'An internal server error occurred while creating the reel request.' },
      { status: 500 }
    );
  }
  // finally 블록에서 $disconnect 호출은 Serverless 환경에서 권장되지 않음
} 