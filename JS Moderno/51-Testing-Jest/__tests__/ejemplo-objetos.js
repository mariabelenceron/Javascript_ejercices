const cliente = {
    nombre: 'Belen',
    balance: 500
}

describe('Testing al cliente', () => {
    test('El cliente es premiem', () => {
        expect(cliente.balance).toBeGreaterThan(400);
    });
    test('Es Belen', () => {
        expect(cliente.nombre).toBe('Belen');
    });
    test('No es otro cliente', () => {
        expect(cliente.nombre).not.toBe('Marco');
    });
    test('No tiene 500', () => {
        expect(cliente.balance).not.toBe(400);
    });
});