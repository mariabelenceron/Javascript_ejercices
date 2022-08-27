// const primerEnlace = document.querySelector('a');
//Elimina al elemento por si mismo
// primerEnlace.remove();
// console.log(primerEnlace);

//El padre elimina al hijo
const navegacion = document.querySelector('.navegacion');

console.log(navegacion.children);

navegacion.removeChild(navegacion.children[2]);