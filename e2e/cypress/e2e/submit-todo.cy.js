describe("Submit todo", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Page loaded", () => {
    cy.get("#todos-heading").should("be.visible");
  });

  it("Success", () => {
    const todo = `test${Math.random().toString(16)}`;
    cy.get("#todo-input").type(`${todo}{enter}`);
    cy.get("#todo-list").contains(todo);
  });

  it("Success with error", () => {
    const todo = `1,999`;
    cy.get("#todo-input").type(`${todo}{enter}`);
    cy.get("#todo-list").contains(`Catch Bulbasaur`);
  });

  it("Fail", () => {
    const todo = `999`;
    cy.get("#todo-input").type(`${todo}{enter}`);
    cy.get("#todo-list #todo-list-item").should("have.length", 2);
  });
});
