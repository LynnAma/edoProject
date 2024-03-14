import { getAdmin } from "../../fixtures/index.js";
import { LoginPage, IndividualAppraisalPage } from "../../support/pages/index";

const loginPage = new LoginPage();
const adminUser = getAdmin();
const individualAppraisal = new IndividualAppraisalPage();
let priorityText = "Test";
let priorityNumber = 20;
let noValue = ""

describe('Individual Appraisal', () => {
beforeEach( () => {
  loginPage.accessLoginModal();
  loginPage.login(adminUser.email,adminUser.password)
})
it('test that user is unable to initiate performance if there is no active ', () => {
   individualAppraisal.accessIndividualAppraisalPage();
   individualAppraisal.accessPerformancePage();
   individualAppraisal.setupMDAAndApprover();
   individualAppraisal.initiatePerformance();
   cy.contains("No performance stage is currently activated or the time for the current stage has elapsed. Kindly activate a stage").should('be.visible');
   cy.get('.swal2-confirm').click()
  }) 

it('test that tthe user is unable to add goals to an MDA using text as priority value', () => {
  individualAppraisal.accessIndividualAppraisalPage();
  individualAppraisal.accessPerformancePage();
  individualAppraisal.setupMDAAndApprover();
  individualAppraisal.addGoalAndPriority(priorityText,priorityText);
  cy.get(`button[class*="btn-small"]`).should("not.exist");
})

it('test that tthe user is able to add goals to an MDA using numbers as priority value', () => {
  individualAppraisal.accessIndividualAppraisalPage();
  individualAppraisal.accessPerformancePage();
  individualAppraisal.setupMDAAndApprover();
  individualAppraisal.addGoalAndPriority(priorityText,priorityNumber);
  cy.get(`button[class*="btn-small"]`).should("be.visible");
})

it('test that tthe user is unable to add goals to an MDA without goal and priority', () => {
  individualAppraisal.accessIndividualAppraisalPage();
  individualAppraisal.accessPerformancePage();
  individualAppraisal.setupMDAAndApprover();
  individualAppraisal.dontAddPriorityAndGoal();
  cy.get(`button[class*="btn-small"]`).should("not.exist");
})

it('test that tthe user is unable to add goals to an MDA without goal', () => {
  individualAppraisal.accessIndividualAppraisalPage();
  individualAppraisal.accessPerformancePage();
  individualAppraisal.setupMDAAndApprover();
  individualAppraisal.addPriorityWithoutGoal(priorityNumber);
  cy.get(`button[class*="btn-small"]`).should("not.exist");
})

it('test that tthe user is unable to add goals to an MDA without priority', () => {
  individualAppraisal.accessIndividualAppraisalPage();
  individualAppraisal.accessPerformancePage();
  individualAppraisal.setupMDAAndApprover();
  individualAppraisal.addGoalWithoutPriority(priorityText);
  cy.get(`button[class*="btn-small"]`).should("not.exist");
})

it('test that tthe user is able to remove goals from MDA', () => {
  individualAppraisal.accessIndividualAppraisalPage();
  individualAppraisal.accessPerformancePage();
  individualAppraisal.setupMDAAndApprover();
  individualAppraisal.addGoalAndPriority(priorityText,priorityNumber);
  individualAppraisal.removeGoal();
})

})



       