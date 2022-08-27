const producto = {
    nombre: "Monitor 20 pulgadas",
    disponibilidad: true,
    precio: 200
}

producto.disponibilidad = false;
delete producto.precio;

console.log(producto);