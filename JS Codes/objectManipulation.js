let person={
    name:"avinash",
    age:23,
    city:"Pune",
   
}

document.write(person.name,person.age,person.city+"<br> ");

//Update Value

person.age=22;
document.write(person.age+"<br> ");

//Add Key

person.country="India";
document.write(person.country+"<br> ");


//Destructuring
// Destructuring is a JavaScript expression
// that allows you to unpack values from arrays or properties from objects into individual variables easily and cleanly.

const numbers=[1,2,3];

const[a,b,c]=numbers;

document.write(a,b,c+"<br> ");


//Spread
//Definition: The spread operator expands an array or object into individual elements.

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2);

const user1 = { name: "John", age: 30 };
const user2 = { ...user1, city: "Pune" };

console.log(user2); 



//Rest Operator (...)
//📖 Definition: The rest operator collects multiple elements and puts them into a single array.


function sum(...num){
    return num.reduce((a,b)=>a+b,0)
}
document.write(sum(1,2,3,4,5,6));

const [first, ...rest] = [10, 20, 30, 40];
console.log(first); 
console.log(rest);
