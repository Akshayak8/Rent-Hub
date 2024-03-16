window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 400) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("logoimg");
  if (window.scrollY > 400) {
    navbar.src = "./images/rent logo white.png";
  } else {
    navbar.src = "./images/rent logo.png";
  }
});
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("rentera");
  if (window.scrollY > 400) {
    navbar.classList.add("hover");
  } else {
    navbar.classList.remove("hover");
  }
});
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("signupa");
  if (window.scrollY > 400) {
    navbar.classList.add("hover");
  } else {
    navbar.classList.remove("hover");
  }
});
