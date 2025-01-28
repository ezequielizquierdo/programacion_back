// Funciones declarativas
function sumar(a, b) {
  return a + b;
}
console.log("Suma (estructura basica): ", sumar(2, 3));

// Funciones expresivas (anónimas)
function otra(cb, a, b) {
  // cb = callback
  const resultado = cb(a, b);
  return resultado;
}

console.log("Suma", otra(sumar, 2, 3));

function aaa() {
  // Funcion que retorna una funcion
  const bbb = (a, b) => {
    // Funcion flecha
    return a - b; // Resta
  };
  return bbb; // Retorna la funcion flecha
}
const guardoAcaLoQueRetornaAaa = aaa(); // guardoAcaLoQueRetornaAaa = bbb

const nombreFuncA = function () {
  // Funcion anonima
  return null; // Retorna null
};

// funcion flecha
const nombreFuncRestar = (a, b) => {
  // Funcion flecha
  return a - b; // Resta
};

const mostrarLista = (lista) => {
  // Función flecha que recibe un array
  if (lista.length === 0) {
    // Si la lista está vacía
    return "La lista está vacía";
  } else {
    lista.forEach((elemento, index) => {
      console.log(`${index + 1} - ${elemento}`);
    });
    return `La lista tiene ${lista.length} elementos`;
  } // Retorna un mensaje
};

const listita = [];
console.log(mostrarLista(listita)); // Debería imprimir "La lista está vacía"
const listasa = [23, 31, 44, 45]
console.log(mostrarLista(listasa)); // Debería imprimir los elementos de la lista
