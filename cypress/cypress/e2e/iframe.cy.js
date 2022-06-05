/// <reference types="cypress" />

import "cypress-iframe";

describe("example iframe app", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/iframe");
  });

  it("Enter text anarea in iframe", () => {
    cy.get("iframe").frameLoaded();
    cy.iframe()
      .find("p")
      .should("contain.text", "Your content goes here")
      .type("MZ/X 6969 testing is easy");
  });
});
