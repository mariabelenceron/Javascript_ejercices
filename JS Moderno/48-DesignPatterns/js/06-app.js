class Persona {
    constructor(nombre,email){
        this.nombre = nombre;
        this.email = email;
    }
}

const funcionesPersona = {
    mostrarInformacion(){
        console.log(`Nombre Persona: ${this.nombre} Email: ${this.email}`);
    },
    mostrarNombre(){
        console.log(`Mi nombre es ${this.nombre}`);
    }
}

//Añadir funciones persona a la clase Persona
Object.assign(Persona.prototype, funcionesPersona);

const cliente = new Persona('Belen','correo@correo.com');

console.log(cliente);
cliente.mostrarInformacion();
cliente.mostrarNombre();