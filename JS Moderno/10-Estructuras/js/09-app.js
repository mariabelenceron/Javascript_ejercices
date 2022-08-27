const autenticado = true;
const puedoPagar = false;

console.log(autenticado ? puedoPagar ? 'Si esta autenticado y puede pagar' : 'Si autenticado, no puede pagar' : 'No esta autenticado');

if(autenticado){
    if(puedoPagar){
        console.log('Si esta autenticado y puede pagar');
    } else {
        console.log('Si autenticado, no puede pagar');
    }
} else {
    console.log('No esta autenticado');
}