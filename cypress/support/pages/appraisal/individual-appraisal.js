export class IndividualAppraisalPage {
  accessIndividualAppraisalPage() {
    cy.get(":nth-child(3) > a > .has-sub-menu > .title").click();
    cy.get(".show > :nth-child(6) > a")
      .contains("Individual Appraisal")
      .click();
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
    cy.wait(5000);
    cy.contains("Goal Setting").should("be.visible");
  }

  accessPerformancePage() {
    cy.get(".has-sub-menu > .title").contains("Performance").click();
    cy.get(":nth-child(3) > details > summary > .collapse-expand-trigger")
      .contains("Expand Section")
      .click();
  }

  setupMDAAndApprover() {
    cy.get(
      ":nth-child(1) > .m-b-10 > .css-13cymwt-control > .css-1wy0on6"
    ).click({ force: true });
    cy.get('[id="react-select-2-listbox"]')
      .contains("test")
      .click({ force: true });
    cy.get(`input[id="react-select-3-input"]`).type("Amayindi");
    cy.get('[id="react-select-3-listbox"]')
      .contains("amayindi")
      .click({ force: true });
    cy.get(`[class*="collapse-expand-trigger"]`)
      .contains("Expand Section")
      .click({ force: true });
    cy.get(".collapsible-content > p")
      .contains("Test and Retest")
      .should("be.visible");
  }

  initiatePerformance() {
    cy.get(`button[type="button"]`).contains("Initiate Performance").click();
  }

  addGoalWithoutPriority(goalEntry) {
    cy.get(`button[type="button"]`).contains("Add Goals").click();
    cy.get(`input[name="goal"]`).type(goalEntry);
    cy.get(`button[class*="btn-large"]`).contains("Add").click();
  }

  addPriorityWithoutGoal(priorityEntry) {
    cy.get(`button[type="button"]`).contains("Add Goals").click();
    cy.get(`input[name="priority"]`).type(priorityEntry);
    cy.get(`button[class*="btn-large"]`).contains("Add").click();
  }

  dontAddPriorityAndGoal() {
    cy.get(`button[type="button"]`).contains("Add Goals").click();
    cy.get(`button[class*="btn-large"]`).contains("Add").click();
  }

  addGoalAndPriority(goalEntry, priorityEntry){
    cy.get(`button[type="button"]`).contains("Add Goals").click();
    cy.get(`input[name="goal"]`).type(goalEntry);
    cy.get(`input[name="priority"]`).type(priorityEntry);
    cy.get(`button[class*="btn-large"]`).contains("Add").click();
  }

  removeGoal() {
    cy.get(`button[class*="btn-small"]`).contains("Remove").click();
    cy.get(`button[class*="btn-small"]`).should("not.exist");
  }
}
