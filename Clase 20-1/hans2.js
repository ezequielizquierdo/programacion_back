// Funcion suma
function suma(a, b) {
    return new Promise((resolve, reject) => { // Se crea una promesa
        if (a === 0 || b === 0) {
            reject('Operación innecesaria');
        } else if (a + b < 0) {
            reject('Solo devolver valores positivos');
        } else {
            resolve(a + b);
        }
    });
}

const respuestaSuma = suma(1, 2); // Se guarda la promesa en una variable
console.log(respuestaSuma); // Se muestra en consola



//Funcion resta

// Funcion multiplicacion

// Funcion division

// Funcion asincrona para realizar cálculos

// Ejecución de la función asincrona

async function calculos() {
    try {
        const resultadoSuma = await suma(2, 4);
        console.log(resultadoSuma);
    } catch (error) {
        console.error(error);
    }
}

calculos(); // Se llama a la función calculos

