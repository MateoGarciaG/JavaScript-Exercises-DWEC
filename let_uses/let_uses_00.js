/**
 * Ejercicio realizado por @dfleta
 */

/**
 * EL resultado de X en el scope de la función varTest() cambia a 71 debido a que estamos usando VAR el cual es afectado por el hoisting, es decir, dentro del scope de la función el hoisting lo que hace es declarar en este caso la variable X al inicio de la función con valor de undefined independientemente de cuantas veces volvamos a declarar la variable X en un distinto bloque dentro de la función, siempre hará referencia a la misma variable X y por lo tanto al cambiarlo dentro del condicional a 71, en realidad está cambiando la variable X del scope de la función
 */

// function varTest() {
//   var x = 31;

//   if (true) {
//     var x = 71;
//     console.log(x); // 71
//   }

//   console.log(x); // 71
// }

/**
 * En este caso no se aplica el hoisting debido a que se está usando let, el cual su alcance se aplica al scope en el cual fue creado y en el momento donde fue declarado a diferencia del var con el hoisting que lo declaraba al inicio de la función al valor de undefined
 */
// function letTest() {
//   var x = 31;

//   if (true) {
//     let x = 71;
//     console.log(x); // 71
//   }

//   console.log(x); // 31
// }

/**
 * La variable W al inicio de la función tiene el valor de "undefined" debido al hoisting porque más adelante dentro del bloque del condicional se declaro como VAR, por lo cual se aplica el hoisting al inicio de la función NO al inicio del bloque del condicional debido a que el scope de una variable VAR es su función contenedora o si está en un scope global
 * Mientras que la variable Z da un ReferenceError debido a que ni siquiera fue declarada con VAR, por lo cual no se le aplicará hoisting
 * "let x = 71;" -> tendrá un scope y valor diferente a la "var x"
 * En cambio "var y" es usada dentro del condicional y no es sobrescrita por otro "var y" dentro del condicional
 */

function hoistingTest() {
  console.log(w);
  // console.log(z);               // ReferenceError

  var x = 31;
  let y = 91;
  u = 1;

  if (true) {
    let x = 71;
    console.log(x); // 71
    console.log(y); // 91
    /**
     * Se puede usar dentro de este scope del condicional, no afuera
     */
    let z = 101;
    /**
     * DEbido a que aquí fue inicializada la variable W, ya que debido a que usa VAR, la declaración será mediante hoisting
     */
    var w = 1001;
  }

  console.log(x); // 31
  // console.log(z);             // ReferenceError
  
  console.log(w); // 1001
}

// varTest();

// letTest();

hoistingTest();

/**
 * Si ejecutamos este console.log(u) de una variable U que no fue declarada con VAR ni con LET, entonces está variable será creada en el context GLOBAL COMPARTIDO, es decir, en el momento de la ejecución, porque según el documento "The Scope Chain": "Each file is its own separate program from the perspective of JS compilation. If no declaration is found, that's not necessarily an error. Another file (program) in the runtime may indeed declare that variable in the shared global scope"
 * Por lo cual, en mi caso, el resultado fue -> 1
 * Dando lugar a que está variable global U además de ser creada por el runtime, también fue inicializada dentro de la función hoistingTest()
 * donde primero se tuvo que llamar a la función hoistingTest() para que la variable "u" ya tuviera un valor
 */

console.log(u);
