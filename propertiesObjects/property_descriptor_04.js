/**
 * Como sellar objetos
 * 
 * In ECMA-Script 5, all built-in and user-defined objects
 * are extensible unless they have been converted to be nonextensible, 
 * and the extensibility of host objects is again implementation defined.
 * 
 * The extensible object attribute is often used in
 * conjunction with the configurable and writable property attributes.
 * 
 * JavaScript. the Definitive Guide. David Flanagan.
 * 
 * @author dfleta
 * 
 */

/**
 * El concepto de EXTENDIBLE se entiende que se aplica
 * para saber si objetos Built-in o incluso objetos propios se pueden extender, es decir,
 * si se les puede añadir propiedades
 */


 var o = Object.defineProperties({}, {
  x: { value: 1, writable: true, enumerable:true, configurable:false },
  y: { value: 1, writable: true, enumerable:true, configurable:true },
  // z no es enumerable
  z: { value: 1, writable: true, enumerable: false, configurable: true }, 
  r: {
      get: function() { return Math.sqrt(this.x*this.x + this.y*this.y) },
      enumerable:true,
      configurable:true
  }
});


console.log("o es extensible: " + Object.isExtensible(o)); // o es extensible: true
o.new = "extendida";
console.log("puedo extender o: " + o.new); // puedo extender o: extendida

// deshabilito extensiones en "o" object
// pero si su prototipo se extiende, o las hereda
Object.preventExtensions(o);
o.otra = "otra mas";
console.log("'otra' property no se ha incluido en o: " + o.otra); // 'otra' no se ha incluido en o: undefined

// vamos a sellar el objeto
console.log("o no esta sellado: " + Object.isSealed(o)); // o no esta sellado: false

// Lo sellamos
Object.seal(o);

// Al SELLARLOS ahora todas las propiedades son no-configurables:
// Ejm:
// "y" data property no puedo hacerla accessor
// Object.defineProperty(o, "y", {get: function() { return 0; } } );  // error: cannot redefine property

// pero las propiedades writable siguen siendolo
o.x = 100;
console.log("x ha cambiado: " + o.x); // x ha cambiado: 100

// vamos a congelar el objeto para evitar esto
// ojo que el prototipo no se congela
// Al congelarlo estamos indicando que no solo se SELLE sino también que las propiedades sean "writable: false"
Object.freeze(o);
o.x = 1;
console.log("x no ha cambiado: " + o.x); // x no ha cambiado: 100