# FE BDD Test

> [cypress docs](https://docs.cypress.io/api/table-of-contents)

## 디렉터리 구조 설명

- `cypress/integration/test/*` 경로에서 테스트 파일을 작성합니다

- `cypress/plugins/*` 경로는 외부 플러그인을 설정하는 디렉터리입니다.

- `cypress/fixtures/*` 경로는 테스트에 필요한 정적 파일들을 관리하는 디렉터리입니다.

  - Load a fixed set of data located in a file.

- `cypress/support/*` 경로에서 `index.js`는 테스트 파일을 실행하기 전에 실행됩니다. 전역 설정을 할 수 있는 디렉터리입니다.

## 테스트 코드 컨벤션

- 테스트 파일 이름은 `*.spec.js`으로 작성합니다.

- 단위 테스트 메소드는 `test` 대신에 `it`으로 통일합니다.

- 사용자 시나리오에 맞게 테스트 코드를 작성합니다.

- 외부 환경에 독립되어야 합니다.
