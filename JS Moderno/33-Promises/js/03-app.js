const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = true;

    if(descuento){
        resolve('Descuento aplicado');
    } else {
        reject('No se puedo aplicar el descuento');
    }
});

aplicarDescuento
    .then( resultado => console.log(resultado))
    .catch(error => console.log(error))


// Tres valores posibles
// fulfilled - El promise se cumplió
// rejected - Promise no se cumplió
// pending - No se ha cumplido ni se ha rechazado