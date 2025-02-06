const fs = require("fs");

function escribirArchivo(contenido, callback) {
  fs.writeFile("archivo.txt", contenido, (err, response) => { // Se crea un archivo llamado archivo.txt con el contenido que se le pase
    if (err) { // Si hay un error, se muestra en consola
      callback(err); // Se llama al callback con el error
      console.log("Error: ", err); // Se muestra el error en consola
    } else { // Si no hay error, se muestra en consola
      callback(null, "Escritura exitosa ->", response); // Se llama al callback con null y la respuesta
    }
  });
}

console.log("Inicio de programa") // Se muestra en consola

escribirArchivo("Hola, soy un archivo de texto", (err, response) => { // Se llama a la función escribirArchivo con el contenido y un callback
    if (err) { // Si hay un error, se muestra en consola
        console.log("Error: ", err); // Se muestra el error en consola
        } else { // Si no hay error, se muestra en consola
        console.log(response); // Se muestra la respuesta en consola
        }
});

console.log("Fin de programa") // Se muestra en consola