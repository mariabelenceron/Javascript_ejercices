//Constructor Pattern : Se usa clase base para que las demás hereden(clases abstractas)
class Persona {
    constructor(nombre,email){
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente extends Persona {
    constructor(nombre,email,empresa){
        super(nombre,email);
        this.empresa = empresa;
    }
}

const persona = new Persona('Belen','persona@persona.com');
console.log(persona);

const cliente = new Cliente('Maria','cliente@cliente.com','Platzi');
console.log(cliente);