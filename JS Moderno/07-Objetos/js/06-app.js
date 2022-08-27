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

const {nombre, informacion,informacion: {fabricacion, fabricacion: {pais}}} = producto;

console.log(pais);