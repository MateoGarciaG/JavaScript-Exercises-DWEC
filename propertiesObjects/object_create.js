var o = {x:1, y:2};

var o1 = Object.create(o);      // o1 inherits properties x and y.
console.dir(o1); // {}
console.log(o1.x); // 1 -> X La buscará en su prototipo "o", porque en realidad "o1" no contiene está propiedad, MÁS QUE HERENCIA ES ENCADENAMIENTO
console.log(toString); // [Function: toString]

// Al indicarle que el prototipo es NULL,
// "o2" no tendrá prototipo, por lo cual será un
// simple objeto {} sin propiedades
var o2 = Object.create(null);
console.dir(o2); // [Object: null prototype] {}
console.log(o2.toString); // undefined