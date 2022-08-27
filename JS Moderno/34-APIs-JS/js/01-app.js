const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click',() => {
    Notification
        .requestPermission()
        .then( resultado => {
            console.log(`El resultado es ${resultado}`);
        })
});

const verNotificacion = document.querySelector('#verNotificacion');

verNotificacion.addEventListener('click', ()=>{
    if(Notification.permission === 'granted'){
        const notificacion = new Notification('Esta es la notificación',{
            icon: 'img/ccj.png',
            body: 'Codigo con Juan, aprende con proyectos reales'
        });

        notificacion.onclick = ()=>{
            window.open('https://www.codigoconjuan.com')
        }
    }
});