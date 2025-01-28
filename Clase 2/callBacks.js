function sumar(a, b) {
  // a = 1, b = 2
  a + b; // 3
}

function nuevita(lista, cb) {
  // Creo la funcion nuevita con dos parametros, una lista y un callback
  const resultado = cb(lista[0], lista[1]); // Llamo al callback con los dos primeros elementos de la lista
  return resultado; // Retorno el resultado
}

function myMap(lista) { // Creo la funcion myMap con un parametro lista
  const nuevaLista = []; // Creo un arreglo vacio
  for (let i = 0; i < lista.length; i++) { // Recorro la lista con un for
    nuevaLista.push(cb(lista[i])); // Agrego al arreglo vacio el resultado de llamar al callback con el elemento i de la lista
  }
}

const numeros = [1, 2, 3, 4, 5]; // Creo un arreglo de numeros

const numerosMapped = numeros.map((e) => { // Creo una variable numerosMapped que es igual a la lista de numeros mapeada con una funcion flecha
  if (e > 3) { // Si el elemento es mayor a 3
    return e; // Retorno el elemento e
  } else { // Si no
    return "errorazo"; // Retorno un error en string "errorazo"
  }
});
