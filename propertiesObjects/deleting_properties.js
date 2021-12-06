/**
 * Averigua que situaciones producen un error 
 * en la eliminacion de las variables de un objeto
 * y cuales no, analizando el siguiente codigo. 
 * 
 * JavaScript. the Definitive Guide. David Flanagan.
 * 
 * @author dfleta
 * 
 */


 var book = {
  "main title": "JavaScript",                 // Property names include spaces, so use string literals like book.[""]
  'sub-title': "The Definitive Guide",        // and hyphens, so use string literals like book.[""]
  "for": "all audiences",                     // for is a reserved word, so quote
  author: {                                   // The value of this property is
      firstname: "David",                     // itself an object. Note that
      surname: "Flanagan"                     // these property names are unquoted.
  }
};

delete book.author;
delete book["main title"];


console.log(book.author); // undefined
console.log(book["main title"]); // undefined

// propiedades owned y heradadas: qué sucede al eliminarlas?
/**
 * It seems that when it0s trying to delete o.x again
 * 
 */

o = {x:1};          // o has own property x and inherits property toString
delete o.x;         // Delete x, and return true
delete o.x;         // Do nothing (x doesn't exist), and return true
delete o.toString;  // Do nothing (toString isn't an own property), return true

// To check is o.toString was deleted through chain prototype or not, I'll use:
console.dir(o.toString()); // '[object Object]', this means that toString property wasn't deleted
// because toString() belongs to Object prototype, it doesn't belong to "o" object

// Check if exists in the current object
console.log(o.hasOwnProperty('toString')); // false
// Check if exists in the chain/inherit prototypes
console.log('toString' in o); // true

delete 1;           // Nonsense, but evaluates to true