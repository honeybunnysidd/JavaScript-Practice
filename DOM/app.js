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

//step 1 - Create an element
let newpara = document.createElement("p");
newpara.innerText = "This is new para that is build by javascipt";

//step 2 - Append/Insert the element
document.querySelector(".box").appendChild(newpara);

//Create a btn with js
let btn = document.createElement("button");
btn.innerText = "Click me";
document.querySelector(".box").appendChild(btn);

//append
newpara.append(". Append at the last of new para");
btn.append("!");
newpara.append(btn);

//prepend
document.querySelector(".box").prepend(newpara);

//insertAdjacent
let btn2 = document.createElement("button");
btn2.innerText = "Submit";
let box = document.querySelector(".box");

box.insertAdjacentElement("afterend", btn2); //(position, insert element)

/*--------------------------Remove Element---------------------------*/
btn2.remove();
newpara.removeChild(btn);

/*--------------------------Practice Question---------------------------*/
let container = document.querySelector(".container");
container.style.backgroundColor = "grey";

let paragraph = document.createElement("p");
paragraph.innerText = `Hey I'm red!`;
container.append(paragraph);

let heading3 = document.createElement("h3");
heading3.innerText = `I'm blue h3!`;
container.append(heading3);

let div1 = document.createElement("div");
container.append(div1);

let heading1 = document.createElement("h1");
heading1.innerText = "I'm a div";
let para1 = document.createElement("p");
para1.innerText = "Me Too!";

div1.append(heading1);
div1.append(para1);

div1.style.border = "1px solid black";
div1.style.backgroundColor = "pink";

/*--------------------------Practice Question---------------------------*/
//Q1
let input = document.createElement("input");
let newbtn = document.createElement("button");
newbtn.innerText = "Click me";

document.querySelector("body").append(input);
document.querySelector("body").append(newbtn);

//Q2
input.setAttribute("placeholder", "username");
newbtn.setAttribute("id", "btn");

//Q3
let jsbtn = document.querySelector("#btn");
jsbtn.style.backgroundColor = "blue";
jsbtn.style.color = "white";

//Q4
let h1 = document.createElement("h1");
h1.innerHTML = "<u>Dom Practice</u>";
h1.style.color = "purple";
document.querySelector("body").append(h1);

//Q5
let p = document.createElement("p");
p.innerHTML = "My practice Session of <b>DOM</b>";
document.querySelector("body").append(p);

/*--------------------------DOM Events---------------------------*/

/*-----------------------onclick-------------------------*/
newbtn.onclick = () => {
  alert("Form submit successfully!");
  input.value = "";
};
p.onclick = () => {
  p.style.color = "pink";
};

/*-----------------------onmouseenter(hover)-------------------------*/
newbtn.onmouseenter = () => {
  console.log("hover");
};
let title = document.querySelector("title");
let copyTitle = title.innerText;
window.onblur = () => {
  title.innerText = "Come Back";
};

window.onfocus = () => {
  title.innerText = copyTitle;
};
