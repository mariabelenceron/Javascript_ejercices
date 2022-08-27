//No modificar el objeto (Use strict)
"use strict";
const producto = {
    nombre: "Monitor 20 pulgadas",
    disponibilidad: true,
    precio: 200
}
//Si se puede modificar lo que existe, pero no agregar ni eliminar
Object.seal(producto);
producto.disponibilidad = false;
// producto.image = "image.jpg";

console.log(producto);
console.log(Object.isSealed(producto));