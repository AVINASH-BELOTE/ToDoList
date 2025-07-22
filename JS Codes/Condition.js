let num = prompt("Enter your number");

if (num == 0) {
  document.write(`${num} is Zero`);
}
else if(num>0 && num%2!=0)
{
     document.write(`${num} is positive and odd`);
}
else if(num<0 && num%2!=0)
{
     document.write(`${num} is negative and odd`);
}
else if(num>0 && num%2==0)
{
     document.write(`${num} is positive and even`);
}
else if(num<0 && num%2!=0)
{
     document.write(`${num} is negative and even`+"<br>");
}

let num1 = prompt("Enter a day number (1-7)");
num1 = parseInt(num1);

let day;

switch (num1) {
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  case 7:
    day = "Sunday";
    break;
  default:
    day = "Enter a valid day number (1–7)";
}

document.write(day+"<br>");

let num2 = prompt("Enter a month number (1-12)");
num2 = parseInt(num2);

let month;

switch (num2) {
  case 1:
    month = "January";
    break;
  case 2:
    month = "February";
    break;
  case 3:
    month = "March";
    break;
  case 4:
    month = "April";
    break;
  case 5:
    month = "May";
    break;
  case 6:
    month = "June";
    break;
  case 7:
    month = "July";
    break;
  case 8:
    month = "August";
    break;
  case 9:
    month = "September";
    break;
  case 10:
    month = "October";
    break;
  case 11:
    month = "November";
    break;
  case 12:
    month = "December";
    break;
  default:
    month = "Enter a valid month number (1–12)";
}

document.write(month+"<br>");

let num3 = prompt("Enter a number (1-5) to select a language:");
num3 = parseInt(num3);

let language;

switch (num3) {
  case 1:
    language = "Marathi";
    break;
  case 2:
    language = "Hindi";
    break;
  case 3:
    language = "Tamil";
    break;
  case 4:
    language = "Urdu";
    break;
  case 5:
    language = "English";
    break;
  default:
    language = "Enter a valid number (1–5)";
}

document.write(language);




