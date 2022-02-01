# full stack boilerplate for LIO STUDIO "PIE"

> Scalable Full Stack Boilerplate For LIO STUDIO "PIE" Platform

## Tech Stack

- Typescript
- [NEXT.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/docs/concepts/overview/why-prisma)
- [next-api-decorators](https://github.com/storyofams/next-api-decorators)
- [SWR](https://swr.vercel.app/docs/getting-started)
- [MobX](https://ko.mobx.js.org/README.html)
- [styled-components](https://styled-components.com/docs/basics#motivation)
- [next-auth](https://next-auth.js.org/)
- [react-hook-form](https://react-hook-form.com/)
- [cypress](https://docs.cypress.io/guides/overview/why-cypress)

## .env.development

```python
## nextjs
ANALYZE="false" # or true

# Linux: `openssl rand -hex 32` or go to https://generate-secret.now.sh/32
SECRET="..."

# next-auth
NEXTAUTH_URL="http://localhost:3000"

GOOGLE_ID="..."
GOOGLE_SECRET="..."

NAVER_CLIENT_ID="..."
NAVER_CLIENT_SECRET="..."

KAKAO_CLIENT_ID="..."

## prisma env
DATABASE_URL="postgresql://amamov:1205@localhost:5432/amamov?schema=public"
DEBUG="prisma:client"

## docker postgresql db env
POSTGRES_DB="amamov"
POSTGRES_USER="amamov"
POSTGRES_PASSWORD="1205"
```

## 프로젝트 환경

- `node` version : 16.x

- `npm` version : 8.x

- `vscode` 에디터

- `eslint` 플러그인 `dbaeumer.vscode-eslint` 설치

- `prettier` 플러그인 `esbenp.prettier-vscode` 설치

- `prisma` 플러그인 `prisma.prisma` 설치

## Github Actions CI/CD

- `CI.yml` : 지속적 통합

  - 정적 테스트 `eslint`

  - 코드 포메팅 `prettier`

  - 타입스크립트 빌드 테스트

- `CD.yml` : 지속적 드리븐 및 디벨롭

  - 도커라이징

- `TEST.yml` : `cypress` 기반의 시나리오 기반 E2E 테스트

---

<br>

# 백엔드 개발

> 기본적으로 NestJS, Spring-MVC 프레임워크 철학을 따릅니다.

- `src/pages/api/**.ts`는 하나의 API 도메인과 일대일 대응됩니다

- `파이프 패턴`, `MVC 패턴`을 적용합니다.

- `DTO`를 명시합니다.

- `HTTP2.0` 프로토콜 기반의 개발이 아닌 프로토콜 개발은 마이크로 개발 패턴을 지향합니다.

---

<br>

# 프론트엔드 개발

## React, UI 정의

> [React](https://reactjs.org/) : A JavaScript Library For Building User Interfaces

`함수(function)`이란 `입력(input)`에 의해 원하는 `출력(output)`이 나오는 기계입니다.

`UI = Presenter(State or Props)` : `UI`는 `Presenter` 함수에 `State` 또는 `Props`를 입력으로 넣었을때 출력 값입니다.

## 프로젝트 디자인 패턴

### React Container Presenter Pattern

> `React Container Presenter Pattern` 디자인 패턴을 적용합니다. "데이터 처리와 데이터 출력을 분리한다."

- `React Container Presenter Pattern` 디자인 패턴은 로직을 수행하는 컨테이너 컴포넌트와 마크업 컴포넌트를 분리하는 기본적인 React 디자인 패턴입니다.

  - 마크업 컴포넌트(presentational component), 컨테이너 컴포넌트(container component), CSS 스타일 파일을 분리합니다.

  - 마크업 컴포넌트는 state를 직접 조작하지 않고 container component 혹은 store에서 관리되는 props를 사용합니다. 단순 디자인와 웹 표준에 집중합니다.

  - 컨테이너 컴포넌트는 디자인에 집중하지 않습니다. state를 관리하고 라이프 사이클에 맞추어 이벤트 헨들링을 합니다.

  - CSS 스타일 파일은 `styled-component`를 기반으로 마크업 컴포넌트의 스타일을 정의합니다.

- 마크업 컴포넌트는 `App.presenter.tsx`과 같이 `**.presenter.tsx` 형식으로 네이밍합니다.

- 컨테이너 컴포넌트는 `App.tsx`와 같이 컴포넌트 이름과 동일한 이름으로 네이밍합니다.

- CSS 스타일 파일은 `App.style.tsx`과 같이 `**.style.tsx` 형식으로 네이밍합니다.

- `pages` 디렉토리에 해당하는 파일은 URL과 매칭됩니다. 따라서 SEO 처리 및 SSR 등 로직(`getStaticProps` 함수 등)만 작성합니다. 각 page에 대한 컨테이너 컴포넌트와 마크업 컴포넌트, 스타일 컴포넌트는 `components/features` 폴더에서 관리됩니다.

  - `pages/blog.tsx`는 `/blog` URL과 매칭됩니다. `blog.tsx`에 해당하는 컨테이너 컴포넌트는 `components/features/blog/Blog.tsx`에서 정의되고 마크업 컴포넌트는 `components/features/blog/Blog.presenter.tsx`에서 정의되고 스타일 컴포넌트는 `components/features/blog/Blog.style.tsx`에서 정의됩니다. 만일 Blog 컴포넌트에서 사용되는 보조 컴포넌트는 `components/features/blog/**`에서 관리됩니다.

- 프로젝트 전체적으로 단일 책임 원칙을 지킵니다. 하나의 함수 또는 하나의 클래스는 하나의 책임을 가집니다.

## 코드 컨벤션

- 기본적인 코드 컨벤션은 `.eslintrc.js`와 `.prettierrc`을 따라갑니다.

- 라이브러리, 자바스크립트 호환성 목적이 아닌 `any` 타입은 사용하지 않습니다.

- `RootDocument` 컴포넌트를 제외한 모든 컴포넌트는 기본적으로 함수형 컴포넌트 기반으로 사용합니다.

  - 컴포넌트 선언은 에로우 함수 형식이 아닌 `function` 키워드를 사용합니다. (NEXT.js에서 제공하는 `getStaticProps` 등 메소드와 구분하기 위해, 호이스팅)

  - 컴포넌트 표기법은 파스칼 표기법을 지킵니다. (`HomePage.tsx`)

- React Custom Hook은 최대한 [공식 문서에서 정의하는 Hook 규칙](https://ko.reactjs.org/docs/hooks-rules.html)을 따라갑니다.

  - DI용 Hook 또한 허용합니다.

  - `hooks` 디렉토리에서 관리합니다.

- 네이밍 규칙

  - 컴포넌트 파일일 경우 컴포넌트 이름과 동일하게 정의합니다. 컴포넌트 이름은 파스칼 표기법을 따라갑니다.

  - 컴포넌트, 클래스를 제외하고 모두 카멜 표기법을 따라갑니다.

  - Hook들은 모두 `useWindowSize`와 같이 `use**` 방식으로 네이밍합니다.
