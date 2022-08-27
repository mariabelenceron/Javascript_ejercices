//Singleton: previene que no se creen multiples instancias de un mismo objeto
let instancia = null;

class Persona {
    constructor(nombre,email){
        if(!instancia){
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        } else {
            return instancia;
        }
    }
}

const persona1 = new Persona('Belen','mabelenceron@gmail.com');
console.log(persona1);
const persona2 = new Persona('Jose','jose@gmail.com');
console.log(persona2);