const carrito = [
    {nombre: "Monitor 27 pulgadas", precio: 500},
    {nombre: "Television", precio: 600},
    {nombre: "Tablet", precio: 590},
    {nombre: "Celular", precio: 800},
    {nombre: "Mouse", precio: 50},
]

for(let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre} -- ${carrito[i].precio}`);
} 

carrito.forEach(function(producto) {
    console.log(`${producto.nombre} -- ${producto.precio}`);
})