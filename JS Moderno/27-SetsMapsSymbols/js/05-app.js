const sym = Symbol();
const sym2 = Symbol();

if(sym === sym2){
    console.log('Son iguales');
}else{
    console.log('Diferentes');
}

const nombre = Symbol();
const apellido = Symbol();

const persona = {}

//Agregar nombre y apellido como llaves del objeto
persona[nombre] = 'Belen';
persona[apellido] = 'Ceron';
persona.tipoCliente = 'Premium';
persona.saldo = 3000;

console.log(persona);

//Las propiedades que utilizan un symbol no son iterables

for(let i in persona){
    console.log(i);
}

//Definir una descripción del symbol
const nombreCliente = Symbol('Nombre del cliente');
const cliente = {};

cliente[nombreCliente] = 'Pedro';

console.log(cliente); 
console.log(cliente[nombreCliente]); // Muestra el valor
console.log(nombreCliente); //Muestran la definición del symbol



// nombre = 'Belen';
// for(let i in nombre){
//     console.log(nombre[i]);
// }

// array = ['hola','febrero','enero'];
// for(let i in array){
//     console.log(array[i]);
// }