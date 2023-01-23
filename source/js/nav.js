var nav = document.querySelector(".page-header");
var burger = nav.querySelector(".page-header__button");

nav.classList.remove("page-header--js-disabled");
burger.addEventListener("click", function(evt) {
  evt.preventDefault();
  nav.classList.toggle("page-header--open");
});
