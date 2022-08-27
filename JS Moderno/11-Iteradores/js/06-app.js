//for each
const pendientes = ['tarea','comer','proyecto','Estudiar JS'];

pendientes.forEach(pendiente => console.log(pendiente))

pendientes.forEach((pendiente,i) => {
    console.log(`${i} : ${pendiente}`);
})

const carrito = [
    {nombre: "Monitor 27 pulgadas", precio: 500},
    {nombre: "Television", precio: 600},
    {nombre: "Tablet", precio: 590},
    {nombre: "Celular", precio: 800},
    {nombre: "Mouse", precio: 50},
]

carrito.forEach((producto) => {
    console.log(`${producto.nombre} => ${producto.precio}`);
})