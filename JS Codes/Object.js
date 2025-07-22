let person = {
  Pname: "Avinash",
  age: 25,
  isStudent: true,
  skills: ["HTML", "CSS", "JavaScript"],
  address: {
    city: "Pune",
    pincode: 411001
  }
};
document.write(person.skills+"<br>");
document.write(person.address.city+"<br>");

//second type of object declation
let Student= new Object();
Student.Sname="Sumit",
Student.Sage="26",
Student. CurrentAddress= {
    city: "Pune",
    pincode: 411001
  }

//Assign one object in second
let Collage= new Object();
Object.assign(Collage,Student);
document.write(Collage.Sname+"<br>");

let People= new Object();
Object.assign(person,Student);
document.write(person.Sname +"<br>");
