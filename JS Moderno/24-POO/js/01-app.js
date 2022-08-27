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

const belen = new Cliente('Belen', 1000);
console.log(belen.mostrarInformacion());
console.log(Cliente.bienvenida());