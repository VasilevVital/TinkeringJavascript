function Persona(primerNombre) {
    this.primerNombre = primerNombre;
    console.log('Una instancia de Persona');
}

var persona1 = new Persona("Alicia");
var persona2 = new Persona("Sebastian");

// Muestra el primer nombre de persona1
console.log('persona1 es ' + persona1.primerNombre); // muestra "persona1 es Alicia"
console.log('persona2 es ' + persona2.primerNombre); // muestra "persona2 es Sebastian"
