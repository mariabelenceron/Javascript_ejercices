//Implicit Binding
const usuario = {
    nombre: "Belen",
    edad: 20,
    informacion(){
        console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad}`);
    },
    mascota: {
        nombre: "Zasha",
        edad: 2,
        informacion(){
            console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad}`);
        }
    }
}

usuario.informacion();
usuario.mascota.informacion();