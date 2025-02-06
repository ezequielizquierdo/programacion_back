const res = require("express/lib/response");

const generateRandomNumbers = () => {
  return new Promise((resolve, reject) => {
    let numbers = [];
    if (resolve) {
      for (let i = 0; i < 10000; i++) {
        numbers.push(Math.floor(Math.random() * 20) + 1);
      }
      resolve(numbers);
    } else {
      console.log("Rejected", reject);
    }
  });
};

console.log(
  generateRandomNumbers().then((numbers) => {
    console.log(numbers); // Imprime los 10000 numeros
    let counts = {}; // objeto para guardar los numeros y la cantidad de veces que aparecen
    numbers.forEach((num) => { // recorre el array de numeros
      counts[num] = (counts[num] || 0) + 1; // si no existe el numero, lo inicializa en 0
    });
    console.log("counts", counts); // Imprime el objeto con los numeros y la cantidad de veces que aparecen
  })
);

// const resPromise = generateRandomNumbers();
