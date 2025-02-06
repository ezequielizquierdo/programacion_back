//* ACTIVIDAD 2

// Realizar un programa que utilice la  dependencia momentjs  (deberá instalarse por npm install).
// Debe contar con una variable que almacene la fecha actual (utilizar moment())
// Debe contar con una variable que almacene sólo la fecha de tu nacimiento (utilizar moment).
// Validar con un if que la variable contenga una fecha válida (utilizar el método isValid());
// Finalmente, mostrar por consola cuántos días han pasado desde que naciste hasta el día de hoy. (utilizar el método diff()
// Extra: Cambia tu moment a la versión 1.6.0, al no ser la misma versión mayor, nota el cambio al correr el programa.

const moment = require("moment"); // importamos la libreria moment

// console.log("moment", moment);

function calcularEdad(fechaNacimiento) { // Creo una funcion que recibe la fecha de nacimiento
  const nacimiento = moment(fechaNacimiento, "YYYY-MM-DD"); // Creo una variable que almacena la fecha de nacimiento
  console.log("nacimiento es ", nacimiento); // Moment<1990-05-15T00:00:00-03:00>  - 6546984614654654545415846 - Aqui se guarda la fecha de nacimiento
  if (nacimiento.isValid()) { // Valido si la fecha de nacimiento es valida
    const ahora = moment(); // Moment<2025-01-27T21:31:16-03:00> - 65469846146546547654 - Aqui se guarda la fecha actual
    console.log("ahora es ", ahora); // Imprimo la fecha actual
    const edad = ahora.diff(nacimiento, "years"); // Resto la fecha actual con la fecha de nacimiento y obtengo la edad
    console.log("Tu edad es ->", edad); // Imprimo la edad
  }
}
calcularEdad("1984-10-25");

console.log("Fecha que devuelve la libreria ------>", new Date()) // Imprimo la fecha actual en formato de fecha
/*
{



}

21:45 VOLVEMOS ... .. .. . . .. . ..

*/
