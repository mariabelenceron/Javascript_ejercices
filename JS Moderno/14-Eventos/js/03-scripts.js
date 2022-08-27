const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('keydown',()=>{
    console.log('Escribiendo');
})

busqueda.addEventListener('keyup',()=>{
    console.log('Escribiendo..');
})

busqueda.addEventListener('blur',()=>{
    console.log('Saliendo..');
})

busqueda.addEventListener('copy',()=>{
    console.log('copiando..');
})

busqueda.addEventListener('paste',()=>{
    console.log('pegando..');
})

busqueda.addEventListener('cut',()=>{
    console.log('cortando..');
})

busqueda.addEventListener('input',(e)=>{
    if(e.target.value === ''){
        console.log('Formulario vacion');
    }
})