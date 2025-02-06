function saludar (text) {
  return text;
}

console.log(saludar('Hola Mundo!')) 

var nombre = 'Juan';
var edad = 30;
var precio = 200.50;
var pelis_and_series = {
    series: ['Breaking Bad', 'The Office', 'Friends', 'The Mandalorian'],
    pelis: ['El Padrino', 'Pulp Fiction', 'Volver al Futuro']
};

// Agrego un año a la edad
edad =+ 1
console.log("Edad", edad)

// Muestro la tercera serie
console.log(pelis_and_series.series[2]);

// Agrego una nueva serie
pelis_and_series.series.push('The Crown');

console.log("Series", pelis_and_series.series);