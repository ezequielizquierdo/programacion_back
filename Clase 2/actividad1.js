const objetos = [
  {
    manzanas: 3,
    peras: 2,
    carne: 1,
    jugos: 5,
    dulces: 2,
  },
  {
    manzanas: 1,
    sandias: 1,
    huevos: 6,
    jugos: 1,
    panes: 4,
  },
];

// Crear un array con todos los productos que se encuentran en los objetos
const list_products = [];
let total = 0;

objetos.forEach((element) => {
  // Recorro el array de objetos
  const listasObject = Object.keys(element); // Obtengo las claves de cada objeto
  listasObject.forEach((prod) => {
    // Recorro las claves de cada objeto
    console.log("prod", prod);
    if (!list_products.includes(prod)) {
      // Si el producto no está en la lista, lo agrego
      list_products.push(prod); // Agrego el producto a la lista
    }
  });
  Object.values(element).forEach((value) => { // Recorro los valores de cada objeto
    total += value; // Sumo los valores
  });
});
console.log("list_products ->", list_products); // Debería imprimir ["manzanas", "peras", "carne", "jugos", "dulces", "sandias", "huevos", "panes"]
console.log("total ->", total)