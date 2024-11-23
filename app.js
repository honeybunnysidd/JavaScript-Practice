//-------------Arithmetic Operators------------
/*
let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
*/

// ------------------Comparison Operators----------------
/*
let age = 18;
console.log(age > 18);
console.log(age >= 18);
console.log(age < 18);
console.log(age <= 18);
console.log(age == 18);
console.log(age == "18");
console.log(age === 18);
console.log(age === "18");
console.log(age != 18);
*/

//-------------Conditional Statements--------------
/*
let color = "red";

if (color == "red") {
  console.log("Please Stop!");
} else if (color == "yellow") {
  console.log("Slow Down");
} else if (color == "green") {
  console.log("You can GO!");
}

let marks = 80;
if (marks >= 80) {
  console.log("A+");
} else if (marks < 80 && marks >= 60) {
  console.log("A");
} else if (marks < 60 && marks >= 33) {
  console.log("B");
} else {
  console.log("Fail");
}
  */

//----------Practice Question--------------

/*
let size = "S";

if (size === "XL") {
  console.log(`Price is Rs. 250`);
} else if (size === "L") {
  console.log(`Price is Rs. 200`);
} else if (size === "M") {
  console.log(`Price is Rs. 100`);
} else if (size === "S") {
  console.log(`Price is Rs. 50`);
} else {
  console.log(`Please select correct size.`);
}
*/

//---------------Practice Question-------------

/*
let str = "apple";

if (str[0] === "a" && str.length > 3) {
  console.log("String is good");
} else {
  console.log("String is not good");
}

let num = 12;
if (num % 3 === 0 && (num + 1 == 15 || num - 1 == 11)) {
  console.log("safe");
} else {
  console.log("Unsafe");
}
  */

//----------------Switch Statment-------------

/*
let color = "geen";
switch (color) {
  case "red":
    console.log(`Stop!`);
    break;
  case "green":
    console.log(`GO!`);
    break;
  case "yellow":
    console.log(`Slow down!`);
    break;
  default:
    console.log("Please select the correct color");
}
    */

//---------------Practice Question-----------

/*
let day = 8;

switch (day) {
  case 1:
    console.log(`Monday`);
    break;
  case 2:
    console.log(`Tuesday`);
    break;
  case 3:
    console.log(`Wednesday`);
    break;
  case 4:
    console.log(`Thrusday`);
    break;
  case 5:
    console.log(`Friday`);
    break;
  case 6:
    console.log(`Saturday`);
    break;
  case 7:
    console.log(`Sunday Funday`);
    break;
  default:
    console.log("Please select a number between 1-7");
}
    */

//----------------Alert & Prompt-------------

/*
console.log("Normal");
console.warn("Warning");
console.error("Error");
*/

/*
let fName = prompt(`Enter your first name:`);
let lName = prompt(`Enter your last name:`);
alert(`Welcome ${fName} ${lName}`);
*/

/*
alert(`Enter the value of a!`);
let a = prompt("Enter here:", "18");

a = parseInt(a);
alert(`You entered a of type ${typeof a}`);

let write = confirm("Do you want to write it to the page");
if (write) {
  document.write(a);
} else {
  document.write("Please allow me to write");
}
*/

//---------------Practice Question-------------

/*
let num = 5;
if (num % 10 === 0) {
  console.log("Good");
} else {
  console.log("bad");
}
  */

/*
let name = prompt(`Enter your name`);
let age = prompt(`Enter your age`);
alert(`${name} is ${age} years old`);
*/

/*
let quarter = 5;
switch (quarter) {
  case 1:
    console.log("January, February, March");
    break;
  case 2:
    console.log("April, May, June");
    break;
  case 3:
    console.log("July, August, September");
    break;
  case 4:
    console.log("October, November, December");
    break;
  default:
    console.log("Kindly select quarter from 1-4");
}
    */

/*
let str = "apples";

if ((str[0] === "a" || str[0] === "A") && str.length > 5) {
  console.log("Golden String");
} else {
  console.log(`Not a Golden String`);
}
  */

/*
let a = 15;
let b = 21;
let c = 100;

if (a > b) {
  if (a > c) {
    console.log(`${a} is largest`);
  } else {
    console.log(`${c} is largest`);
  }
} else {
  if (b > c) {
    console.log(`${b} is largest`);
  } else {
    console.log(`${c} is largest`);
  }
}
*/

/*
let num1 = 356465;
let num2 = 478525;
if (num1 % 10 === num2 % 10) {
  console.log(`Same last digit ${num1 % 10}`);
} else {
  console.log("Not same last digit");
}
  */

//----------------------String Methods--------------------

/*
let str = "         Stupidity               ";
str = str.trim();

let upperStr = str.toUpperCase();
console.log(upperStr);

let lowerStr = str.toLocaleLowerCase();
console.log(lowerStr);

let name = "Siddhartha Raghuvanshi";
console.log(name.indexOf("Raghuvanshi"));

let password = "     newpass    ";
password = password.toUpperCase().trim(); //Left to right
console.log(password);

let piece = "Siddhartha";

piece = piece.slice(0, 8);
piece = piece.slice(-8); //str.length - num(8)
console.log(piece);

let myName = "I am Siddhartha";
myName = myName.replace("Siddhartha", "Stupid for you");
console.log(myName);

myName = myName.replaceAll("o", "x");
console.log(myName);

let stupid = "I Love You ";
stupid = stupid.repeat(3);
console.log(stupid);
*/

//----------------------Practice Question--------------------

/*
let msg = "help!";

console.log(msg.trim().toUpperCase());
*/
