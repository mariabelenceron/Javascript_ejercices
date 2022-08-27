const carrito = [];

//Definir un producto
const producto = {
    nombre: "Monitor 32 pulgadas",
    precio: 400
}
const producto2 = {
    nombre: "Celular",
    precio: 800
}
const producto3 = {
    nombre: "Teclado",
    precio: 50
}
const producto4 = {
    nombre: "Teclado 2",
    precio: 50
}

carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3);
carrito.unshift(producto4);

console.table(carrito);
//Eliminar del final
let ultimo = carrito.pop();
console.table(carrito);
console.log(ultimo);

//Eliminar al inicio
let primero = carrito.shift();
console.table(carrito);
console.log(primero);

//Eliminar por el medio
//Posición que inicia a cortar, cuantos elementos quiere eliminar
let medio = carrito.splice(0, 1);
console.table(carrito);
console.log(medio);