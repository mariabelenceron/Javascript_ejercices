const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {
    //contains :verifica que haya la clase
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.innerText = 'Idioma y Moneda';
    } else {
        footer.classList.add('activo');
        this.classList.add('activo');
        this.innerText = 'X Cerrar';
    }
}