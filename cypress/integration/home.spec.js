// cypress/integration/home.spec.js
describe('Home Page', () => {
    it('should load the home page and display the hologram', () => {
      cy.visit('http://localhost:5173'); // Adjust the port if necessary
      cy.get('.hologram-container').should('be.visible');
    });
  });
  