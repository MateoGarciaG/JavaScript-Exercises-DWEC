/**
 * Nada nuevo: hoisting de variables
 * 
 * Programming JavaScript Applications. Eric Elliott.
 */

 var x = 1;
 function f() {
    // Sucede esto: x = undefined
     console.log(x); // undefined -> Aquí se aplica el hoisting
     var x = 2;
 };
 
 f();