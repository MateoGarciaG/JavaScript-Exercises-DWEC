/**
 * @dfleta
 * global vs local
 * function scope and hoisting
 */

function test(o) {
  /**
   * Las variables "i" y "j" y "k" se crearán en el scope de la función test() debido a que fueron inicializadas con VAR, si "inicializadas" porque recordemos que al usar VAR, serán declaradas con el valor "undefined" al inicio de la función test() debido al hoisting pero inicialidas en sus respectivos bloques
   * es por esto que la variable "k" se puede acceder una vez ejecutado el bucle for
   * Al igual que con la variable "j"
   */
  var i = 0;

  if (typeof o == "object") {
    var j = 0;

    for (var k = 0; k < 10; k++) {
      console.log(k); // print numbers 0 through 9
    }

    console.log(k); // prints 10
  }

  /**
   * Si está definida debido al hoisting, pero puede que no este inicializada, en este caso SI está inicializada a 0 en el bloque del condicional, pero si no lo estuviera, tendría el valor de "undefined"
   */
  console.log(j); // j is defined, but may not be initialized
}

o = {};
test(o);
