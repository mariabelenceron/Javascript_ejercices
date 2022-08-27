//Probar 2 valores
function suma(a,b) {
    return a + b;
}

function restar(a,b) {
    return a - b;
}

let resultado = suma(1,2);
let esperado = 3;
expected(esperado).toBe(resultado);


resultado = restar(1,2);
esperado = 1;

expected(esperado).toEqual(resultado);

function expected(esperado) {
    return{
        toBe(resultado){
            if(resultado !== esperado){
                console.error(`El ${resultado} es diferente a lo esperado; la prueba no paso`)
            }else{
                console.log('La prueba paso');
            }
        },
        toEqual(resultado){
            if(resultado !== esperado){
                console.error(`El ${resultado} no es igual a lo esperado; la prueba no paso`)
            }else{
                console.log('La prueba paso');
            }
        }
    }
}