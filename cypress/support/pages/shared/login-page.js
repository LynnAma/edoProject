import { sharedData } from "../../../fixtures/index";

export class LoginPage {
  emailField = () =>
  cy.get('input[type="email"]');
  passwordField = () =>
  cy.get('input[type="password"]');
  loginButton = () => cy.get(`button[type="button"]`).contains("LOGIN");

  accessLoginModal() {
      cy.visit(sharedData.paths.login);
      cy.get('.coat-of-arm').should('be.visible')
  }

  clickLogin = () => {
    return this.loginButton().click({ force: true });
  };

  login = (email, password) => {
    this.emailField().type(email);
    this.passwordField().type(password);
    return this.clickLogin();
  };
}
