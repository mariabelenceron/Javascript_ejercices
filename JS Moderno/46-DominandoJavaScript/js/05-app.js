//Explicit Binding
function persona(el1,el2) {
    console.log(`Mi nombre es ${this.nombre} y Escucho ${el1} y ${el2}`);
}

const infomacion = {
    nombre: 'Belen'
}

const musicaFavorita = ['Pop','Soul'];

//call se debe pasar cada elemento de manera individual
persona.call(infomacion, musicaFavorita[0], musicaFavorita[1]);
//apply si acepta arreglos
persona.apply(infomacion, musicaFavorita);
//bind crea una nueva funcion pero es similar a call
const nuevaFn = persona.bind(infomacion, musicaFavorita[0], musicaFavorita[1]);
nuevaFn();