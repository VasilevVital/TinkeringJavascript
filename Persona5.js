// Definimos el constructor Persona
function Persona(primerNombre) {
    this.primerNombre = primerNombre;
}

// Agregamos un par de métodos a Persona.prototype
Persona.prototype.caminar = function() {
    console.log("Estoy caminando!");
};
Persona.prototype.diHola = function(){
    console.log("Hola, Soy" + this.primerNombre);
};

// Definimos el constructor Estudiante
function Estudiante(primerNombre, asunto) {
    // Llamamos al constructor padre, nos aseguramos (utilizando Function#call) que "this" se
    // ha establecido correctamente durante la llamada
    Persona.call(this, primerNombre);

    //Inicializamos las propiedades específicas de Estudiante
    this.asunto = asunto;
};

// Creamos el objeto Estudiante.prototype que hereda desde Persona.prototype
// Nota: Un error común es utilizar "new Persona()" para crear Estudiante.prototype
// Esto es incorrecto por varias razones, y no menos importante, nosotros no le estamos pasando nada
// a Persona desde el argumento "primerNombre". El lugar correcto para llamar a Persona
// es arriba, donde nosotros llamamos a Estudiante.
Estudiante.prototype = Object.create(Persona.prototype);    // Vea las siguientes notas

// Establecer la propiedad "constructor" para referencias  a Estudiante
Estudiante.prototype.constructor = Estudiante;

// Remplazar el método "diHola"
Estudiante.prototype.diHola = function(){
    console.log("Hola, Soy " + this.primerNombre + ". Yo estoy estudiando " + this.asunto + ".");
};

// Agregamos el método "diAdios"
Estudiante.prototype.diAdios = function() {
    console.log("¡ Adios !");
};

// Ejemplos de uso
var estudiante1 = new Estudiante("Carolina", "Física Aplicada");
estudiante1.diHola();    // muestra "Hola, Soy Carolina. Yo estoy estudianto Física Aplicada."
estudiante1.caminar();   // muestra "Yo estoy caminando !"
estudiante1.diAdios();   // muestra "¡ Adios !"

// Comprobamos que las instancias funcionan correctamente
console.log(estudiante1 instanceof Persona);      // devuelve true
console.log(estudiante1 instanceof Estudiante);   // devuelve true
//Con respecto a la línea
Estudiante.prototype = Object.create(Persona.prototype); //Sobre los motores antiguos de JavaScript sin Object.create, se puede utilizar un "polyfill" (aka "shim", vea el enlace del artículo), o se puede utilizar una función que obtiene el mismo resultado, como por ejemplo:

    function crearObjeto(proto) {
        function ctor() { }
        ctor.prototype = proto;
        return new ctor();
    }

// uso:
Estudiante.prototype = crearObjeto(Persona.prototype);