// let a=20;
// let b=30;

// function add(){
//     document.write(a + b+"<br>");

// }
// add();


// let c=40;
// let d=80;

// function add1(){
//     document.write(c + d+"<br>");

// }
// add1();

// let f=78;
// let g=80;

// function add2(){
//     document.write(f + g+"<br>");

// }
// add2();

// let l=98;
// let m=70;

// function add3(){
//     document.write(l + m+"<br>");

// }
// add3();



// function add4(a, b) {
//   document.write(a / b + "<br>");
// }

// add4(20, 30);
// add4(40, 80);  
// add4(78, 80);   
// add4(98, 70);  
// add4(97, 56);

// function mult(a, b) {
//   return a * b;
// }


// let result1 = mult(10, 5);
// document.write("Result 1: ", result1+"<br>");  

// let result2 = mult(100, 250);
// document.write("Result 2: ", result2+"<br>"); 

// let result3 = mult(7, 8);
// document.write("Result 3: ", result3+"<br>"); 

// let result4 = mult(567, 99);
// document.write("Result 4: ", result4+"<br>"); 

// let result5 = mult(-10, 50);
// document.write("Result 5: ", result5+"<br>"); 

let div = (a, b) => a / b;

let arrResult1 = div(10, 5);
document.write("arrResult 1:", arrResult1+"<br>");

let arrResult2 = div(100, 250);
document.write("arrResult 2:", arrResult2+"<br>");

let arrResult3 = div(7, 8);
document.write("arrResult 3:", arrResult3+"<br>");

let arrResult4 = div(0, 99);
document.write("arrResult 4:", arrResult4+"<br>");

let arrResult5 = div(-10, 50);
document.write("arrResult 5:", arrResult5+"<br>");


function greet(name) {
  return `Hi ${name}, good morning`;
}
let userName = prompt("Enter Your Name");
let message = greet(userName);

document.write(message);

