// JS is single Threaded Language
/*
setTimeout(() => {
  console.log("Siddhartha");
}, 2000);
console.log("Hello");
*/
// and synchrnous in nature (Execute one by one)
//So we make js async with the help of Callback in SetTimeout

/*----------------------------CallBack Hell(Nesting of Callback)-----------------------------------*/
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

/*
function saveToDb(data, success, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  if (internetSpeed > 5) {
    success();
  } else {
    failure();
  }
}
 

saveToDb(
  "Siddhartha",
  () => {
    console.log("Success: data saved");
    saveToDb(
      "Raghuvanshi",
      () => {
        console.log("Sucess2: data saved");
      },
      () => {
        console.log("failure2: Weak connection");
      }
    );
  },
  () => {
    console.log("Failure : Weak connection");
  }
);
 */

/*----------------------------Promises-----------------------------------*/
/*
function saveToDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;

    if (internetSpeed > 5) {
      resolve("Success: Data saved");
    } else {
      reject("Failure: weak connection");
    }
  });
}

// saveToDb("Siddhartha");

/*----------------------------Promises Methods-----------------------------------*/
/*
saveToDb("Raghuvanshi")
  .then((result) => {
    console.log("Promise is resolved", result);
    return saveToDb("Alright");
  })
  .then(() => {
    console.log(`Promise 2 is resolved`);
  })
  .catch((error) => {
    console.log("error", error);
  });
  */

/*----------------------------Practice Question-----------------------------------*/
/*
let head = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      head.style.color = color;
      console.log(`Color Changed`, color);
      resolve("Color changed", color);
    }, delay);
  });
}

changeColor("green", 1000)
  .then(() => {
    return changeColor("yellow", 1000);
  })
  .then(() => {
    return changeColor("red", 1000);
  })

  .catch((e) => {
    console.log(e);
  });
*/

/*----------------------------Async and Await-----------------------------------*/
/*
async function greet() {
  throw "Weak Connection";
  return "hello";
}
greet()
  .then((result) => {
    console.log("Promise is resolved", result);
  })
  .catch((e) => {
    console.log(e);
  });
*/
