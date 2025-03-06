Cypress.Commands.add('acceptCookies', () => {
    cy.get('body').then(($body) => {
      if ($body.find('#tarteaucitronRoot').length > 0) {
        cy.get('#tarteaucitronPersonalize2', { timeout: 90000 })
          .contains('Accepter tout et fermer')
          .should('be.visible')
          .click({ force: true });
  
        cy.get('#tarteaucitronRoot').should('not.exist');
      } else {
        // If the popup doesn't exist, log a message
        cy.log('Cookie popup not found, skipping...');
      }
    });
});

Cypress.Commands.add('RemplirFormSouscription', () => {
 
});