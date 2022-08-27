const carrito = [
    {nombre: "Monitor 27 pulgadas", precio: 500},
    {nombre: "Television", precio: 600},
    {nombre: "Tablet", precio: 590},
    {nombre: "Celular", precio: 800},
    {nombre: "Mouse", precio: 50},
]

carrito.forEach(producto => console.log(`${producto.nombre} -- ${producto.precio}`))
//map crea un arreglo nuevo
const nuevoArreglo2 = carrito.map(producto => `${producto.nombre} -- ${producto.precio}`)

console.log(nuevoArreglo2);