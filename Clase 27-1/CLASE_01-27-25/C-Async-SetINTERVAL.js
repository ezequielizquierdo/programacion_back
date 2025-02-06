//* SetInterval
// Variables globales para el contador y el intervalo

// setInterval es una función que recibe dos parámetros, 
// el primero es una función que se ejecutará cada cierto tiempo, 
// y el segundo es el tiempo en milisegundos que tardará en ejecutarse la función.
// se ejecutará cada 1000 milisegundos (1 segundo) hasta que se llame a clearInterval.


let count = 1;  // 
let ejecutaFunc = setInterval(() => {
  console.log("hola mundo", count); // Imprime "hola mundo" y el valor de count que se incrementa en 1 cada vez que se ejecuta la función 
  count++;
  if (count === 4) {
    clearInterval(ejecutaFunc); // Detiene la ejecución de la función setInterval cuando count llega a 4. 
  }
}, 1000); // Se ejecuta cada 1000 milisegundos (1 segundo)

// setTimeout es una función que recibe dos parámetros, 
// el primero es una función que se ejecutará una sola vez,
// y el segundo es el tiempo en milisegundos que tardará en ejecutarse la función.
// se ejecutará una sola vez después de 6000 milisegundos (6 segundos).

setTimeout(() => { // Se ejecuta una sola vez después de 6000 milisegundos (6 segundos).
  console.log("bye bye"); // Imprime "bye bye"
}, 6000); // Se ejecuta después de 6000 milisegundos (6 segundos).

function sarasa() { // Creo una función que retorna una promesa
  return new Promise((resolve, reject) => { // Creo una promesa
    if (resolve) { // Si se resuelve la promesa
      setTimeout(() => { // Se ejecuta el setTimeout después de 3000 milisegundos (3 segundos).
        console.log("bye bye"); // Imprime "bye bye"
        resolve("----------------------------------------------") // Resuelve la promesa
      }, 3000); // Se ejecuta después de 3000 milisegundos (3 segundos).
      
    }
  });
}

let result = sarasa() // una Promesa que se resuelve después de 3000 milisegundos (3 segundos).
result.then((data)=> console.log(data)) // Imprime el resultado de la promesa que es "----------------------------------------------"
