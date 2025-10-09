// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const paraRed = document.createElement("p");
paraRed.textContent = "Hey! I'm red!";
paraRed.style.color = "red";
container.appendChild(paraRed);

const h3Blue = document.createElement("h3");
h3Blue.textContent = "Hey! I'm a blue h3!";
h3Blue.style.color = "blue";
container.appendChild(h3Blue);

const newContent = document.createElement("div");
newContent.classList.add("newContent");
newContent.style.cssText = "border: 1px solid black; background: pink";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
newContent.appendChild(h1);

const p1 = document.createElement("p");
p1.textContent = "ME TOO!";
newContent.appendChild(p1);

container.appendChild(newContent);