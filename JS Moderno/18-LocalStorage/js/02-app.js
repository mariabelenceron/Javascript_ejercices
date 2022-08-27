const nombre = localStorage.getItem('nombre');
console.log(nombre);

//String a Objeto 
const productoJSON = localStorage.getItem('producto');
console.log(JSON.parse(productoJSON));

const mesesJSON = localStorage.getItem('meses');
console.log(JSON.parse(mesesJSON));