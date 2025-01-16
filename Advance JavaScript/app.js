// JS is single Threaded Language
// and synchrnous in nature (Execute one by one)
//So we make js async with help of Callback in SetTimeout

/*----------------------------CallBack Hell(Nesting of Callback-----------------------------------*/
/*
let h1 = document.querySelector("h1");

function changeColor(color, delay, nextColor) {
  setTimeout(() => {
    h1.style.color = color;
    nextColor();
  }, delay);
}

changeColor("red", 1000, () => {
  changeColor("orange", 1000, () => {
    changeColor("skyblue", 1000);
  });
});
*/

/*----------------------------Promises-----------------------------------*/
