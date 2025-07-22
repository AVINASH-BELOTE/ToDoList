 
 //Fetch Api DATA
 function getData() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
          let result = "<ul>";
          data.forEach(user => {
            result += `<li>${user.name} - ${user.email} - ${user.phone}</li>`;
          });
          result += "</ul>";
          document.getElementById("output").innerHTML = result;
        })
        .catch(error => {
          document.getElementById("output").innerHTML = "Failed to fetch data!";
          console.error("Error:", error);
        });
    }
 



    function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add a method using prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
};

// Create two objects
const p1 = new Person("Avinash", 25);
const p2 = new Person("Swapnil", 30);

p1.greet(); // Hello, my name is Avinash and I'm 25 years old.
p2.greet(); // Hello, my name is Swapnil and I'm 30 years old.

// Check prototype
console.log(p1.__proto__ === Person.prototype); // true


//to find unique

Array.prototype.uniqueOnce = function () {
  return this.filter(item => this.indexOf(item) === this.lastIndexOf(item));
};

const arr = [1, 2, 2, 3, 4, 4];
console.log(arr.uniqueOnce()); // [1, 3]

//Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }        

  // Another Method
  isAdult() {
    return this.age >= 18;
  }
}

// Creating objects
const c1 = new Person("Avinash", 25);
const c2 = new Person("Swapnil", 16);

// Using methods
c1.greet(); // Hello, my name is Avinash and I am 25 years old.
console.log(c1.isAdult()); // true

c2.greet(); // Hello, my name is Swapnil and I am 16 years old.
console.log(c2.isAdult()); // false


//STATICS
class Counter {
  static count = 0;

  constructor() {
    Counter.count++;
  }

  static getCount() {
    return Counter.count;
  }
}

new Counter();
new Counter();
new Counter();

console.log(Counter.getCount());  // 3

//INHERITANSE
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  drive() {
    console.log(`${this.brand} is driving...`);
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand); // call base class constructor
    this.model = model;
  }

  showDetails() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
  }
}

const myCar = new Car("Toyota", "Innova");
myCar.drive();       // Toyota is driving...
myCar.showDetails(); // Brand: Toyota, Model: Innova



// get set
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // Getter for area
  get area() {
    return this._width * this._height;
  }

  // Setter for width
  set width(value) {
    if (value > 0) {
      this._width = value;
    } else {
      console.log("Width must be positive.");
    }
  }

  // Setter for height
  set height(value) {
    if (value > 0) {
      this._height = value;
    } else {
      console.log("Height must be positive.");
    }
  }
}

// --- Usage ---
const box = new Rectangle(5, 10);
console.log(box.area); // 50

box.width = 8;
box.height = 12;

console.log(box.area); // 96
