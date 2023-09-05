
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('input[id="firstName"]').type('Jose Ricardo')
    cy.get('input[id="lastName"]').type('Moreira')
    cy.get('input[id="email"]').type('ricardo.oasis@gmail.com')
    cy.get('input[id="phone"]').type('9232323232')
    cy.get('textarea[id="open-text-area"]').type('Test', { delay: 0})
    cy.contains('button','Enviar').click()
})