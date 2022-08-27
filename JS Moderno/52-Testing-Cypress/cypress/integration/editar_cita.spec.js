/// <reference types="cypress" />

describe('Llenar los campos para una nueva cita, lo muestra y lo muestra', () => {
    it('Llena la cita', () => {
        cy.visit('/index.html');

        cy.get('[data-cy="mascota-input"]')
            .type('Zasha');
        cy.get('[data-cy="propietario-input"]')
            .type('Belen Ceron');
        cy.get('[data-cy="telefono-input"]')
            .type('0997702037');
        cy.get('[data-cy="fecha-input"]')
            .type('2021-12-29');
        cy.get('[data-cy="hora-input"]')
            .type('12:03');
        cy.get('[data-cy="sintomas-textarea"]')
            .type('Solo come y duerme');

        cy.get('[data-cy="submit-cita"]')
            .click();
        
        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal','Administra tus Citas')

        //Seleccionar la alerta
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal','Se agregó correctamente')
        cy.get('[data-cy="alerta"]')
            .should('have.class','alert-success')
    });

    it('Edita la cita', () => {
        cy.get('[data-cy=btn-editar]').click();

        cy.get('[data-cy="mascota-input"]')
            .clear()
            .type('Zashita');

        cy.get('[data-cy="submit-cita"]')
            .click();

        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal','Guardado Correctamente')
        cy.get('[data-cy="alerta"]')
            .should('have.class','alert-success')
    });
});