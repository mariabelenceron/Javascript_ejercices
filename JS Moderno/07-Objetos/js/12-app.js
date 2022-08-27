//Object Literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    disponibilidad: true,
    precio: 200,
}

//Object Constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Monitor de 24 pulgadas', 500);
console.log(producto2);

