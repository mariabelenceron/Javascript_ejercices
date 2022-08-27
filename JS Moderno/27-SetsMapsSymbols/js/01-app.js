const carrito = new Set();

carrito.add('Camisa');
//No agrega valores duplicados
carrito.add('Disco #1');
carrito.add('Disco #1');
carrito.add('Disco #2');
//Saber si tiene o no algun elemento
console.log(carrito.has('Camisa'));
console.log(carrito.has('Camisas'));

//Eliminar un elemento
//console.log(carrito.delete('Camisa')); //Retorna true o false
// carrito.delete('Camisa');

// console.log(carrito.size);

// carrito.clear();

carrito.forEach(producto => {
    console.log(producto);
})

//Tener los no duplicados
const numeros = [10,20,30,40,50,30,20,10,60,30,29];
const noDuplicados = new Set(numeros);

console.log(noDuplicados);