function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log('Descargando clientes...');

        setTimeout(() => {
            resolve('Los clientes han sido descargados');
        }, 5000);
    })
}

function descargarNuevosPedidos() {
    return new Promise(resolve => {
        console.log('Descargando pedidos...');

        setTimeout(() => {
            resolve('Los pedidos han sido descargados');
        }, 3000);
    })
}

const app = async () => {
    try {
        const clientes = await Promise.all([descargarNuevosClientes(),descargarNuevosPedidos()]);
        console.log(clientes);
    } catch (error) {
        console.log(error);
    }
}

app();