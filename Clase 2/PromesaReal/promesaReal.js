const axios = require('axios'); // Importa axios

var Pepe = "Pepe";

async function fetchData() { // Esto es una funcion asincrona fetchData
  try { // Intento hacer lo siguiente
    const { data } = await axios( // Hago una peticion a la url. Hasta que no se resuelva la promesa no se ejecutara la siguiente linea
      `https://akabab.github.io/starwars-api/api/all.json` // Pido el primer todo de la lista. Esto me devolvera un objeto con el id, el titulo, el estado y el userId
    );
    console.log(data[0]); // Imprimo el resultado
    Pepe = 101; // Cambio el valor de Pepe
    return []; // Retorno un arreglo vacio
  } catch (error) { // Si hay un error hago lo siguiente
    console.error(error); // Imprimo el error
  }
}

var quee = fetchData(); // Llamo a la funcion fetchData
console.log("quee ->", quee); // Imprimo quee
console.log("fetchData ->", fetchData()); // Imprimo fetchData
console.log("Pepe ->", Pepe); // Imprimo Pepe