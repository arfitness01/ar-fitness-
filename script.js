// ===============================
// AR FITNESS WEBSITE JAVASCRIPT
// ===============================


// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

  navMenu.classList.toggle("show");

});


// CLOSE MOBILE MENU AFTER CLICK

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

  link.addEventListener("click", function () {

    navMenu.classList.remove("show");

  });

});


// HEADER SCROLL EFFECT

const header = document.getElementById("header");

window.addEventListener("scroll", function () {

  if (window.scrollY > 50) {

    header.style.background = "rgba(5,5,5,.97)";

  } else {

    header.style.background = "rgba(5,5,5,.88)";

  }

});


// SMOOTH BUTTON EFFECT

const buttons = document.querySelectorAll(".btn, .price-button");

buttons.forEach(function (button) {

  button.addEventListener("click", function () {

    button.style.transform = "scale(.97)";

    setTimeout(function () {

      button.style.transform = "";

    }, 120);

  });

});


// CURRENT YEAR

const year = new Date().getFullYear();

const footerText = document.querySelector("footer p");

if (footerText) {

  footerText.innerHTML =
    "© " + year + " AR FITNESS. ALL RIGHTS RESERVED.";

}


// WHATSAPP MESSAGE

function openWhatsApp(plan) {

  const number = "919437726820";

  const message =
    "Hello AR Fitness, I want information about the " +
    plan +
    " membership.";

  const url =
    "https://wa.me/" +
    number +
    "?text=" +
    encodeURIComponent(message);

  window.open(url, "_blank");

}
