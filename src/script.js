function changeTabs(event, whiskSize) {
  let deactivatedTabElems = document.querySelectorAll(".tab-current");
  deactivatedTabElems.forEach((element) => {
    element.classList.remove("tab-current");
  });

  document.getElementById(`${whiskSize}-whisk`).classList.add("tab-current");
  document
    .getElementById(`${whiskSize}-whisk-image`)
    .classList.add("tab-current");
  document
    .getElementById(`${whiskSize}-whisk-price`)
    .classList.add("tab-current");

  event.currentTarget.classList.add("tab-current");
}

function hamburgerToggle() {
  if (window.matchMedia("(max-width: 767px)").matches) {
    navElement.style.display = hamburgerCheckbox.checked
      ? "inline-block"
      : "none";
    headerElement.style.height = hamburgerCheckbox.checked ? "unset" : "70px";
  }
}

const hamburgerCheckbox = document.getElementById("hamburger");
const navListElements = document.querySelectorAll("#nav-list li a");

const navElement = document.querySelector(".main-nav");
const headerElement = document.querySelector("header");

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
