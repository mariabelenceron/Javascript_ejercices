const cliente = {
    nombre: 'Maria Belen',
    balance: 500,
    tipo: 'Premium'
}

describe('Testing al cliente', () => {
    test('Es Belen', () => {
        expect(cliente).toMatchSnapshot();
    });
});