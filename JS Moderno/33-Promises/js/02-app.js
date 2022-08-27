const paises = [];

function nuevoPais(pais, callback){
    paises.push(pais);
    console.log(`Agregando ${pais}`);
    callback();
}

function mostrarPaises(){
    console.log(paises);
}

function iniciarCallbackHell() {
    setTimeout(()=>{
        nuevoPais('Alemania', mostrarPaises);
        
        setTimeout(()=>{
            nuevoPais('Ecuador', mostrarPaises);

            setTimeout(() => {
                nuevoPais('Colombia',mostrarPaises);
            }, 3000);
        },3000);
    },3000);
}

iniciarCallbackHell();