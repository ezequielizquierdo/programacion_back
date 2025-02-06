const axios = require('axios'); // Importa axios

// Deshabilitar la verificación de certificados SSL
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// Hacer una funcion asincrona con fetchData haciendo una petición a la url `https://akabab.github.io/starwars-api/api/all.json` con axios y retornar un arreglo vacio en el try y en el catch imprimir el error
// Hacer una variable Pepe con el valor "Pepe"
// Hacer un console.log de fetchData
// Hacer un console.log de Pepe

var Pepe = "Pepe";
async function fetchData() { // Esto es una funcion asincrona fetchData
  try { // Intento hacer lo siguiente
    const { data } = await axios(`https://akabab.github.io/starwars-api/api/all.json`);
    console.log("Personaje posicion 0", data[0]); // Imprimo el resultado
    Pepe = 101; // Cambio el valor de Pepe
    return []; // Retorno un arreglo vacio
  } catch (error) { // Si hay un error hago lo siguiente
    console.error(error); // Imprimo el error
  }
}

var quee = fetchData(); // Llamo a la funcion fetchData
console.log("quee ->", quee); // Imprimo quee
// console.log("fetchData ->", fetchData()); // Imprimo fetchData
console.log("Pepe ->", Pepe); // Imprimo Pepe

async function myFuncion() {
  try {
    const { data } = await axios(`https://akabab.github.io/starwars-api/api/all.json`);
    console.log("Personaje posicion 0", data[0]);
    Pepe = 101;
    return [];
  } catch (error) { 
    console.error(error);
  }
}