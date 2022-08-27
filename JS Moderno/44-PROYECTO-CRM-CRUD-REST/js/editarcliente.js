import {obtenerCliente, editarCliente} from './API.js';
import {validar, mostrarAlerta} from './funciones.js';

(function () {
    //-----------Variables
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const empresaInput = document.querySelector('#empresa');
    const telefonoInput = document.querySelector('#telefono');
    const idInput = document.querySelector('#id');


    document.addEventListener('DOMContentLoaded', async () => {
        //Obtener informacion de la URL
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = Number(parametrosURL.get('id'));

        const cliente = await obtenerCliente(idCliente);
        mostrarCliente(cliente);

        //Submit al formulario
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarCliente);
    });

    function mostrarCliente(cliente) {
        const { nombre, email, telefono, empresa, id } = cliente;
        
        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
        idInput.value = id;
    }

    function validarCliente(e) {
        e.preventDefault();
        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: Number(idInput.value)
        };

        if(validar(cliente)){
            mostrarAlerta('Todos los campos son obligatorio');
            return;
        }
        
        //Reescribe el objeto
        editarCliente(cliente);
    }
})();