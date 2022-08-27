//Métodos de propiedad
const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo canción con el id: ${id}`);
    },
    pausar: function(){
        console.log('pausando...');
    },
    borrar: function(id){
        console.log(`Borrando canción...${id}`);
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);