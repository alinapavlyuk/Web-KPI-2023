const hamburgerCheckbox = document.getElementById("hamburger");
const navListElements = document.querySelectorAll("#nav-list li a");

const navElement = document.querySelector(".main-nav");
const headerElement = document.querySelector("header");

function setNavDisplay() {
  if (window.matchMedia("(max-width: 767px)").matches) {
    navElement.style.display = hamburgerCheckbox.checked ? "block" : "none";
  } else {
    navElement.style.display = "block";
  }
}

function hamburgerToggle() {
  if (window.matchMedia("(max-width: 767px)").matches) {
    navElement.style.display = hamburgerCheckbox.checked ? "block" : "none";
    headerElement.style.height = hamburgerCheckbox.checked ? "unset" : "70px";
  }
}

hamburgerCheckbox.addEventListener("change", function () {
  hamburgerToggle();
});

navListElements.forEach((element) => {
  element.addEventListener("click", function () {
    if (window.matchMedia("(max-width: 767px)").matches) {
      hamburgerCheckbox.checked = false;
      hamburgerToggle();
    }
  });
});

window.addEventListener("resize", () => {
  setNavDisplay();
});

setNavDisplay();
