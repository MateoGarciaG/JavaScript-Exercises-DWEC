/**
 * @dfleta
 * global vs local
 */

var scope = "global";

function checkscope() {
  /**
   * Recordemos que al usar VAR, el scope que tiene solamente es a nivel de una función que la encapsule o en el scope global, por lo cual el "var scope" de la función, que recordemos que se le aplica el hoisting, es diferente o no influirá a la "var scope" global, por lo cual lo que devuelve la función checkscope() solamente es el valor del "var scope" local, no afecta en nada al "var scope" global
   */
  var scope = "local";
  return scope;
}

console.log(checkscope()); // => "local"
