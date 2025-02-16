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
/* // Single even on object
newbtn.onclick = () => {
  alert("Form submit successfully!");
  input.value = "";
};
p.onclick = () => {
  p.style.color = "pink";
};
*/
/*-----------------------onmouseenter(hover)-------------------------*/
/*
newbtn.onmouseenter = () => {
  console.log("hover");
};
*/

let title = document.querySelector("title");
let copyTitle = title.innerText;
window.onblur = () => {
  title.innerText = "Come Back";
};

window.onfocus = () => {
  title.innerText = copyTitle;
};

/*---------------------------addEvenLister----------------------------*/

//For multiple even on same object
newbtn.addEventListener("click", clicked);

function clicked() {
  console.log("Button clicked!");
}
newbtn.addEventListener("mouseenter", () => {
  console.log("hover");
});

/*---------------------------Practice Question----------------------------*/
//Generate random color
let btnColor = document.querySelector(".btncolor");
let headingColor = document.querySelector(".practice h1");
let colorBox = document.querySelector(".color");

Math.floor(Math.random() * 256);
btnColor.addEventListener("click", () => {
  let randomColor = generateColor();
  headingColor.innerText = randomColor;
  colorBox.style.backgroundColor = randomColor;
});

function generateColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let color = `rgb(${red},${green},${blue})`;
  return color;
}

/*---------------------------this in Event Listeners----------------------------*/
let newbtnhai = document.querySelector(".this");
newbtnhai.addEventListener("click", function () {
  this.style.color = "green";
});

/*---------------------------Keyboard EVENTS----------------------------*/

let keyboardEvent = document.querySelector(".keyboardEvent");

keyboardEvent.addEventListener("keyup", function (event) {
  console.log(event.key); //default arugument and optional as well

  if (event.code == "ArrowUp") {
    console.log("move forward");
  } else if (event.code == "ArrowDown") {
    console.log("move backword");
  } else if (event.code == "ArrowLeft") {
    console.log("move left side");
  } else if (event.code == "ArrowRight") {
    console.log("move right side");
  }
});

/*---------------------------Form EVENTS----------------------------*/
let form = document.querySelector("form");
form.addEventListener("submit", () => {
  alert("Form Submit Sucessfully");
});
//We can stop default work of form
/*
form.addEventListener("submit", (event) => {
  event.preventDefault(); //not going to /action url
  console.log(document.querySelector(".formEvent").value); //Print input value
});
*/
form.addEventListener("submit", function (event) {
  event.preventDefault(); //not going to /action url
  console.dir(form);
  console.log(this.elements[0].value); //Element is a property of form object
});

/*---------------------------More Events----------------------------*/
//Track change value from initial to final
let formEvent = document.querySelector(".formEvent");
formEvent.addEventListener("change", function () {
  console.log("Change event");
  console.log(this.value);
});

//Track change every value from initial to final
formEvent.addEventListener("input", function () {
  console.log("input event");
  console.log(this.value);
});

/*---------------------------Practice Question----------------------------*/
let pinput = document.querySelector(".pinput");
let pbtn = document.querySelector(".pbtn");

pinput.addEventListener("mouseout", () => {
  console.log("mouse out");
});

pinput.addEventListener("keypress", () => {
  console.log(pinput.value);
});

let topBtn = document.querySelector(".bttop");

// Listen to scroll events
document.addEventListener("scroll", () => {
  // Check if the user is at the end of the page
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    topBtn.style.display = "block"; // Show the button when at the bottom
  } else {
    topBtn.style.display = "none"; // Hide the button when not at the bottom
  }
});

// Add a click event listener to scroll to the top
topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll to the top
  });
});

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
});

//Question
let head3 = document.querySelector(".head3");
pinput.addEventListener("input", function (event) {
  this.value = this.value.replace(/[^a-zA-Z]/, "");
  head3.innerText = this.value;
}); 