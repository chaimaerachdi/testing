describe('TestApecil', () => {
  beforeEach(() => {
    cy.visit('https://front-recette3.intencial.fr/connexion#/');
  });

  it('should handle cookie popup and login', () => {

  cy.get('div#tarteaucitronAlertBig').should('be.visible')
  cy.wait(1000);
  cy.get('button#tarteaucitronPersonalize2', { timeout: 10000 }).click({force:true});
// username 
  cy.get('input#username', { timeout: 10000 })
    .should('be.visible')
    .type('40114869-1665707', { force: true });
// next
  cy.contains('button', 'Suivant')
     .should('be.visible')
     .click({ force: true});
// password
  cy.get('input#password', { timeout: 10000 })
    .should('be.visible')
    .type('test', {force: true});
// connexion
  cy.contains('button', 'Connexion')
    .should('be.visible')
    .click({ force: true });
    
  cy.on('uncaught:exception', (err) => {
      if (err.message.includes('Cannot read properties of undefined')) {
          return false;
      }
      return true;
  });

  cy.get('#univers-intencial', { timeout: 10000 }).click({force:true});

  cy.visit('https://front-recette3.intencial.fr/demarrer-projet-souscription?referrer=https%3A%2F%2Ffront-recette3.intencial.fr%2Faccueil-connect#/');
// choisir personne physique 
  cy.get('button[data-testid="personne-physique-btn"]',{ timeout: 10000 }).click({force:true});
// cin---> non  
  cy.get('button[data-testid="piece-identite-numerique-Non"]',{ timeout: 10000 }).click({force:true});
// checkbox
// Serially clicks all matching checkboxes to ensure they are selected
  cy.get('span.co-radio__checkmark',{ timeout: 10000 }).click({ multiple: true });
  
  cy.get('#\\:r1c\\:', { timeout: 10000 }).type('test nom', { force: true });
  cy.get('#\\:r1d\\:', { timeout: 10000 }).type('test prenom', { force: true });
  cy.get('input[name="client.etatCivil.dateNaissance"]', { timeout: 10000 }).type('01/01/2002', { force: true });//CAPEUT  CHANGER SELON LE BUILD   VAUT MIEUX UTILISER LE NAME 
  cy.get('input[type="email"]', { timeout: 10000 }).type('chaimaer759@gmail.com', { force: true });
// VILLE DE NAISSANCE  OK 
  cy.get('input[id="client.etatCivil.villeNaissance"]',{ timeout: 10000 }).type('Paris 1er Arrondissement', { force: true });
// click sur  le combobox pour afficher  les options :
  // cy.get('').select('Option 2');
// code telephonique
  cy.get('#telephoneMobile\\.indicatif-input').type('FRANCE ( 0033 ) {enter}');
  cy.get('input[id="telephoneMobile.numeroTelephone"]',{ timeout: 10000 }).type('06 12 34 56 78', { force: true });




});
});