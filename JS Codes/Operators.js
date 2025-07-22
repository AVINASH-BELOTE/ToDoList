//Arithmetic operators

let a=5;
let b=10;
document.write("Addition: " + (a + b) + "<br>");           
document.write("Subtraction: " + (a - b) + "<br>");        
document.write("Multiplication: " + (a * b) + "<br>");    
document.write("Division: " + (a / b) + "<br>");           
document.write("Modulus: " + (a % b) + "<br>");            
document.write("Exponent: " + (2 ** 3) + "<br>");          

let c = 5;
document.write("Post-Increment: " + (c++) + "<br>");      
document.write("After Increment: " + c + "<br>");         

//Assignment Operators:
let x = 10;

x += 5;   
document.write("After += 5: " + x + "<br>");

x -= 2;   
document.write("After -= 2: " + x + "<br>");

x *= 2;   
document.write("After *= 2: " + x + "<br>");

x /= 2;   
document.write("After /= 2: " + x + "<br>");

x %= 5;   
document.write("After %= 5: " + x + "<br>");

x **= 2;  
document.write("After **= 2: " + x + "<br>");


// logical operators

//  && and

let age = 25;
document.write((age > 18 && age < 30)+"<br>");  

// || Or

let marks = 85;
document.write((marks < 90 || marks > 80) +"<br>");

// ! not 
let isLoggedIn = false;
document.write((!isLoggedIn )+"<br>");

// BITWISE

// &&

//32 & 42
// 32 binary = 00100000
// 42 binary = 00101010
//-------------------------
//             00100000
//             2^5+2^4+2^3+2^2+2^1+2^0
//             32+0+0+0+0+0=32

document.write((22 & 24)+"<br>" );

//44 & 45
// 44 binary = 00101100
// 45 binary = 00101101
//-------------------------
//             00101100
//             32+8+4=44

document.write((44 & 45) +"<br>");

//18 & 22
// 18 binary = 00010010
// 22 binary = 00010110
//-------------------------
//             00010010
//             16+2=18
document.write((18 & 22) +"<br>");

//25 & 14
// 25 binary = 00011001
// 14 binary = 00001110
//----------------------
//             00001000
//                 8=8
document.write((25 & 14) +"<br>");

//126 & 127 
//126 binary = 01111110  
//127 binary = 01111111  
//----------------------
//        01111110
//        64 + 32 + 16 + 8 + 4 + 2 = 126

document.write((126 & 127) +"<br>");
  

// Or ||
//25 | 27
//25 binary =00011001
//27 binary =00011011
//---------------------
//           00011011
//          16+8+2+1=27
document.write((25|27) +"<br>");

// 12 | 5
// 12 binary = 00001100
// 5  binary = 00000101
// ---------------------
//             00001101
//             8 + 4 + 1 = 13

document.write((12|5) +"<br>");

// 18 | 6
// 18 binary = 00010010
// 6  binary = 00000110
// ---------------------
//             00010110
//             16 + 4 + 2 = 22

document.write((18|6) +"<br>");

// 9 | 4
// 9  binary = 00001001
// 4  binary = 00000100
// ---------------------
//             00001101
//             8 + 4 + 1 = 13

document.write((9|4) +"<br>");

// 44 | 15
// 44 binary = 00101100
// 15 binary = 00001111
// ---------------------
//             00101111
//             32 + 8 + 4 + 2 + 1 = 47

document.write((44|15) +"<br>");
