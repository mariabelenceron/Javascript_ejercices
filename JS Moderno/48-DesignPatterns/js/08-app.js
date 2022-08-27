//Mediador: Se comunica con diferente objetos a la vez, el mediador define objetos ya localiza objetos específicos
function Vendedor(nombre) {
    this.nombre = nombre;
    this.sala = null;
}
Vendedor.prototype = {
    oferta: (articulo,precio) => {
        console.log(`Tenemos el siguiente articulo ${articulo}, iniciamos con el precio de ${precio}`);
    },
    vendido: comprador => {
        console.log(`Vendido a ${comprador}`);
    }
}

function Comprador(nombre) {
    this.nombre = nombre;
    this.sala = null;
}
Comprador.prototype = {
    oferta: (cantidad,comprador) => {
        console.log(`${comprador.nombre} : ${cantidad}`);
    }
}
//Mediador
function Subasta() {
    let compradores = {};

    return {
        registrar: usuario => {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}

//Crear Objetos
const belen = new Comprador('Belen');
const maria = new Comprador('Maria');
const vendedor = new Vendedor('Vendedor de autos');
const subasta = new Subasta();

//Tienes que registrarlos
subasta.registrar(belen);
subasta.registrar(maria);
subasta.registrar(vendedor);

vendedor.oferta('Mustang 66', 300);

belen.oferta(350, belen);
maria.oferta(450, maria);
belen.oferta(500, belen);
maria.oferta(700, maria);

vendedor.vendido('Maria');
