const producto = {
    nombre: "Monitor 20 pulgadas",
    disponibilidad: true,
    precio: 200,
}
//Retorna arreglo con las llaves del objeto
console.log(Object.keys(producto));

//Retorna arreglo con los valores del objeto
console.log(Object.values(producto));

//Retorna todo el objeto en pares
console.log(Object.entries(producto));