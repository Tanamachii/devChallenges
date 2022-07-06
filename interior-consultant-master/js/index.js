document.addEventListener("DOMContentLoaded", function () {
  iniciarApp();
});
function iniciarApp() {
  abrirNav();
}

function abrirNav() {
  const menu = document.querySelector(".menu");
  const cerrar = document.querySelector(".cerrar");

  menu.onclick = function () {
    abrirModal(menu, cerrar);
  };
}
function abrirModal(menu, cerrar) {
  menu.classList.add("ocultar");
  cerrar.classList.remove("ocultar");

  const navbar = document.createElement("nav");
  navbar.classList.add("navbar");
  navbar.classList.add("flex");
  navbar.innerHTML = `
            <a href="#" class="navbar__link selected">Home</a>
            <a href="#" class="navbar__link">Collection</a>
            <a href="#" class="navbar__link">About</a>
            <a href="#" class="navbar__link">Contact</a>
    `;
  const overlay = document.createElement("div");
  overlay.appendChild(navbar);
  overlay.classList.add("overlay");
  overlay.onclick = function () {
    const body = document.querySelector("body");
    overlay.remove();
    menu.classList.remove("ocultar");
    cerrar.classList.add("ocultar");
  };
  const body = document.querySelector("body");
  body.appendChild(overlay);
  cerrar.onclick = function () {
    overlay.remove();
    menu.classList.remove("ocultar");
    cerrar.classList.add("ocultar");
  };
}
