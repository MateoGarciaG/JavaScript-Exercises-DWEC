/**
 * 
 *  * There is not a statement to do the exercise. There is only a explication of a JS concept.
 * In my case I understand it but i don't find the statement to do the exercise or what do i need to do
 * 
 * Method invocations differ from function invocations 
 * in one important way, however: the invocation context. 
 * In a method invocation expression like this, 
 * the object o becomes the invocation context,
 * and the function body can refer to that object 
 * by using the keyword this.
 * 
 * Any function that is used as a method is effectively 
 * passed an implicit argument the object through which
 * it is invoked. 
 * Como los metodos Python con self.
 * 
 * JavaScript. the Definitive Guide. David Flanagan.
 * 
 * @author dfleta
 * 
 */


 var calculator = {              // An object literal
    
  operand1: 1,
  operand2: 1,
  add: function() {          // Note the use of the this keyword to refer to this object.
    // IMPLICID BINDING: THIS will take the value of Object "calculator"
      this.result = this.operand1 + this.operand2;
  }
};

calculator.add();                   // A method invocation to compute 1+1.

console.log(calculator.result);     // => 2  Creamos una nueva propiedad del objeto al vuelo