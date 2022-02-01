import { loginErrorMesssage } from "../../../utils/alertMessages";

// 로그인하지 않았으므로 웹 서버

// / login으로 리디렉션
// cy.visit('http://localhost:3000/admin')
// cy.url().should('match', /login/)

describe("MAKE WEB APP LOGIN", () => {
  const userEmail = "tester@kyle.com",
    userPassword = "981205",
    noneUserEmail = "null@kyle.com",
    noneUserPassword = "981205";
  const loginFormId = "#login-form",
    emailInputId = "#email",
    passwordInputId = "#password",
    googleBtnId = "#google-login",
    appleBtnId = "#apple-login",
    msBtnId = "#ms-login";
  const loginPath = "/login",
    logoutPath = "/logout";

  describe("이메일과 비밀번호로 로그인", () => {
    beforeEach(() => {
      cy.visit(logoutPath).visit(loginPath);
    });

    it("로그인을 위한 form, input 존재", () => {
      cy.get(loginFormId)
        .should("exist")
        .get(emailInputId)
        .should("exist")
        .get(passwordInputId)
        .should("exist");
    });

    it("이메일 입력, 값 변경 원할", () => {
      cy.get(emailInputId)
        .type(userEmail)
        .should("have.value", userEmail)
        .type("{leftarrow}{rightarrow}{uparrow}{downarrow}") // 키보드 방향키 이벤트
        .type("{del}{selectall}{backspace}") // 모두 지우기
        .should("have.value", "") // 모두 지울 경우 빈 값
        .type(userEmail) // 다시 채우기
        .type("{del}{backspace}") // 하나 지우기
        .should("have.value", userEmail.slice(0, userEmail.length - 1)); // 하나 지울 경우 하나 지워진다.
    });

    it("비밀번호 입력, 값 변경 원할", () => {
      cy.get(passwordInputId)
        .type(userPassword)
        .should("have.value", userPassword)
        .type("{leftarrow}{rightarrow}{uparrow}{downarrow}") // 키보드 방향키 이벤트
        .type("{del}{selectall}{backspace}") // 모두 지우기
        .should("have.value", "") // 모두 지울 경우 빈 값
        .type(userPassword) // 다시 채우기
        .type("{del}{backspace}") // 하나 지우기
        .should("have.value", userPassword.slice(0, userPassword.length - 1)); // 하나 지울 경우 하나 지워진다.
    });

    it("이메일 유효성 검사 (올바른 이메일 형태)", () => {
      cy.get(emailInputId).type("kyle.make.education");
    });

    it("유저가 있는 경우, 이메일, 비밀번호 입력 후 제출시에 로그인 성공, 성공 후에 바로 직전에 방문했던 경로로 이동", () => {
      const backPath = "/projects";
      cy.visit(backPath)
        .visit(loginPath)
        .get(emailInputId)
        .type(userEmail)
        .get(passwordInputId)
        .type(userPassword)
        .get(loginFormId)
        .submit()
        .location()
        .should((location) => {
          expect(location.pathname).to.eq(backPath);
        })
        .visit(loginPath);
    });

    it("이메일, 비밀번호 입력 후 제출시에 로그인 (유저X)", () => {
      cy.visit(loginPath)
        .get(emailInputId)
        .type(noneUserEmail)
        .get(passwordInputId)
        .type(noneUserPassword)
        .get(loginFormId)
        .submit();
      cy.on("window:alert", (str) => {
        expect(str).to.eq(loginErrorMesssage);
      });
    });
  });

  describe("소셜 로그인", () => {
    beforeEach(() => {
      cy.visit(logoutPath).visit(loginPath);
    });

    it("구글 로그인 버튼 존재", () => {
      cy.get(googleBtnId).should("exist");
    });

    it("애플 로그인 버튼 존재", () => {
      cy.get(appleBtnId).should("exist");
    });

    it("MS 로그인 버튼 존재", () => {
      cy.get(msBtnId).should("exist");
    });
  });
});
