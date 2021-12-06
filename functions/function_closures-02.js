var scope = "global scope";         // A global variable

function checkscope() {
    let scope = "local scope";      // A local variable
    function f() { 
        return scope;               // Return the value in scope here
    }
    return f;                   
}

console.log(checkscope()());        // What does this return?
// This will return "local scope", FIRST THE CLOSURE AND AFTER EXECUTE IT, because a closure "functions are executed using the variable scope that was in effect when
//  * they were defined, in this case "local scope", not the variable scope that is in effect
//  * when they are invoked. that will be "global scope"
// This means that closures store data from variables from their outside functions context and everytime we use a closure, we using these variables that were stores inside closure