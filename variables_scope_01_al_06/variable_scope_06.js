/**
 * @dfleta
 * global vs local
 * function scope and hoisting
 */

var scope = "global";

function f() {
  /**
   * Al declarar la variable "var scope" al inicio de la función f() estamos realizando lo mismo que haría el hoisting, por lo cual al inicializarla a "local", cojerá la referencia de la variable "var scope" local previamente declarada, básicamente haciendolo de está forma es como en realidad lo hace el hoisting, sube primero la declaración de la variable local con VAR al inicio de la función con el valor "undefined"
   */
  var scope;
  console.log(scope); // -> undefined
  scope = "local";
  console.log(scope); // -> local
}

f();

console.log(scope); // -> global
