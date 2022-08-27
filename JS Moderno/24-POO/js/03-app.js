class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}

//Herencia
class Empresa extends Cliente {
    constructor(nombre, saldo,telefono, categoria){
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida(){  //Reescribir un metodo
        return `Bienvenido al cajero de empresa`;
    }
}


const belen = new Cliente('Belen', 1000);
const joselito = new Empresa('Joel', 1000,10101001,'Aprendizaje en linea');

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());

console.log(joselito.mostrarInformacion());