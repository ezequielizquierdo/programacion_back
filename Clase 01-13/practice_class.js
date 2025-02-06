// class Persona

class Persona {
  // Propiedades - Valores - Data
  constructor(nombre) {
    this.nombre = nombre;
    this.edad = null;
  }
  // Métodos - Funciones - para manipular la data.

  getNombre() {
    return this.nombre;
  }

  getEdad() {
    return this.edad;
  }

  addEdad(edad) {
    this.edad = edad;
    return "Edad añadida";
  }

  presentarse() {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
  }
}


// Función constructora
function PersonaNueva(nombre) {
  this.nombre = nombre;
  this.edad = null;

  this.getNombre = function () {
    return this.nombre;
  };

  this.getEdad = function () {
    return this.edad;
  };

  this.addEdad = function (edad) {
    this.edad = edad;
    return "Edad añadida";
  };

  this.presentarse = function () {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
  };
}

PersonaNueva.prototype.getEdad = function () {
  return this.edad;
}


// Clase Club . ListaPorActividad

class ListaPorActividad {
    constructor(nombre) {
        this.nombre = [];
        this.integrantes = [];
    }
 
    addIntegrante(integrante) {
        this.integrantes.push(integrante);  
    }

    getLista() {
        return this.integrantes;
    }

    getActividad(){
        return this.nombre;
    }
}

const basquet = new ListaPorActividad('Basquet');
const Voley = new ListaPorActividad('Voley');
console.log(basquet);

basquet.addIntegrante("Pepe")
basquet.addIntegrante("Juan")
console.log(basquet.getLista());
console.log(basquet.getActividad());

// CONTADOR

class Contador {
  static contadorGlobal = 0; // Variable de clase (static) - Se accede a ella sin instanciar la clase (Contador.contadorGlobal) - Se comparte entre todas las instancias de la clase
 
  constructor(nombre){ // Método constructor
    this.nombre = nombre;
    this.contadorIndividual = 0;
    Contador.contadorGlobal++; 
  }
    
  contar() { // Método de instancia
    this.contadorIndividual++; // Se incrementa el contador individual
    return `El contador de ${this.nombre} es ${this.contadorIndividual}`; // Retorna un mensaje con el nombre del responsable y el contador individual
  }

  getResponsable() { // Método de instancia
    return `El responsable es ${this.nombre}`; // Retorna un mensaje con el nombre del responsable
    
  }

  getCuentaIndividual() { // Método de instancia
    return this.contadorIndividual; // Retorna el contador individual
  }

    static getContadorGlobal() { // Método de clase (static)
        return Contador.contadorGlobal; // Retorna el contador global
    }


}

console.log(Contador.contadorGlobal);


// static es el nombre de la clase  + punto + la propiedad static
// Lo del Contructor siempre con this

const contadorUno = new Contador("Juan");
console.log(contadorUno.getResponsable());
console.log(Contador.contadorGlobal);
console.log(contadorUno.contar());
console.log(contadorUno.getCuentaIndividual());

const contadorDos = new Contador("Pepe");
console.log(contadorDos.getResponsable()); 
console.log(Contador.contadorGlobal);
console.log(contadorDos.contar());
console.log(contadorDos.getCuentaIndividual());