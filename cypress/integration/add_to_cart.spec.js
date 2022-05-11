describe("Testing add to cart", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Display a title by default", () => {
    cy.get("h1").should("contain", "Jungle");
  });
});
