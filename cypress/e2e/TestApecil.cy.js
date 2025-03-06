describe('TestApecil', () => {
    beforeEach(() => {
      cy.visit('https://front-recette3client.intencial.fr/connexion#/');
    });

    it('should handle cookie popup and login', () => {
// edited 
    cy.get('div#tarteaucitronAlertBig').should('be.visible')
    cy.wait(1000);
    cy.get('button#tarteaucitronPersonalize2').click({force:true});
  
    cy.get('input#username', { timeout: 10000 })
      .should('be.visible')
      .type('9434365784-6448405', { force: true });

    cy.contains('button', 'Suivant')
       .should('be.visible')
       .click({ force: true });

    cy.get('input#password', { timeout: 10000 })
      .should('be.visible')
      .type('test', { force: true });

    cy.contains('button', 'Connexion')
      .should('be.visible')
      .click({ force: true });
    cy.screenshot() 

    cy.get()
    // cy.get('button[data-testid="btn-contrat-click-mobile"]')
    // .should('exist');
    });
  });