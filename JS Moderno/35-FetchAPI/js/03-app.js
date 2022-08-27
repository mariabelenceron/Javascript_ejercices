const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');

cargarJSONArrayBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/empleados.json';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarHTML(resultado))
}

function mostrarHTML(empleados) {   
    const contenido = document.querySelector('.contenido');
    let html = '';

    empleados.forEach(empleado => {
        const {id, nombre, empresa, trabajo} = empleado;
        html += `
            <p>Empleado: ${nombre}</p>
            <p>Trabajo: ${trabajo}</p>
            <p>Empresa: ${empresa}</p>
            <p>id: ${id}</p>
        `;
    });

    contenido.innerHTML = html;
}