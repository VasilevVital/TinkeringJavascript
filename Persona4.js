function Persona(primerNombre) {
    this.primerNombre = primerNombre;
}

Persona.prototype.diHola = function() {
    console.log ("Hola, Soy " + this.primerNombre);
};

var persona1 = new Persona("Alicia");
var persona2 = new Persona("Sebastian");
var funcionSaludar = persona1.diHola;

persona1.diHola();                            // muestra "Hola, Soy Alicia"
persona2.diHola();                            // muestra "Hola, Soy Sebastian"
funcionSaludar();                             // muestra "Hola, Soy undefined (ó da un error con el
                                              // TypeError en modo estricto

console.log(funcionSaludar === persona1.diHola);            // muestra true (verdadero)
console.log(funcionSaludar === Persona.prototype.diHola);   // muestra true (verdadero)
funcionSaludar.call(persona1);                        // muestra "Hola, Soy Alicia"