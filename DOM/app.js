/*------------------------------------DOM-------------------------------*/

/*--------------------------getElementById---------------------------*/
/*
let topImage = document.getElementById("mainImg");
topImage.src = "assets/creation_1.png";
*/
// let para = document.getElementById("description");
// para.innerText = "Hello Developers";

/*--------------------------getElementByClass---------------------------*/
/*
let oldImage = document.getElementsByClassName("oldImg");
//it give collection of objects
oldImage[2].src = "assets/creation_1.png";
*/
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

/*--------------------------Getter and Setter Attribute---------------------------*/
/*
let img = document.querySelector("#mainImg");

console.log(img.getAttribute("src")); //get src of image
img.setAttribute("src", "assets/creation_1.png"); // set src of image
*/

/*--------------------------Manipulating Style---------------------------*/

let heading = document.querySelector("h1");
heading.style.color = "skyblue";
heading.style.backgroundColor = "grey";

let anchor = document.querySelectorAll(".box  a");

for (let i = 0; i < anchor.length; i++) {
  anchor[i].style.color = "purple";
}

/*--------------------------Manipulating classList---------------------------*/

let image = document.querySelector("#mainImg");
console.log(image.classList); //Empty(zero class exist)

//Add a class
image.classList.add("mainImg");
image.classList.add("mainImghai");
console.log(image.classList);

//Remove a class
image.classList.remove("mainImg");
console.log(image.classList);

//Contain a class or not
image.classList.contains("mainImghai"); //True if exist
console.log(image.classList.contains("mainImghai"));

//Toggle a class(Add if not exist, Remove if exist)
image.classList.toggle("mainImg");
console.log(image.classList);

/*--------------------------Navigation of Element---------------------------*/

/*---------------------ParentElement (Single)------------------------*/
let heading4 = document.querySelector("h4");
console.log(heading4.parentElement);

/*---------------------chirldren (Single/Multiple)------------------------*/
let div = document.querySelector(".box");
console.log(div.children);

/*---------------------sibling (previous/next)------------------------*/
console.log(heading4.nextElementSibling);
console.log(div.previousElementSibling);
//
let mainImg = document.querySelector("img");
mainImg.previousElementSibling.style.color = "orange";

/*--------------------------Adding Element---------------------------*/
