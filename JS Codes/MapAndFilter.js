/*
map() – Definition:
The map() method creates a new array by applying a function to each element of the original array.
It transforms every element but keeps the same number of elements.
*/
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);

document.write(doubled+"<br>"); // [2, 4, 6, 8]
/*

 filter() – Definition:
The filter() method creates a new array containing only the elements that pass a test (return true) from a provided function.
It filters out elements based on a condition.

*/
const num1 = [1, 2, 3, 4];

const evens = num1.filter(num => num % 2 === 0);

document.write(evens); // [2, 4]
/*🔹 Reduce() – Simple Definition:
 reduce() is a method in JavaScript used to combine all 
values in an array into one single result by running a function on each element.
*/ 



//for practice example
//map

const names = ["avinash", "ravi", "sneha"];
const capitalized = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));
document.write(capitalized);

const users = [
  { id: 1, name: "Avinash" },
  { id: 2, name: "Ravi" }
];
const namesOnly = users.map(user => user.name);
document.write(namesOnly);


const values = [0, 1, "", "text", null, undefined, true];
const booleans = values.map(value => Boolean(value));
document.write(booleans); 


const fruits = ["apple", "banana", "mango"];
const labeled = fruits.map((fruit, index) => `${fruit}-${index}`);
document.write(labeled);

const prices = {
  onion: 20,
  tomato: 30,
  potato: 25
};

const doublePrices = Object.values(prices).map(value => value * 2);
document.write(doublePrices);

//filter

const numbers1 = [5, 12, 8, 20, 3];
const greaterThan10 = numbers1.filter(num => num > 10);
document.write(greaterThan10.join(", ") + "<br>");

const nums = [1, 2, 3, 4, 5, 6];
const even = nums.filter(n => n % 2 === 0);
document.write(even.join(", ") + "<br>");

const user = [
  { name: "Avinash", active: true },
  { name: "Ravi", active: false },
  { name: "Sneha", active: true }
];

const activeUser = user.filter(use => use.active);
activeUser.forEach(u => document.write(u.name + "<br>"));

const words = ["onion", "egg", "rice", "dal"];
const longWords = words.filter(w => w.length > 4);
document.write(longWords.join(", ") + "<br>");

const mixed = [0, "text", null, "", undefined, 7];
const clean = mixed.filter(Boolean);
document.write(clean.join(", ") + "<br>");

const people = [
  { name: "Avi", city: "Pune" },
  { name: "Raj", city: "Mumbai" },
  { name: "Neha", city: "Pune" }
];

const punePeople = people.filter(p => p.city === "Pune");
punePeople.forEach(p => document.write(p.name + "<br>"));

//reduce

const numbers2= [10, 20, 30];
const sum = numbers2.reduce((acc, val) => acc + val, 0);
document.write("Sum: " + sum + "<br>");

const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);
document.write(flat.join(", ") + "<br>"); 

const fruits1 = ["apple", "banana", "apple", "orange", "banana"];
const count = fruits1.reduce((acc, fruit1) => {
  acc[fruit1] = (acc[fruit1] || 0) + 1;
  return acc;
}, {});
for (let f in count) {
  document.write(f + ": " + count[f] + "<br>");
}

const num = [3, 8, 2, 10];
const max = num.reduce((a, b) => (a > b ? a : b));
document.write("Max: " + max + "<br>");