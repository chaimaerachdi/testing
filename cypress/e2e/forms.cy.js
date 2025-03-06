describe('form tests', () => {
  beforeEach(()=>{
    cy.visit("/forms")//you can put this an other url here  
  })
  it('test subscrribe for ',()=>{
    // cy.contains(/testing fundamentals/i)
    cy.getDataTest('subscrie-form').find('input').as('subscribe-input')
    cy.get('@subscribe-input').type('crachdi@novelis.io')
    cy.contains('/Successefully subbed /i: crachdi@novelis.io!').should('not.exist')
    cy.getDataTest('subscrie-form').click()
    cy.contains('/Successefully subbed /i: crachdi@novelis.io!').should('exist')
    cy.wait(3000)//------------------------------after 3 seconds this shold not be visible 
    cy.contains('/Successefully subbed /i: crachdi@novelis.io!').should('not.exist')
    cy.contains('successefully subscribed to the plateform ')
    cy.get('same-input').type('hello from chaimae')
   })
})
