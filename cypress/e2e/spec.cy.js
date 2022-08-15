describe("empty spec", () => {
  it("is working", () => {
    expect(true).to.equal(true);
  });

  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
});
