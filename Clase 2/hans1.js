// Definir la clase TicketManager, el cual tendrá un arreglo de eventos que iniciará vacio
// La clase debe contar con una variable privada "precioBaseGanancia", la cual añadirá un costo
// adicional al precio de cada evento
// Params
// nombre, lugar, precio (deberá agregarse un 0.15 del valor original)
// capacidad (50 por defecto)
// fecha (hoy por defecto)
// El método deberá crear además el campo id autoincrementable y el campo participantes
// que siempre iniciará con un arreglo vacio

class TicketManager {   // Creo la clase TicketManager
    #precioBaseGanancia = 0.15; // Creo la variable privada precioBaseGanancia
    constructor() {    // Creo el constructor
        this.eventos = []; // Creo un arreglo vacio
        this.eventoId = 1; // Creo un id autoincrementable
    }

    agregarEvento = function (nombre, lugar, precio, capacidad, fecha = new Date()) { // Creo el metodo agregarEvento
        const eventoNuevo = { // Creo un objeto eventoNuevo
            nombre, // Agrego el nombre
            id: eventoId, // Agrego el id
            lugar, // Agrego el lugar
            precio: precio + (precio + this.#precioBaseGanancia), // Agrego el precio
            capacidad, // Agrego la capacidad
            participantes: [] // Agrego un arreglo vacio de participantes
        }
        this.eventoId++; // Incremento el id
        this.eventos.push(eventoNuevo); // Agrego el eventoNuevo al arreglo de eventos
    }
}
TicketManager.prototype.getEventos = function () { // Creo el metodo getEventos
    return this.eventos; // Retorno el arreglo de eventos
}
