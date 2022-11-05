btn = document.querySelector(".btn-toggle");
nav = document.querySelector(".nav");

function showMenu() {
  nav.classList.toggle("show");
}
btn.addEventListener("click", showMenu);
