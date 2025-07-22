let Name="Avinash Belote";

//length is used to find length of string

document.write(Name.length+"<br>");

// charAt() method is Returns the character at the specified index and index start 0
document.write(Name.charAt(0)+"<br>")

//charCodeAt method is Returns the Unicode value (ASCII code) of the character at the given position.
document.write(Name.charCodeAt(0)+"<br>")

//at() is support negative index

document.write(Name.at(-4)+"<br>")

//String slice() its use to cut or slice the string 
let slicedString=
Name.slice(0,3);
document.write("Sliced String = "+slicedString+"<br>");

//substring() is similar to slice().
//The difference is that start and end values less than 0 are treated as 0 in substring()
 
let subSt=Name.substring(0,3);
document.write("Sub String = "+subSt+"<br>")

//String toUpperCase() is used to all element to convert in a uppercase
document.write(subSt.toUpperCase()+"<br>");

//String toLowerCase() is used to all element to convert in a lowercase
document.write(subSt.toLowerCase()+"<br>");

//String concat() its use to join two or more string

document.write(" concat "+subSt.concat(" "+slicedString)+"<br>");

//The trim() method removes whitespace from both sides of a string:

document.write(Name.trim()+"<br>");
