namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    SECRET: string
    DATABASE_URL: string
    NEXTAUTH_URL: string
    GOOGLE_ID: string
    GOOGLE_SECRET: string
    NAVER_CLIENT_ID: string
    NAVER_CLIENT_SECRET: string
    KAKAO_CLIENT_ID: string
  }
}
