const producto = {
    nombre: "Monitor 20 pulgadas",
    disponibilidad: true,
    precio: 200
}
const medidas = {
    peso: '1kg',
    medida: '1m'
}

const resultado = Object.assign(producto, medidas);

//Spread Operator o Rest Operator
//... Tome una copia de producto y asigne al nuevo objeto
const resultado2 = {...producto, ...medidas}

console.log(resultado);
console.log(resultado2);