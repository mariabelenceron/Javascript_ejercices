//for each
const pendientes = ['tarea','comer','proyecto','Estudiar JS'];

const carrito = [
    {nombre: "Monitor 27 pulgadas", precio: 500},
    {nombre: "Television", precio: 600},
    {nombre: "Tablet", precio: 590},
    {nombre: "Celular", precio: 800},
    {nombre: "Mouse", precio: 50},
]

for(let pendiente of pendientes) {
    console.log(`${pendiente}`);
}
for(let producto of carrito) {
    console.log(`${producto.nombre}`);
}