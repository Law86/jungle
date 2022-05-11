describe("Testing product page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("select a product and it will have an item", () => {
    cy.get(":nth-child(1) > div > .button_to > .btn").click({ force: true });
    cy.get(":nth-child(5) > .nav-link").contains(1);
  });
});
