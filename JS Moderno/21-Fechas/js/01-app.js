const diaHoy = new Date();

let valor;

valor = diaHoy;
//Año
valor = diaHoy.getFullYear();
//Mes
valor = diaHoy.getMonth();

valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
//Los milisegundos desde el 1 enero 1970 hasta la fecha
valor = diaHoy.getTime();
//A diferencia del anterior, no es necesario instanciarlo antes
console.log(Date.now());

// s
console.log(valor);