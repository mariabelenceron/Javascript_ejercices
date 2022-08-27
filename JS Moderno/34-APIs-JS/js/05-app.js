document.addEventListener('visibilitychange', () => {
    if(document.visibilityState === 'visible'){
        console.log('Ejecutar la funcion para reproducir el vidio');
    } else {
        console.log('Pausado');
    }
})