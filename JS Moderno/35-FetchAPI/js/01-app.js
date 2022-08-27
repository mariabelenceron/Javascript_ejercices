const cargarTxtBtn = document.querySelector('#cargarTxt');

cargarTxtBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    //Url de donde se encuentra el archivo
    const url = 'data/datos.txt';
    //Utiliza fetch de esta url, entonces trae la respuesta, y la respuesta la quiero como txt
    fetch(url)
        .then( respuesta => { //Lee el archivo
            console.log(respuesta);
            console.log(respuesta.status);
            console.log(respuesta.statusText);
            console.log(respuesta.url);
            console.log(respuesta.type);

            return respuesta.text();
        })
        .then( datos => { // Utiliza los datos del archivo
            console.log(datos);
        })
        .catch(error => { //El reject 
            console.log(error);
        })
}