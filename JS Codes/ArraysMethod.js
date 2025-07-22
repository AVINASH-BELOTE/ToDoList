document.writeln("Avinash"+"<br>");

//1D array

let car=["Honda","Volvo","Tesla"];
document.write(car+"<br>");

//Find and display array length

document.writeln(car.length+"<br>");

//Array at() Returns an indexed element from an array

document.writeln(car.at(2)+"<br>");

//Array pop() Removes the last element from an array

car.pop();
document.write(car+"<br>");

// 2D Array

let arr2 =["mansi","manish",
         ["suresh","kiran"],
         ["sudha","nikhil"]
           ];

 document.write(arr2+"<br>");

 // push use to Adds a new element to an array

 arr2.push("Swapnil");
 document.write(arr2+"<br>");
 
 //Concat use to Creates a new array by merging existing arrays

 let ArrayConcat=arr2.concat(car);
 document.write(ArrayConcat+"<br>");
 
 //3D Array

let arr3 = ["Honda", "Hero", ["Maruti", ["Suzuki"]], "Tesla"];
 //Slices out a part of an array

 arr3.slice(3);
 document.write(arr3+"<br>");

 // splice() is use Adds new items to an array
 //The first parameter (2) defines the position where new elements should be added (spliced in).
 //The second parameter (0) defines how many elements should be removed.
  arr3.splice(2,0,"toyota")
 document.write(arr3+"<br>");

 //tosplice its is used to remove element in array and add remain element in new array
 //1 is determine where to start remove element and 2 how many element to remove

 let toSp=arr3.toSpliced(1,2)
 //document.write("after toSpliced "+toSp+"<br>");

 //join Joins all array elements into a string

 toSp.join("+");
 document.write("after toSpliced "+toSp.join("+")+"<br>");

 //shift Removes the first array element
 car.shift();
 document.write(car+"<br>");

 // usShift Adds a new element at the beginning of an array
 car.unshift("Fiat");
 document.write(car+"<br>");

 //delete is use to delete specific index element

delete car[0];
 document.write(car+"<br>");