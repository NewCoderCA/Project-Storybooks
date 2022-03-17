describe("Displays Storybooks app login page", () => {
  beforeEach(() => {
    cy.visit("https://project-storybooks.herokuapp.com/");
  });

  it("displays app titles", () => {
    cy.contains("Login page");
    cy.contains("Enjoy reading storybooks here");
    cy.contains("Creative stories");
  });

  it("displays Google login button", () => {
    cy.contains("a", "Log in with Google").should("have.attr", "href");
    cy.get(".btn");
  });
});
