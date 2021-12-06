/**
 * 
 *  * There is not a statement to do the exercise. There is only a explication of a JS concept.
 * In my case I understand it but i don't find the statement to do the exercise or what I need to do
 * 
 * Unlike variables, the this keyword does not have a scope, 
 * and nested functions do not inherit the THIS value of their caller. 
 * If a nested function is invoked as a method, its this value is the object it was invoked on. 
 * If a nested function is invoked as a function then its this value will be either the global object (non-strict mode)
 * or undefined (strict mode). 
 * If you want to access the this value of the outer function, you need to store that value into a variable that is in scope for the inner function. It is common to use the variable self for this purpose.
 * 
 * JavaScript. the Definitive Guide. David Flanagan.
 */


 var o = {                           // An object o.
    
  m: function() {                 // Method m of the object.
      var self = this;            // Save the this value in a variable. This form is slow and don't recommend
      console.log(this === o);    // Prints "true": this is the object o. It's true
      // because when m() is executed, this is associated with Object "o"
      f();                        //  Now call the helper function f().

      function f() {              // A nested function f
          console.log(this === o); // "false": this is global or undefined because when m()
          // it's called, f() is execute but outside of the object "o", so applied de default binding
          console.log(self === o); // "true": self is the outer this value. It's true because we store THIS into self variable and rememeber that variables has SCOPE
      }       
  }   
};

o.m();                              // Invoke the method m on the object o.

/**
 * Remember1: Value of THIS is assigned where is called the function, because THIS doesn't have SCOPE
 * Remember2: The order of BINDING is:
 * 1. Lexical binding
 * 2. New binding
 * 3. Explicit binding
 * 4. Implicit binding -> this of m() take this binding, for this reason this takes the value of Object "o"
 * 5. default binding (global o window object) -> when f() is called, it's already outside of Object "o", and it's applied default binding
 */

// A solution for this, it's applying LEXICAL BINDING. It's mean that use f() but with a ARROW FUNCTION
// This will work because ARROW FUNCTIONS are executed in the same context where they were
// executed. This means that JS engine will examinate the variable that contains the ARROW
// FUNCTION and see what value has THIS in the
// moment where the arrow Function was created, in this example, it was created in Object "o"
// The only issue is that ARROW FUNCTIONS must
// be called after are created

var o = {                           // An object o.
    
  m: function() {                 // Method m of the object.
      var self = this;            // Save the this value in a variable
      console.log(this === o);    // Prints "true": this is the object o. 

      const f = () => {// A nested ARROW function f
          console.log(this === o); // "true"

          console.log(self === o); // "true": self 
      }   
      
      // Due that f() is an ARROW FUNCTION we must call it after create it.
      f();                        //  Now call the helper function f().
  }   
};

o.m();                              // Invoke the method m on the object o.

/**
 * BE CAREFUL WITH ARROW FUNCTIONS
 * Si usamos THIS dentro de una Arrow Function, el valor que se le asignará será donde fue creada EN UN CONTEXTO, SOLO LAS FUNCIONES CREAN CONTEXTOS, NO LOS OBJETOS. Por lo cual si usas un Arrow function como propiedad de un objeto, cogerá el valor de THIS del global o window. Es por esto que si vas a usar Arrow functions, los uses en los CLOSURES o NESTED Functions
 */