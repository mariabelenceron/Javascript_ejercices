const obtenerNombre = info => ({
    mostrarNombre(){
        console.log(`Nombre: ${info.nombre}`);
    }
})

const guardarEmail = info => ({
    agregarEmail(email){
        console.log(`Guardando email en: ${info.nombre}`);
        info.email = email;
    }
})

const obtenerEmail = info => ({
    mostrarEmail(email){
        console.log(`Correo: ${info.email}`);
    }
})

function Cliente(nombre,email,empresa){
    let info = {nombre,email,empresa};

    //Toma una funcion y lo copia dentro de un objeto
    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info)
    )
}
function Empleado(nombre,email,puesto) {
    let info = {nombre,email,puesto};
    
    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info)
    )
}

const cliente = Cliente('Belen',null,'Platzi');
cliente.mostrarNombre();
cliente.agregarEmail('cliente@cliente.com');
cliente.mostrarEmail();

const empleado = Empleado('Juan',null,'frontend');
empleado.mostrarNombre();
empleado.agregarEmail('empleado@empleado.com');
empleado.mostrarEmail();
