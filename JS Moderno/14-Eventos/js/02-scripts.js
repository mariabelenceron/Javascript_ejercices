const nav = document.querySelector('.navegacion');

registrar el evento
nav.addEventListener('click', ()=>{
    console.log('click en nav');
})
nav.addEventListener('mouseenter', ()=>{
    console.log('entrando a la nav');
    nav.style.backgroundColor = 'white';
})

nav.addEventListener('mouseout', ()=>{
    console.log('saliendo a la nav');
    nav.style.backgroundColor = 'transparent';
})

nav.addEventListener('mousedown', ()=>{
    console.log('entrando a la nav');
})

nav.addEventListener('mouseup', ()=>{
    console.log('saliendo a la nav');
})

nav.addEventListener('dblclick', ()=>{
    console.log('doble click en nav');
})




