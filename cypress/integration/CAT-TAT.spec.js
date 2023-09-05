// CAT-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="Cypress" />




describe('Central de Atendimento ao Cliente TAT', function(){
    beforeEach(function(){
        cy.visit('./src/index.html')
    })
     
    it('verifica o titulo da aplicação', function(){
        cy.title().should('eq','Central de Atendimento ao Cliente TAT')
    })
    
    it('preenche os campos obrigatórios e envia o formulário',function(){
        const longText = 'Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test '
        cy.get('input[id="firstName"]').type('Jose Ricardo')
        cy.get('input[id="lastName"]').type('Moreira')
        cy.get('input[id="email"]').type('ricardo.oasis@gmail.com')
        cy.get('input[id="phone"]').type('9232323232')
        cy.get('textarea[id="open-text-area"]').type(longText, { delay: 0})
        cy.get('button[type="submit"]').click()
        cy.get('span[class="success"]').should('be.visible')

    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){
        cy.get('input[id="firstName"]').type('Jose Ricardo')
        cy.get('input[id="lastName"]').type('Moreira')
        cy.get('input[id="email"]').type('ricardo.oasis@gmail,com')
        cy.get('input[id="phone"]').type('9232323232')
        cy.get('textarea[id="open-text-area"]').type('Text')
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
        cy.get('#phone')
            .type('ababababa')
            .should('have.value', '')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
        cy.get('input[id="firstName"]').type('Jose Ricardo')
        cy.get('input[id="lastName"]').type('Moreira')
        cy.get('input[id="email"]').type('ricardo.oasis@gmail.com')
        cy.get('#phone-checkbox').check()
        cy.get('textarea[id="open-text-area"]').type('Text')
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })

    it('preenche e limpa os campos nome, sobrenome, email e telefone', function(){
        cy.get('input[id="firstName"]')
        .type('Jose Ricardo')
        .should('have.value', 'Jose Ricardo')
        .clear()
        .should('have.value', '')

        cy.get('input[id="lastName"]')
        .type('Moreira')
        .should('have.value', 'Moreira')
        .clear()
        .should('have.value', '')

        cy.get('#email')
        .type('jr@gmail.com')
        .should('have.value', 'jr@gmail.com')
        .clear()
        .should('have.value','')
    })

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios',function(){
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })

    it('envia o formuário com sucesso usando um comando customizado', function(){
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success').should('be.visible')
    })


})