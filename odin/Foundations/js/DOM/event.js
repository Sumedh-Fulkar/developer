// // METHOD 2 - problem -> DOM element can have only one onclick property
// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World");

// // METHOD 3 - no problem -> allows multiple eventListeners
// const btn3 = document.querySelector("#btn3");
// btn3.addEventListener("click", () => {
//   alert("Hello World!");
// });

// ABOVE METHODS ARE RIGHT
// NOW USING FUNCTION

function alertFunction () {
  alert("HELLLLOOOO");
}

// METHOD 2 AND 3
const btn = document.querySelector("#btn");

// method2
// btn.onclick = alertFunction;

// method3
btn.addEventListener("click", alertFunction);

btn.addEventListener("click", function (e) {
  console.log(e);
  console.log(e.target);
});

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});



const btn1 = document.querySelector("#btn1");
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}
function bgChange(e) {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn1.addEventListener("click", bgChange);