/**
 * @dfleta
 * global vs local
 * function scope and hoisting
 */

var scope = "global";

function f() {
  /**
   * Esta parte puede confundir, pero lo que en realidad sucede no es que la variable local "scope"  será creada como una variable global una vez ejecutada está función f() como sucedía en otros ejercicios, esto cambía debido a que dentro de f() hay una variable llamada también "var scope", por lo cual suceden dos cosas:
   * 1. Se aplica el hoisting de la variable local "var scope" al inicio de la función f() con un valor "undefined"
   * 2. Se aplica el SHADOWING por parte de la variable local "var scope" sobre la variable global con el mismo nombre, dando lugar a que una vez ejecutada f() no afectará a la variable global "var scope" 
   */
  console.log(scope); // WTF !! -> debido al hoisting, será "undefined"
  var scope = "local";
  console.log(scope); // Prints "local"
}

f();

console.log(scope); // Prints "global"
