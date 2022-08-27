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

let resultado;
//Hago una copia de carrito y pego al final el producto
resultado = [...carrito, producto];
//Hago una copia de resultado y pego al final el producto2
resultado = [...resultado, producto2];
//Pongo al inicio producto3 y pego al final lo que tenga resultado
resultado = [producto3,...resultado];

console.table(resultado)