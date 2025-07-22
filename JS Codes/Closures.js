
// globel scope
//Declared outside any function or block, available everywhere in the code.

let globalVar = "I'm global";

function showGlobal() {
  document.write(globalVar);  
}

showGlobal();  //
document.write(globalVar);   

// Local Scope
// Declared inside a function, available only inside that function

function myFunc() {
  let localVar = "I'm local";
  document.write(localVar);  //  Can access inside
}


// Block Scope
// Declared using let or const inside curly braces {}, like in an if, for, or any block
if (true) {
  let blockVar = "I'm block-scoped";
  cdocument.write(blockVar);  //  Inside block
}


//Hosting
//Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope (either the global scope or function scope) before the code is executed.

//This means that you can use variables and functions before you declare them in the code (with some important rules).

sayHello();  //  This works because function declarations are hoisted

function sayHello() {
  document.write("Hello, Avinash!");
}

function counter()
{  
  let count=0;
  return function()
  {
  count++;
  return count;
 }
}

const myCounter = counter();
document.write(myCounter());
