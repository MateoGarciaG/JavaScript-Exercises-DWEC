/**
 * @dfleta
 * global vs local
 * var to declare local variables
 */

/**
 * Aunque "scope" no está declarada con VAR ni con LET, SI está inicializada, por lo cual será creda en el SHARED GLOBAL SCOPE
 */
scope = "global";

function checkscope2() {
  /**
   * Debido a que no estamos usando VAR ni LET, pero previamente en el scope global ya hay una variable "scope", dentro de está función será sobrescrita a "local"
   */
  scope = "local";
  /**
   * Implicitamente se creará está variable en un scope global cuando se llame a está función
   */
  myscope = "local";

  return [scope, myscope];
}

console.log(checkscope2());

console.log(scope);
console.log(myscope); // => WTF ¿? -> Al igual que sucedía con la variable "u" en el ejercicio "let_uses_00", "myscope" al no ser declara con VAR ni LET pero SI ESTÁ siendo inicializada y además está siendo usada en el contexto GLOBAL, quiere decir que al ejecutarse la función, el runtime al ver que no tiene un scope definido, se creará la variable en el SHARED GLOBAL SCOPE, que en NodeJS sería el objeto Global y en un navegador sería "window", ver el capitulo "The Scope Chain", por lo cual se puede acceder a está variable desde el scope global
