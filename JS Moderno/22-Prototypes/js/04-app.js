//Cliente
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}
Cliente.prototype.tipoCliente = function(){
    let tipo;
    if(this.saldo > 10000){
        tipo = 'Gold';
    }else if(this.saldo > 5000){
        tipo = 'Platinum';
    }else {
        tipo = 'Gold';
    }
    return tipo;
}
Cliente.prototype.informacionCliente = function() {
    return `Nombre: ${this.nombre}, saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}
Cliente.prototype.retiraSaldo = function(retira){
    return this.saldo -= retira;
}

//Persona
function Persona(nombre, saldo, telefono){
    //Herencias
    Cliente.call(this, nombre, saldo);  //Heredar las variables
    this.telefono = telefono;
}
Persona.prototype = Object.create(Cliente.prototype);  //Para heredar las funciones
Persona.prototype.constructor = Cliente;

const belen = new Persona('Belen', 5000, 097702037);
console.log(belen);

Persona.prototype.mostrarTelefono = function (){
    return `El telefono de esta persona es ${this.telefono}`
}
console.log(belen.mostrarTelefono());
console.log(belen.tipoCliente());