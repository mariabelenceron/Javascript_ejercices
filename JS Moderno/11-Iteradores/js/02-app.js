// for(let i = 0; i < 10; i++){
//     if(i === 5){
//         console.log('CINCO');
//         continue;
//     }
//     console.log(`Numero ${i}`);
// }


const carrito = [
    {nombre: "Monitor 27 pulgadas", precio: 500, descuento: false},
    {nombre: "Television", precio: 600, descuento: true},
    {nombre: "Tablet", precio: 590, descuento: true},
    {nombre: "Celular", precio: 800, descuento: true},
    {nombre: "Mouse", precio: 50, descuento: false},
]

for(let i = 0; i < carrito.length; i++){
    if(carrito[i].descuento){
        console.log(`El articulo ${carrito[i].nombre} Tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre);
}