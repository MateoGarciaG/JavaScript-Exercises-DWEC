/**
 * Function EXPRESSIONS Hoisting
 * 
 * Function expressions do not share this behavior, 
 * because they do not declare a function.
 * Instead, they declare a variable and are subject 
 * to the same variable-hoisting behavior.
 * 
 * The variable is hoisted, but the function body is not hoisted,
 * because it is a named function expression, not a function declaration.
 * The value of number is not defined until runtime.
 * 
 * Programming JavaScript Applications. Eric Elliott.
 * 
 * 
 * @author dfleta
 * 
 */


 function number() {
  return 1;
}

function f() {
  
  try {
    // LAS VARIABLES SON HOISTEADAS, NO LAS FUNCIONES
    // PERO SI UNA FUNCIÓN FUE CREADA DENTRO DE UNA VARIABLE, AMBOS CON EL MISMO NOMBRE
    // ENTONCES AL LLAMAR A LA FUNCIÓN, TENDRÁ MÁS PRIORIDAD EL IDENTIDICADOR/NOMBRE
    // DE LA VARIABLE Y POR LO TANTO LO HOISTEARÁ Y LO SETEARÁ A undefined
    // E IGNORARÁ EL CONTENIDO DE LA FUNCIÓN
      number(); // undefined
  } catch (e) {
      console.log('number() is undefined.');
  }
  
  var number = function number() {     // hoisting de la variable referencia a la funcion
      return 2;                        // pero no del cuerpo de la funcion
  }
  
  console.log((number()));             // 2, 'number() is defined now.
}

f();
console.log((number()));                 // 1, 'Outer scope still works.
  