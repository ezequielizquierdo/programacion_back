//* ACTIVIDAD 4

const fs = require("fs").promises;
const path = require("path");

async function main() { // Función principal
  try {
    console.log(__dirname) // ~/OneDrive/Escritorio/CODERHOUSE/75240-CLASE/CLASE_01-27-25/package.json
    const packagePath = path.join(__dirname, "package.json"); // dirname es el directorio donde se encuentra el archivo que se está ejecutando en este momento (en este caso, el archivo 5-ACTIVIDAD-4.js) 

    const packageContent = await fs.readFile(packagePath, "utf8"); // Lee el archivo package.json y lo guarda en la variable packageContent

    // Paso 2: Crear el objeto info
    const info = { // Objeto info
      contenidoStr: packageContent, // Contenido del archivo leído en formato string
      contenidoObj: JSON.parse(packageContent), // Contenido del archivo leído en formato objeto (parseado)
      size: Buffer.byteLength(packageContent, "utf8"), // Tamaño en bytes del archivo leído
    };

    // Paso 3: Mostrar el objeto info por consola
    console.log("Objeto info:"); // Imprime "Objeto info:"
    console.log(info); // Imprime el objeto info que es el contenido del archivo package.json en formato string, objeto y el tamaño en bytes
    
  } catch (error) {
    throw new Error(`Error al procesar archivo: ${error.message}`);
  }
}

main()

/*
Objeto info:
{
  contenidoStr: '{\n' +
    '  "name": "clase_01-27-25",\n' +
    '  "version": "1.0.0",\n' +
    '  "description": "",\n' +
    '  "main": "1-ACTIVIDAD-1.js",\n' +
    '  "scripts": {\n' +
    '    "test": "echo \\"Error: no test specified\\" && exit 1"\n' +
    '  },\n' +
    '  "keywords": [],\n' +
    '  "author": "",\n' +
    '  "license": "ISC",\n' +
    '  "dependencies": {\n' +
    '    "moment": "^2.30.1"\n' +
    '  }\n' +
    '}\n',
  contenidoObj: {
    name: 'clase_01-27-25',
    version: '1.0.0',
    description: '',
    main: '1-ACTIVIDAD-1.js',
    scripts: { test: 'echo "Error: no test specified" && exit 1' },
    keywords: [],
    author: '',
    license: 'ISC',
    dependencies: { moment: '^2.30.1' }
  },
  size: 285
}

*/