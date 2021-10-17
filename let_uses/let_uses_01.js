/**
 * @dfleta
 * Ejemplos de uso de Let:
 * - Reemplazar var en bucles for
 * - Definicion de variables en un bloque:
 *   block vs lexical scope
 */

function oddsums(n) {
  let total = 0,
    result = [];

  for (let x = 1; x <= n; x++) {
    let odd = 2 * x - 1;
    total += odd;
    result.push(total);
  }

  /**
   * Da un "ReferenceError" porque no hay ninguna variable X en el SCOPE de la función, ni con VAR o LET
   * La variable "let x" pertenece al contexto del bucle no de la función
   */
  //console.log(x);

  /**
   * Da un "ReferenceError" porque no hay ninguna variable "odd" en el SCOPE de la función, ni con VAR o LET
   * La variable "let odd" pertenece al contexto del bucle no de la función
   */
  //console.log(odd);

  /**
   * -> 25, porque la variable total si fue declarada en el scope de la función, en este caso con LET
   */
  console.log(total);

  return result;
}

console.log(oddsums(5)); // Returns [1,4,9,16,25]
