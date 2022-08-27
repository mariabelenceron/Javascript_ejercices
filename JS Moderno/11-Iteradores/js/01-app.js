for(let i = 0; i < 20; i++){
    console.log(i%2 == 0 ? `${i} es par` : `${i} es impar`);
}

const carrito = [
    {nombre: "Monitor 27 pulgadas", precio: 500},
    {nombre: "Television", precio: 600},
    {nombre: "Tablet", precio: 590},
    {nombre: "Celular", precio: 800},
    {nombre: "Mouse", precio: 50},
]

console.log(carrito.length);
for(let i = 0; i < carrito.length; i++){
    console.log(carrito[i].nombre);
}