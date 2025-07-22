// //const button = document.querySelector("#myBtn");
// document.querySelector("#myBtnShow").style.color = "blue"; 

// document.querySelector("#myBtnHide").style.color = "Red";
// function changeColor(){
//      //document.getElementById("heading").innerHTML = "<h5> this is zoop algorithm</h5>";
//   document.getElementById("heading").style.color = "black"; 

// }
// function ButtonFuncShow() {
//   document.getElementById("heading").innerHTML = "<h5> this is zoop algorithm</h5>";
//   document.getElementById("heading").style.color = "lightblue"; 

//   document.getElementsByClassName("heading2")[0].innerHTML = " this is class";
//   document.getElementsByClassName("heading2")[0].style.color = "lightgreen"; 

//   document.getElementsByTagName("h1")[0].innerHTML = "this is tag";
//   document.getElementsByTagName("h1")[0].style.color = "orange"; 

//   document.querySelector("#heading10").innerHTML = "query";
//   document.querySelector("#heading10").style.color = "pink"; 

//   document.querySelectorAll(".heading10")[1].innerHTML = " change by query selector";
//   document.querySelectorAll(".heading10")[1].style.color = "lightgray"; 

  
// }
// function ButtonRemoveElement(){
//     document.getElementById("heading").remove();
//     document.getElementById("heading2").remove();
//     document.getElementById("h1").remove();

// }


// const student= {
//   studentName : " sanket",
//   city:"Pune",
//   message: 
//   function(Village)
//   {
//      return `${this.studentName || this.City}, Welcome to our college`;
//   }

// }


// const adress=
// {
//  Village:"Wagholi",
//  City:"mumbai"
// };


// const boundGreet = student.message.bind(adress);
// document.write(student.message()+"<br>"+boundGreet()); 
// //document.write(boundGreet()); 


// //Recursion
// function factorial(q) {
//   if (q === 0 || q === 1) {
//     return 1; 
//   } else {
//     return q* factorial(q - 1); 
//   }
// }

// document.write("Factorial of 5 is: " + factorial(5));

// function factorial(q) {
//   let result = 1;

//   for (let i = 2; i <= q; i++) {
//     result *= i; 
//   }

//   return result;
// }

// document.write("Factorial of 5 is: " + factorial(5));

// // IIFE, which stands for Immediately Invoked Function Expression 

// const result = (function(num) {
//   return num * num;
// })(5);

// document.write("Square is: " + result);

// // CALL BACK
// //A callback is a function passed into another function as an argument,
// // which is then invoked inside the outer function to complete some kind of action
// function greet(name, callback) {
//   console.log("Hello, " + name);
//   callback();  
// }

// function sayGoodbye() {
//   console.log("Goodbye!");
// }

// greet("Sanket", sayGoodbye);


// //CALLBACK set timeout

// console.log("Start");

// setTimeout(() => {
//   console.log("This runs after 2 seconds");
// }, 2000);

// console.log("End");

// //PROMISE
// /*A Promise is an object that represents the eventual 
// completion (or failure) of an asynchronous operation and its resulting value.*/

// const myPromise = new Promise((resolve, reject) => {
//   let success = true; 

//   setTimeout(() => {
//     if (success) {
//       resolve("Operation successful!");
//     } else {
//       reject("Operation failed!");
//     }
//   }, 2000);
// });

// myPromise
//   .then(result => {
//     console.log(result); // runs if resolved
//   })
//   .catch(error => {
//     console.error(error); // runs if rejected
//   });

// //synchronus
// function syncFunction() {
//   console.log("Start");
//   console.log("Middle");
//   console.log("End");
// }

// // syncFunction();


// function asyncFunction() {
//   console.log("Start");
  
//   setTimeout(() => {
//     console.log("Middle");
//   }, 2000);

//   console.log("End");
// }

// asyncFunction();


// //Success Promise

// const successPromises = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve("Operation completed successfully and returning resolve");
//   } else {
//     reject("Operation failed and returning reject");
//   }
// });

// successPromises
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });


//   //Failed Promise

//   const failedPromises = new Promise((resolve, reject) => {
//   let success = false;
//   if (success) {
//     resolve("Operation completed successfully and returning resolve");
//   } else {
//     reject("Operation failed and returning reject");
//   }
// });

// failedPromises
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });


  //call function Fetch User DATA

function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    const users = [
      { id: 1, name: "Avinash" },
      { id: 2, name: "Suresh" },
      { id: 3, name: "Aniket" },
      { id: 4, name: "swaraj" },
    ];

    const user = users.find(u => u.id === userId);
    if (user) {
      resolve(user);
    } else {
      reject("User not found");
    }
  });
}

function fetchUserCity(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cities = [
        { id: 1, location: "Pune" },
        { id: 2, location: "Mumbai" },
        { id: 3, location: "Chennai" },
         { id: 4, location: "Delhi" },
      ];
      const city = cities.find(c => c.id === userId);
      if (city) {
        resolve(city);
      } else {
        reject("City not found");
      }
    }, 800);
  });
}

fetchUserData(4)
  .then((userData) => {
    console.log(userData);
    return fetchUserCity(userData.id);
  })
  .then((userCity) => {
    console.log(userCity);
  })
  .catch((error) => {
    console.log(`Error : ${error}`);
  });
