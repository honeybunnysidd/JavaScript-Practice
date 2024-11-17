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

//----------------Alert & Prompt-------------
