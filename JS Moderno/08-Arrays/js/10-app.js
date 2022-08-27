const carrito = [
    {nombre: "Monitor 27 pulgadas", precio: 500},
    {nombre: "Television", precio: 600},
    {nombre: "Tablet", precio: 590},
    {nombre: "Celular", precio: 800},
    {nombre: "Mouse", precio: 50},
]

const nuevoArreglo = carrito.forEach(function(producto) {
    return `${producto.nombre} -- ${producto.precio}`;
})
//map crea un arreglo nuevo
const nuevoArreglo2 = carrito.map(function(producto) {
    return `${producto.nombre} -- ${producto.precio}`;
})

console.log(nuevoArreglo);
console.log(nuevoArreglo2);