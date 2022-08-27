// class Cliente {
//     #nombre;
//     constructor(nombre, saldo){
//         this.#nombre = nombre;
//         this.saldo = saldo;
//     }

//     mostrarInformacion(){
//         return `Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`;
//     }

//     static bienvenida(){
//         return `Bienvenido al cajero`;
//     }
// }
class Cliente {
    #nombre;
    
    setNombre(nombre){
        this.#nombre = nombre;
    }

    getNombre(){
        return this.#nombre;
    }
}

const persona = new Cliente();

persona.setNombre('Belen');

console.log(persona);
console.log(persona.getNombre());