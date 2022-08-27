const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);

//Si en el CSS -visibility: hidden; NO lo va a encontrar
console.log(encabezado.innerText); 
//Si lo encuentra, respeta los espacios del <span>
console.log(encabezado.textContent);
//Trae el HTML
console.log(encabezado.innerHTML);

document.querySelector('.contenido-hero h1').innerHTML = 'Nuevo <strong>contenido</strong>';
console.log(encabezado);

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';
