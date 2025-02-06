var miPromesa1 = new Promise( function(resolve, reject) { // Creo una promesa miPromesa1 con una funcion que recibe resolve y reject como parametros
    setTimeout(()=>{ // Creo un setTimeout para simular una operacion asincrona
        if (true) { // Si es verdadero resuelvo la promesa
            resolve("Promesa 1 resuelta"); // Resuelvo la promesa con el mensaje "Promesa 1 resuelta"
        } else { // Si no es verdadero rechazo la promesa
            reject("Promesa 1 rechazada"); // Rechazo la promesa con el mensaje "Promesa 1 rechazada"
        }
    }, 1000); // Espero 1 segundo antes de resolver o rechazar la promesa 
    })
    console.log(miPromesa1) // Imprimo la promesa miPromesa1

    miPromesa1.then((res)=>{ // Uso then para obtener el resultado de la promesa miPromesa1
        console.log(res); // Imprimo el mensaje
    }).then((resB)=>{ // Uso then para obtener el resultado de la promesa miPromesa1 
        console.log(resB); // Imprimo el mensaje  
    })

    