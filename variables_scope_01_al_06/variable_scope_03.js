/**
 * @dfleta
 * global vs local
 * nested scopes
 */

var scope = "global scope";

function checkscope() {
  /**
   * Recordemos que VAR su SCOPE es su función contenedora o el scope global, por lo cual este "var scope" de checkscope() es diferente y no influye al "var scope" global
   */
  var scope = "local scope";

  function nested() {
    /**
     * Teniendo en cuenta lo anteriormente mencionado, este "var scope" de nested() es diferente y no afectará al "var scope" de checkscope() ni al global
     */
    var scope = "nested scope";
    /**
     * Por lo cual lo que devolverá será simplemente el valor del "var scope" de nested()
     */
    return scope;
  }

  return nested();
}

console.log(checkscope()); // => "nested scope"
/**
 * El "var scope" permanece intacto
 */
console.log(scope); // => "global scope"
