const usuario = false;
const puedoPagar = false;

if(usuario && puedoPagar) {
    console.log('Si puedes pagar');
} else if(!usuario && !puedoPagar) {
    console.log('No puedes pagar');
} else if(!usuario){
    console.log('Inicia sesión o registrate');
} else if(!puedoPagar){
    console.log('Fondos Insuficientes');
}