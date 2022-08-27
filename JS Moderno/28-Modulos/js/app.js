import alias, { nombreCliente, ahorro, mostrarInformacion, tieneSaldo,Cliente } from './cliente.js';
import { Empresa } from './empresa.js';

alias();

console.log(nombreCliente);
console.log(ahorro);
console.log(mostrarInformacion(nombreCliente, ahorro));
tieneSaldo(ahorro);

const cliente = new Cliente(nombreCliente, ahorro);

console.log(cliente); 
console.log(cliente.mostrarInformacion()); 


const empresa = new Empresa('Belen', 200, 'CDB');

console.log(empresa); 
console.log(empresa.mostrarInformacion());  