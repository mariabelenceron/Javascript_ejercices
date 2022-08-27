/// <reference types="cypress" />

describe('Validar formulario', () => {
    it('Submit al formulario y mostrar la alerta de error', () => {
        cy.visit('/index.html')

        //Simular el click
        cy.get('[data-cy="formulario"]')
            .submit();

        //Seleccionar la alerta
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal','Todos los campos son Obligatorios')
        cy.get('[data-cy="alerta"]')
            .should('have.class','Todos los campos son Obligatorios')
    });
});