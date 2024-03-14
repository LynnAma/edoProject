import { getAdmin } from "../../fixtures/index.js";
import { LoginPage } from "../../support/pages/index";

const loginPage = new LoginPage();
const adminUser = getAdmin();

describe('Login Test', () => {

  beforeEach(() => {
    loginPage.accessLoginModal();
  });

  it('Test that user is unable to login with wrong email but correct password', () => {
    loginPage.login('damiuser001@yopmail', adminUser.password);
    cy.get('.coat-of-arm').should('be.visible')
  })

  it('Test that user is unable to login with correct email but wrong password', () => {
    loginPage.login(adminUser.email, 'Password');
    cy.get('.coat-of-arm').should('be.visible')
  })

  it('Test that user is unable to login without email but correct password', () => {
    cy.get('input[type="password"]').type(adminUser.password);
    cy.get('.coat-of-arm').should('be.visible')
  })

  it('Test that user is unable to login with correct email but no password', () => {
    cy.get('input[type="email"]').type(adminUser.email);
    cy.get('.coat-of-arm').should('be.visible')
  })

  it('Test that user is unable to login without email or password', () => {
    cy.get(`button[type="button"]`).contains("LOGIN");
    cy.get('.coat-of-arm').should('be.visible')
  })

  it('Test that user is unable to login with valid email and password', () => {
    loginPage.login(adminUser.email, adminUser.password);
    cy.wait(8000)
    cy.get('h5.m-b-3').contains('Good').should('be.visible')
    cy.get('h3.m-b-3').contains('amayindi lynn').should('be.visible')
    
  })
})