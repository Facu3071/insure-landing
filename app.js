btn = document.querySelector(".btn-toggle");
menu = document.querySelector(".nav-list");

function showMenu() {
  menu.classList.toggle("show");
  btn.classList.toggle("show");
}

btn.addEventListener("click", showMenu);
