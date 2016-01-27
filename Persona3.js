function Persona(primerNombre) {
    this.primerNombre = primerNombre;
}

Persona.prototype.diHola = function() {
    console.log ('Hola, Soy ' + this.primerNombre);
};

var persona1 = new Persona("Alicia");
var persona2 = new Persona("Sebastian");

// Llamadas al método diHola de la clase Persona.
persona1.diHola(); // muestra "Hola, Soy Alicia"
persona2.diHola(); // muestra "Hola, Soy Sebastian"