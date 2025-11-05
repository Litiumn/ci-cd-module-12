// Simple demo script
document.addEventListener("DOMContentLoaded", () => {
  // Create loading overlay
  const loader = document.createElement("div");
  loader.id = "circle-loader";
  loader.innerHTML = `
    <div class="circle"></div>
    <p>Loading your experience...</p>
  `;
  document.body.appendChild(loader);

  // Remove loader after 2 seconds
  setTimeout(() => {
    loader.classList.add("fade-out");
    setTimeout(() => loader.remove(), 800);
  }, 2000);
});

function greet() {
  console.log("Welcome to the ugliest UI analysis!"); //Missing semicolon
}

greet();


