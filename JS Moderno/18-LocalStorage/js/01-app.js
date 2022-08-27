localStorage.setItem('nombre', 'Belen');

const producto = {
    nombre: "Monitor 24 pulgadas",
    precio: 300
}

//de objeto a string
const productoString = JSON.stringify(producto);
console.log(typeof productoString);
localStorage.setItem('producto', productoString);

//De arreglo a string
const meses = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem('meses', JSON.stringify(meses));
