//Module Pattern
//Forma nueva
// const mostrarCliente = nombre => {
//     console.log(nombre);
// }

// export default mostrarCliente;

//Forma antigua de los modulos
const modulo1 = (function() {
    const nombre = 'Belen';

    function hola() {
        console.log('hola');
    }

    return {
        nombre,
        hola
    }
})();