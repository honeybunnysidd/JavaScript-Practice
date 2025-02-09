/*
let jsonRes =
  '{"fact":"Tests done by the Behavioral Department of the Musuem of Natural History conclude that while a dogs memory lasts about 5 minutes, a cats recall can last as long as 16 hours.","length":175}';

  //JSON to Object
let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);

let obj = {
  fact: "Hey I am Siddhartha",
  length: 36,
};
console.log(obj);

  //Object to JSON
let changeIntoJson = JSON.stringify(obj);
console.log(changeIntoJson);
*/

//-----------------------Our First Request-----------------
let url = "https://catfact.ninja/fact";
/*
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("data:", data.fact);
  })
  .catch(() => {
    console.log(err);
  });
*/
//-----------------------Our First Request with Async and Await-----------------
/*
async function getFacts() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);
  } catch (err) {
    console.log("Error is", err);
  }
}
  */

//-----------------------Practice Question (axios)-----------------
let btn = document.querySelector("#btn1");
btn.addEventListener("click", async () => {
  let data = await getRandomFact();

  let output = document.querySelector("#output");
  output.innerText = data;
});

async function getRandomFact() {
  try {
    let res = await axios.get(url);
    return res.data.fact;
  } catch (err) {
    console.log("error", err);
  }
}
//-----------------------Practice Question 2 (axios)-----------------

let url2 = "https://dog.ceo/api/breeds/image/random";

let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", async () => {
  let data = await getDogImage();
  let image = document.querySelector("img");
  image.setAttribute("src", data);
});

async function getDogImage() {
  try {
    let res = await axios.get(url2);
    return res.data.message;
  } catch (err) {
    console.log("error", err);
  }
}
