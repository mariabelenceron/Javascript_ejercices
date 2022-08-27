// const navegacion = document.querySelector('nav');

// console.log(navegacion.childNodes);  //Los espacios en blanco son considerados elementos
// console.log(navegacion.children);  //Los espacios en blanco no considerados elementos
// console.log(navegacion.children[0]);

const card = document.querySelector('.card');

// console.log(card.children[1].children[1].textContent);
// card.children[1].children[1].textContent = 'Nuevo heading desde Traversing the DOM';

//Del hijo al padre
console.log(card.parentNode);
console.log(card.parentElement);
//Va al siguiente elemento
console.log(card.nextElementSibling);
//Regresa uno
const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);

const navegacion = document.querySelector('nav');
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);
console.log(navegacion.lastElementChild.previousElementSibling);


