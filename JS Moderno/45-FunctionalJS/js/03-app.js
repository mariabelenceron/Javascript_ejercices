const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

// const resultado = carrito.filter( producto => {
//     return producto.precio > 400;
// });

// console.log(resultado);

const mayor400 = producto => {
    return producto.precio > 400;
}
const compuAccesorios = accesorio => {
    return accesorio.nombre === 'Monitor 20 Pulgadas';
}

const resultado = carrito.filter(mayor400).filter(compuAccesorios);
console.log(carrito);
console.log(resultado);