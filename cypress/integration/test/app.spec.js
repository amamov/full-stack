describe("MAKE WEB APP BASIC", () => {
  it("공통 레이아웃 테스트", () => {
    const existHeaderAndFooter = (url) => {
      cy.visit(url);
      cy.get("header").should("exist");
      cy.get("footer").should("exist");
    };

    existHeaderAndFooter("/");
    existHeaderAndFooter("/login");
    existHeaderAndFooter("/signup");
    existHeaderAndFooter("/policy");
    existHeaderAndFooter("/signup/self");
    existHeaderAndFooter("/projects");
    existHeaderAndFooter("/projects/modify/1");
    existHeaderAndFooter("/profile");
    existHeaderAndFooter("/profile/change-password");
    existHeaderAndFooter("/profile/find-password");
  });
});
