const obtenerCliente = () => {
    const nombre = "Belen";
    function muestraNombre() {  
        console.log(nombre);
        
    }

    return muestraNombre;
}

const cliente = obtenerCliente();

cliente();