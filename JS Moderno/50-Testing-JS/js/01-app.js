//Probar 2 valores
function suma(a,b) {
    return a + b;
}

function restar(a,b) {
    return a - b;
}

let resultado = suma(1,2);
let esperado = 3;
if(resultado !== esperado){
    console.error(`El ${resultado} es diferente a lo esperado; la prueba no paso`)
}else{
    console.log('La prueba paso');
}

resultado = restar(1,2);
esperado = -1;
if(resultado !== esperado){
    console.error(`El ${resultado} es diferente a lo esperado; la prueba no paso`)
}else{
    console.log('La prueba paso');
}