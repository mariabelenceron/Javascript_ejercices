function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const persona = new Cliente('Belen', 500);

function formatearCliente(cliente){
    const {nombre, saldo} = cliente;

    return `El cliente ${nombre} tiene un saldo de $ ${saldo}`;
}

console.log(formatearCliente(persona));

function Empresa(nombre, saldo, categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCJ =new Empresa('Codigo con Juan', 4000, 'Cursos en linea'); 