// inherit() returns a newly created object that inherits properties from the
// prototype object p.  It uses the ECMAScript 5 function Object.create() if
// it is defined, and otherwise falls back to an older technique.

function inherit(p) {
  if (p == null) throw TypeError();   // p must be a non-null object
  if (Object.create)                  // If Object.create() is defined...
      return Object.create(p);        //    then just use it.
  var t = typeof p;                   // Otherwise do some more type checking
  if (t !== "object" && t !== "function") throw TypeError();
  function f() {};                    // Define a dummy constructor function.
  f.prototype = p;                    // Set its prototype property to p.
  return new f();                     // Use f() to create an "heir" of p.
}


/**
* Como funciona la resolucion de nombre en la cadena de objetos
* del siguiente codigo?
Cada vez que usamos la función inherit() estamos creando un objeto vacío con Object.create() o un objeto creado a partir de una Constructor function, en ambos casos el prototipo del nuevo
objeto es el que le pasamos por parámetros
Pero es importante tener en cuenta que en realidad
las propiedad NO SE COPIAN dentro de los NUEVOS OBJETOS sino que cuando buscamos una propiedad de un Prototype padre mediante un objeto "hijo",
lo que en verdad sucede es que JS engine buscará las propiedades en el objeto actual, y si no están
buscarán en sus prototipos. Pero en el caso de que
cambiemos el valor de ese propiedad perteneciente
al prototipo padre desde un objeto "hijo", lo que 
sucederá es que el objeto "hijo" sobrescribirá esa
propiedad del prototipo padre, pero pasarán dos cosas:
1. El objeto "hijo" ya tendrá su propia propiedad
con el mismo nombre que una propiedad del prototipo padre. Es como si al sobrescribirla, hiciera una copia por debajo
debido a que fue sobrescrito desde el objeto hijo
2. La propiedad sobrescrita desde el objeto hijo
en realidad no afectará a la propiedad original que
está en el prototype padre

MÁS QUE HERENCIA ES ENCADENAMIENTO
SOLO SE APLICARÍA UNA ESPECIE DE HERENCIA CUANDO
SE SOBRESCRIBE UNA PROPIEDAD, SINO LO QUE EN REALIDAD
SUCEDE ES QUE SI EL OBJETO ACTUAL NO CONTIENE ESA
PROPIEDAD LA BUSCARÁ ES SUS PROTOTIPOS

*/

var o = {};                 // o inherits object methods from Object.prototype
o.x = 1;                    // and has an own property x.

var p = inherit(o);         // p inherits properties from o and Object.prototype
p.y = 2;                    // and has an own property y.

var q = inherit(p);         // q inherits properties from p, o, and Object.prototype
q.z = 3;                    // and has an own property z.

var s = q.toString();       // toString is inherited from Object.prototype
console.log(q.x + q.y);     // => 3: x and y are inherited from o and p


/** 
* Inheritance occurs when querying properties 
* but not when setting them
* It's a key feature of JavaScript
* 
* Explica el comportamiento de la herencia
* respecto a la variable r
R//: La propiedad "r" en el objeto prototype "unitcircle"
no se ve afectada por el sobrescribimiento del objeto "c.r"
Lo que sucede basicamente es que al sobrescribirlo
en "c.r", el objeto "c" creará un copia de está propiedad que pertenecía originalmente a 
"unitcircle".
Y la propiedad original "r" de "unitcircle" no se
verá afectada
*/

var unitcircle = { r:1 };       // An object to inherit from
var c = inherit(unitcircle);    // c inherits the property r

c.x = 1; c.y = 1;               // c defines two properties of its own
c.r = 2;                        // c overrides its inherited property
console.log(unitcircle.r);      // => 1: the prototype object is not affected