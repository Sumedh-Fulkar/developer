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