var slider = document.querySelector(".slider");
var btnPrev = slider.querySelector(".slider__btn--prev");
var btnNext = slider.querySelector(".slider__btn--next");
var items = slider.querySelectorAll(".slider__item");
var inputsSlider = slider.querySelectorAll("input");

var table = document.querySelector(".price-table");
var inputsTable = document.querySelectorAll(".price__dots > input");


var current = 1;


// Переключение slider по стрелкам
btnNext.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (current < items.length-1) {
    current++;
  } else {
    current = 0;
  }
  items.forEach(item => {
    item.classList.remove("slider__item--current");
  });
  items[current].classList.add("slider__item--current");
  inputsSlider[current].checked = true;
});


btnPrev.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (current > 0) {
    current--;
  } else {
    current = items.length-1;
  }
  items.forEach(item => {
    item.classList.remove("slider__item--current");
  });
  items[current].classList.add("slider__item--current");
  inputsSlider[current].checked = true;
});

// Переключение slider по radio

inputsSlider.forEach(input => {
  input.addEventListener("click", function() {
    toggleSliders.call(this);
  });
});


function toggleSliders() {
  items.forEach(item => item.classList.remove("slider__item--current"));
  slider.querySelector("." + this.dataset.slider).classList.add("slider__item--current");
}

// Переключение table по radio

inputsTable.forEach(input => {
  input.addEventListener("click", function() {
    toggleTable.call(this);
  });
});


function toggleTable() {
  table.classList.remove("price-table--column-1");
  table.classList.remove("price-table--column-2");
  table.classList.remove("price-table--column-3");
  table.classList.add(this.dataset.table);
}
