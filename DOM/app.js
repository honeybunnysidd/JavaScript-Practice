/*------------------------------------DOM-------------------------------*/

/*--------------------------getElementById---------------------------*/
let topImage = document.getElementById("mainImg");
topImage.src = "assets/creation_1.png";

// let para = document.getElementById("description");
// para.innerText = "Hello Developers";

/*--------------------------getElementByClass---------------------------*/
let oldImage = document.getElementsByClassName("oldImg");
//it give collection of objects
oldImage[2].src = "assets/creation_1.png";

/*--------------------------getElementByTagName---------------------------*/
/*
let element = document.getElementsByTagName("p");

for (let i = 0; i < element.length; i++) {
  element[i].innerText = "Siddhartha";
}
*/
/*--------------------------querrySelector1---------------------------*/
/*
let para = document.querySelector("p");
para.innerText = "Stupid";
*/
/*
let image = document.querySelector(".oldImg");
image.src = "assets/creation_2.jpeg";
*/
/*
let para2 = document.querySelector("#description");
para2.innerText = "Siddhartha Raghuvanshi";
*/
/*
let allPara = document.querySelectorAll("p");

for (let i = 0; i < allPara.length; i++) {
  allPara[i].innerText = "Sb Shi h";
}
*/
/*--------------------------Methods of Document Object---------------------------*/

/*--------------------------innerText---------------------------*/
/*
let para = document.querySelector("p");
para.innerText = "Sb shi h";
*/
/*--------------------------innerHTML---------------------------*/
/*
let belowPara = document.querySelector("#description");
belowPara.innerHTML = `<u> ${belowPara.innerText}<u>`;
*/
/*--------------------------textContent---------------------------*/
//It show hidden content and next line(based on VS code)
