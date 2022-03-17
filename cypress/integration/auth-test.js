describe("Displays Storybooks app login page", () => {
    beforeEach(() => {
      cy.visit("https://project-server-mongodb-oauth.herokuapp.com/");
    });
  
    it("displays app titles", () => {
      cy.contains("Login page");
      cy.contains("Enjoy your read");
      cy.contains("Read storybooks");
    });
  
    it("displays Google login button", () => {
      cy.contains("a", "Log in with Google").should("have.attr", "href");
      cy.get(".btn");
    });

  
  });
  