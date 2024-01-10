const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu-list");
const toggleBtn = document.querySelector(".theme-toggle");

// nav for mobile screen
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// add border when scroll down
window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.style.borderBottom = "1px solid #686868";
  } else {
    header.style.borderBottom = "none";
  }
};

// state
const theme = localStorage.getItem("theme");

// on mount
theme && document.body.classList.add(theme);

// dark theme
const themeHandler = () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark-mode");
  } else {
    localStorage.removeItem("theme");
  }
};

toggleBtn.addEventListener("click", themeHandler);
