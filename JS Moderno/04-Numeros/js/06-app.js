const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

console.log(numero1);
console.log(Number(numero1));
console.log(Number.parseInt(numero1));
console.log(Number.parseFloat(numero2));
console.log(Number.parseInt(numero3));

//Comprobar que sea entero
console.log(Number.isInteger(numero4));
console.log(Number.isInteger(numero3));
