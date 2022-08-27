function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const persona = new Cliente('Belen', 500);

console.log(persona);