// Currying y Partials
const suma = (a,b,c) => a + b + c;

// const parcial = a => (b,c) => suma(a,b,c);
// const primerNumero = parcial(5);
// const resultado = primerNumero(4,3);
// console.log(resultado);

const parcial = a => b => c => suma(a,b,c);
// const firstNumber = parcial(5);
// const secondNumber = firstNumber(4);
// const result = secondNumber(3);
// console.log(result);

const resultadoParcial = parcial(5)(4)(3);
console.log(resultadoParcial);