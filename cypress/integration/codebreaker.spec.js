describe('Probar code breaker', () => {
  it('Deberia retornar ', () => {
    cy.visit('/');

    cy.get('#code')
      .type('1234');

    cy.get('#enviar')
      .click();

    cy.get('#result').should('contain', 'xxxx');

    cy.get('#code')
    .clear();

    cy.get('#code')
    .type('1245');

    cy.get('#enviar')
    .click();

    cy.get('#result').should('contain', 'xx-');

    cy.get('#code')
    .clear();

    cy.get('#code')
    .type('2315');

    cy.get('#enviar')
    .click();

    cy.get('#result').should('contain', '---');

  });


})
