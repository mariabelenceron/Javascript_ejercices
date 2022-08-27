//Destructuring con arreglos
const numero = [10, 20, 30, 40, 50];

// const [ , , tercero] = numero;
const [ primero, segundo, ...tercero] = numero;

console.log(primero);