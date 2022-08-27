//New binding
function Auto(modelo,color) {
    this.modelo = modelo;
    this.color = color;
}

const auto = new Auto('Camaro', 'Verde');
console.log(auto);

//Window binding
window.color = 'negro';
function hola() {
    console.log(color);
}
hola();