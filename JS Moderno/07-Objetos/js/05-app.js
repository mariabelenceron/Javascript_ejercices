const producto = {
    nombre: "Monitor 20 pulgadas",
    disponibilidad: true,
    precio: 200,
    informacion: {
        medidas : {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion : {
            pais: 'China'
        }
    }
}

console.log(producto);

console.log(producto.informacion.fabricacion.pais);