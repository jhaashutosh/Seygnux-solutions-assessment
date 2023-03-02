var hamburger = document.querySelector(".hamburger-menu i");
hamburger.addEventListener("click", function () {
  hamburger.parentElement.classList.toggle("active");
});
