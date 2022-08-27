//for each
const pendientes = ['tarea','comer','proyecto','Estudiar JS'];

const carrito = {
    nombre: "Monitor 27 pulgadas", 
    precio: 500
}
for(let pendiente in pendientes) {
    console.log(`${pendiente}`);
}

for(let producto in carrito) {
    console.log(`${carrito[producto]}`);
}

for(let [llave, valor] of Object.entries(carrito)){
    console.log(llave);
    console.log(valor);
}