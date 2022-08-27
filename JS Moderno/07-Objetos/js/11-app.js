// const nombre = 'Hola';
// const precio = 20;
const producto = {
    nombre: "Monitor 20 pulgadas",
    disponibilidad: true,
    precio: 200,
    mostrarInfo: function() {
        console.log(`El Producto: ${this.nombre} tiene un precio de: ${this.precio} `);
    }
}

producto.mostrarInfo();