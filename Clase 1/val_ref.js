var edad = 12;
edad = 1;
console.log("Edad", edad);

const lista_de_frutas = [
    'manzana',
    'pera',
    'banana',
    'uva'
]

const copia_lista_de_frutas = lista_de_frutas

lista_de_frutas.push('naranja');

console.log("Lista de frutas", lista_de_frutas);
console.log("Copia Lista de frutas", copia_lista_de_frutas);

const objetoPersona = {
    nombre: 'Juan',
    edad: 30,
    altura: 1.80
}
objetoPersona.altura; // 1.80

var superSa = 89
superSa = "Personaje"
console.log("superSa", superSa);

let susu = 0;
console.log("susu", susu);

// Concepto de let -> local
// Concepto de var -> global

function expresivaFunction() {
    console.log("Hola soy una función expresiva");
}   

// Para espacios globales o de mucho alcance usar var
// Para espacios locales usar let

// Función declarativa
function declarativaFunction() {
    console.log("Hola soy una función declarativa");
}

// Que es hoisting? -> Es el proceso de mover las declaraciones de variables y funciones al inicio de su scope antes de que se ejecute el código.

