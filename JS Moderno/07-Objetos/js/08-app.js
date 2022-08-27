//No modificar el objeto (Use strict)
"use strict";
const producto = {
    nombre: "Monitor 20 pulgadas",
    disponibilidad: true,
    precio: 200
}
//No permite agregar ni modificar el objeto
Object.freeze(producto);
// producto.disponibilidad = false;
// producto.image = "image.jpg";

console.log(producto);
console.log(Object.isFrozen(producto));