const url = 'http://localhost:4000/clientes';

//Cuando se crea un nuevo cliente
export const nuevoCliente = async cliente => {
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify( cliente ),
            //Información de que tipo de datos se envia
            headers: {
                'Content-Type': 'application/json'
            }
        })
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}

//Obtiene todos los clientes
export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;
    } catch (error) {
        console.log(error);
    }
}

//Elimina el cliente
export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}

//Obtiene un cliente por su id
export const obtenerCliente = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        return cliente;
    }catch(error){
        console.log(error);
    }
}

//Actualiza un registro
export const editarCliente = async cliente => {
    try {
        await fetch(`${url}/${cliente.id}`, {
            //PUT : Completo
            //PATCH: Parcial
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }

}