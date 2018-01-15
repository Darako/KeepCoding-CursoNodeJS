'use strict';

function Persona(nombre) {
    this.nombre = nombre;
}

var persona = new Persona('Neo');
console.log(persona.nombre);

var persona2 = new Persona('Trinity');
Persona.prototype.saluda = function () {
    console.log("Hola me llamo " + this.nombre);
};

persona2.saluda();
persona.saluda();

// herencia

function Agente(nombre) {
    Persona.call(this, nombre);
    // esto ejecuta el constructor de Persona con el this de Agente
    // definiendo en el this de Agente una propiedad name
    // y asignandole el parametro recibido
}

//le asignamos como prototipo una persona
Agente.prototype = new Persona('soy un prototipo');

var agente = new Agente('Smith');
agente.saluda();
console.log(Object.getPrototypeOf(agente), agente instanceof Agente, agente instanceof Persona);

// herencia multiple
function Superheroe() {
    this.vuela = function(){
        console.log(this.nombre + ' vuela');
    };
    this.esquivaBalas = function () {
        console.log(this.nombre + ' esquiva balas');
    }
}

Object.assign(Agente.prototype, new Superheroe());

agente.vuela();
agente.esquivaBalas();

