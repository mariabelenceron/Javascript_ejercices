// const enlace = document.createElement('a');
// //Agregando el Texto
// enlace.textContent = 'Nuevo enlace';
// //Agregando el href
// enlace.href = 'https://www.google.com/';

// enlace.target = '_blank';
// enlace.setAttribute('data-enlace', 'nuevo-enlace');
// enlace.classList.add('alguna-clase');

// console.log(enlace);

// //Seleccionar la navegacion
// const navegacion = document.querySelector('.navegacion');
// // navegacion.appendChild(enlace);
// navegacion.insertBefore(enlace, navegacion.children[1]);

//Crear una card
const card = document.querySelector('.card');
console.log(card);

const parrafo1 = document.createElement('p');
parrafo1.innerHTML = 'concierto';
// parrafo1.classList.add('categoria','concierto');
parrafo1.setAttribute('class', 'categoria concierto');

const parrafo2 = document.createElement('p');
parrafo2.innerHTML = 'Música con Coldplay';
parrafo2.setAttribute('class', 'titulo');

const parrafo3 = document.createElement('p');
parrafo3.innerHTML = '$250 por persona';
parrafo3.setAttribute('class', 'precio');

//Contenedor info
const info = document.createElement('div');
info.setAttribute('class', 'info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//Creando imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer1.jpg';

//Contenedor Card
const card2 = document.createElement('div');
card2.setAttribute('class', 'card');

card2.appendChild(imagen);
card2.appendChild(info);

//Agregando elemento nuevo
const cards = document.querySelector('.hacer .contenedor-cards');
cards.appendChild(card2);
cards.insertBefore(card2, cards.children[0]);

