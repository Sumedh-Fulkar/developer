
function createGrid (size) {
  container.textContent = ""; // clear existing grid

  const message = document.querySelector("#message");
  message.textContent = `A ${size}x${size} Grid`;

  // 2. Calculate and create new squares
  totalsize = size * size;
  for (let i = 0; i < totalsize; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
      // --- FLEXBOX SIZING ---
// Set padding using percentages so 'size' squares fit on one line
    div.style.padding = `${100/size}%`;
    // ATTACH HOVER LISTENERS
    div.addEventListener("mouseenter", function() {
      this.style.backgroundColor = randomColor();
    });
    container.appendChild(div);
  }
}

const container = document.querySelector("#container");

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let newSize = Number(prompt("How many squares on each side?"));

  if (newSize > 0 && newSize <= 100) { // Add reasonable limits
    createGrid(newSize); // Call the function to rebuild
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});
// --- COLOR GENERATION FUNCTION (Corrected) ---
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// initial grid
createGrid(16);


