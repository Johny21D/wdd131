const btn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

btn.onclick = () => {
  nav.classList.toggle("open");
};
