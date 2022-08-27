//WeakSet

const weakset = new WeakSet();

const cliente = {
    nombre: 'Belen',
    saldo: 100
}

weakset.add(cliente);

console.log(weakset);