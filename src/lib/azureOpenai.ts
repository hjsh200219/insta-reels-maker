import OpenAI from 'openai';

// Azure OpenAI 환경 변수 확인
const azureApiKey = process.env.AZURE_OPENAI_API_KEY;
const azureEndpoint = process.env.AZURE_OPENAI_ENDPOINT;
const azureDeploymentName = process.env.AZURE_OPENAI_DEPLOYMENT_NAME;

if (!azureApiKey || !azureEndpoint || !azureDeploymentName) {
  console.warn(
    'Azure OpenAI environment variables (AZURE_OPENAI_API_KEY, AZURE_OPENAI_ENDPOINT, AZURE_OPENAI_DEPLOYMENT_NAME) are not fully configured. AI features will be disabled.'
  );
}

// Azure OpenAI 클라이언트 초기화 (환경 변수가 설정된 경우에만)
let openai: OpenAI | null = null;
if (azureApiKey && azureEndpoint) {
  openai = new OpenAI({
    apiKey: azureApiKey,
    baseURL: `${azureEndpoint}/openai/deployments/${azureDeploymentName}`, // Azure 리소스 엔드포인트 및 배포 이름 사용
    defaultQuery: { 'api-version': '2023-05-15' }, // 사용하려는 API 버전 명시 (필요시 조정)
    defaultHeaders: { 'api-key': azureApiKey },
  });
}

/**
 * 주어진 프롬프트를 사용하여 Azure OpenAI를 통해 텍스트 콘텐츠를 생성합니다.
 * @param prompt - AI에게 전달할 프롬프트 문자열
 * @returns 생성된 텍스트 또는 오류 발생 시 null
 */
export async function generateText(prompt: string): Promise<string | null> {
  if (!openai) {
    console.error('Azure OpenAI client is not initialized due to missing environment variables.');
    return null;
  }

  try {
    const response = await openai.chat.completions.create({
      model: azureDeploymentName!, // 배포 이름 사용 (타입스크립트 non-null assertion)
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 150, // 생성할 최대 토큰 수 (조정 가능)
      temperature: 0.7, // 창의성 조절 (0에 가까울수록 결정적, 높을수록 다양)
      // 필요에 따라 다른 매개변수 추가 (top_p, frequency_penalty 등)
    });

    return response.choices[0]?.message?.content?.trim() || null;
  } catch (error) {
    console.error('Error calling Azure OpenAI API:', error);
    return null;
  }
}

// 예시: 릴스 요청 데이터를 기반으로 프롬프트 생성 및 AI 호출 함수
interface ReelData {
  title: string;
  images: { description: string }[];
  referenceUrl?: string;
}

export async function generateReelIdeas(reelData: ReelData): Promise<string | null> {
  // 입력 데이터를 기반으로 상세한 프롬프트 구성
  let prompt = `다음 정보를 바탕으로 흥미로운 Instagram 릴스 스크립트 아이디어를 생성해주세요:

타이틀: ${reelData.title}
`;

  reelData.images.forEach((img, index) => {
    prompt += `장면 ${index + 1} 설명: ${img.description}\n`;
  });

  if (reelData.referenceUrl) {
    prompt += `\n참고 URL: ${reelData.referenceUrl}`;
  }

  prompt += `\n\n릴스 스크립트 아이디어 (3가지 제안):`;

  console.log('--- Generated Prompt for Azure OpenAI ---');
  console.log(prompt);
  console.log('----------------------------------------');

  return generateText(prompt);
} 