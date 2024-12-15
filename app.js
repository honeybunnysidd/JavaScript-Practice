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

//---------------Array-------------------------------

/*
let student = ["Siddhartha", "Honey", "Bunny"];

console.log(student[0]);

let marks = [50, 89, 46, 45];

let info = ["Sidd", 23, 58.5];
console.log(info[0].length);

let emptyArry = [];
*/

/*------Arrays are Mutable-------*/
/*
let fruit = ["Apple", "Orange", "Guvava"];
fruit[fruit.length - 1] = "Mango";
fruit[10] = "Litchi";
*/

/*--------------------------Arrays Methods------------------------*/
/*
let fruit = ["apple", "mango", "orange"];

fruit.push("banana"); //End
fruit.pop(); //End

fruit.unshift("Pinapple"); //Start
fruit.shift(); //Start

let primary = ["red", "yellow", "blue"];
let secondary = ["white", "orange", "green"];

console.log(primary.concat(secondary));

console.log(secondary.reverse());

console.log(secondary.slice(1, 2));
*/
/*
let newArray = [1, 2, 3, 4, 5, 6, 7];

newArray.splice(1, 4, 8, 9);

fruit.sort();
*/

//----------------------Practice Question--------------------
/*
let language = ["c", "c++", "javascript", "python", "java", "c#", "sql"];
console.log(language.reverse().indexOf("javascript"));
*/

/*--------------------------Arrays References------------------------*/

/*
let arr1 = [1];
let arr2 = [1];

console.log(arr1 == arr2); //false
*/

/*--------------------------Constant Arrays------------------------*/
/*
const arr = [1, 2, 3, 4];
arr.push(5); //Work

arr = [1, 2, 3, 4];
*/

/*--------------------------Nested Arrays------------------------*/
/*
let nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6,7],
];
console.log(nestedArray[2][2]);
*/

/*-------------------------Practice Question------------------------*/
/*
let array = [7, 9, 0, -2];
let n = 3;
// console.log(array.slice(0, n));

console.log(array.slice(array.length - n));
*/
/*
let str = prompt("Enter any String");
if (str.length == 0) {
  console.log(`String is empty`);
} else {
  console.log(`string is not empty`);
}
  */

/*

let str = "SiddhaRAghafhdsDF";
let index = 2;
if (str[index] === str[index].toLocaleLowerCase()) {
  console.log(`Char ${str[index]} is in lower case`);
} else {
  console.log(`Char ${str[index]} is in uppercase`);
}
  */
/*
let input = prompt("Please enter any string here");
console.log(input);
console.log(input.trim());
*/

/*
let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num = 0;
if (newArray.includes(num)) {
  console.log(`${num} is present in the array`);
} else {
  console.log(`${num} is not present is the array`);
}
*/

/*--------------------------For Loops------------------------*/
/*
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
*/
/*--------------------------Practice Question-----------------------*/
/*
console.log(`Odd Number`);

for (let i = 1; i <= 15; i = i + 2) {
  console.log(i);
}
console.log(`Even Number`);
for (let i = 2; i <= 20; i = i + 2) {
  console.log(i);
}
  */

/*
for (let i = 1; i <= 10; i++) {
  console.log(5 * i);
}
  */

/*--------------------------Nested Loops------------------------*/

/*
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(j);
  }
}
*/

/*--------------------------While Loops------------------------*/
/*
let num = prompt("Entery a number:");
let i = 1;
while (i <= 10) {
  console.log(num * i);
  i++;
}
  */

/*
let j = 0;
while (j <= 20) {
  console.log(j);
  j++;
}
  */

/*--------------------------Practice Question-----------------------*/

/*
let favMovie = "avengers";

let guess = prompt("Enter favorite movie name");

while (favMovie != guess) {
  if(guess=="quit"){
    console.log("You quit");
    break;
  }
  guess = prompt("Please enter correct movie");
}
if (guess == favMovie) {
  console.log("Congratulations");
}
  */

/*--------------------------Loops with Arrays------------------------*/
/*
let fruits = ["mango", "apple", "banana", "litchi", "orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}
  */

/*--------------------------For Of Loops------------------------*/
/*
let fruit = ["mango", "apple", "banana", "litchi", "orange"];

for (myFruit of fruit) {
  console.log(myFruit);
}
*/

/*--------------------------For Of Loops with Nested Arrays------------------------*/
/*
let hero = [
  ["ironman", "hulk", "spider-man"],
  ["flash", "wonder-woman"],
];
console.log("Heros");
for (list of hero) {
  for (individual of list) {
    console.log(individual);
  }
}
  */

/*--------------------------Practice Question-----------------------*/
//Todo App
/*
let todo = [];

let request = prompt("Please Enter your request (add, delete, list, quit)");

while (true) {
  if (request == "quit") {
    console.log("You quit");
    break;
  } else if (request == "list") {
    console.log("-------------");
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log("-------------");
  } else if (request == "add") {
    let newTask = prompt(`Enter your task`);
    todo.push(newTask);
    console.log("task added");
  } else if (request == "delete") {
    let idx = prompt("which index's task you want to delete");
    todo.splice(idx, 1);
    console.log("Successfully deleted");
  } else {
    console.log("wrong request");
  }
  request = prompt("Please Enter your next request");
}
  */

/*--------------------------Practice Question-----------------------*/
/*
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === num) {
    arr.splice(i, 1);
  }
}
console.log(arr);
/*

/*--------------------------Practice Question-----------------------*/
/*
//count

let number = 1234;
let copy = number;

let count = 0;
while (number != 0) {
  number = parseInt(number / 10);
  count++;
}
console.log(count);

//Sum
let sum = 0;
while (copy != 0) {
  let rem = copy % 10;
  sum += rem;
  copy = parseInt((copy /= 10));
}
console.log(sum);
*/
/*
let number = prompt("Enter a number");
number = parseInt(number);
let result = 1;

for (let i = number; i >= 1; i--) {
  result *= i;

}
console.log(result);
*/
/*

let arr = [1, 2, 4, 6, 8, 8, 9, 12];

let largest = 0;
for (let i = 0; i <= arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}
console.log(largest);
*/

/*--------------------------Object Literals-----------------------*/
/*
let student = {
  name: "Siddhartha",
  age: 22,
  marks: 96,
  city: "Bangalore",
  1: "a",
};

const item = {
  price: 100.99,
  discount: 50,
  color: ["red, blue"],
};
*/

/*----------Get values of objects---------------*/
/*
console.log(student.name);
console.log(item["discount"]);
console.log(student[1]); // 1 behave as a string
*/
/*----------Add/Update values of objects---------------*/
/*
student.gender = "Male";
student.city = "Meerut";
delete student[1];
*/