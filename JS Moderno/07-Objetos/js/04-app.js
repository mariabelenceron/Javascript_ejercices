const producto = {
    nombre : "Magic",
    artista : "Coldplay",
    precio : 20
}

// const nombre = producto.nombre;
console.log(producto.nombre);

// const {nombre} = producto;
const {nombre, precio, artista} = producto;
// const {precio} = producto;
console.log(nombre);
console.log(precio);