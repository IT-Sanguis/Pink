var modalFailure = document.querySelector(".modal--failure");
var modalSuccess = document.querySelector(".modal--success");
var btnForm = document.querySelector(".contest__submit-wrapper > .contest__btn");
var btnCloseFailure = modalFailure.querySelector(".modal__btn");
var btnCloseSuccess = modalSuccess.querySelector(".modal__btn");
var form = document.querySelector("form");

var lastname = document.getElementById("lastname");
var firstname = document.getElementById("firstname");
var middlename = document.getElementById("middlename");
var phone = document.getElementById("number");
var email = document.getElementById("email");
var usertext = document.getElementById("emoji");

var isStorageSupport = true;
var storageLastname = "";
var storageFirstname = "";
// var storageMiddlename = "";
// var storagePhone = "";
var storageEmail = "";

try {
  storageLastname = localStorage.getItem("lastname");
  storageFirstname = localStorage.getItem("firstname");
  // storageMiddlename = localStorage.getItem("middlename");
  // storagePhone = localStorage.getItem("phone");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

// if (isStorageSupport && storageLastname && storageFirstname && storageMiddlename && storagePhone && storageEmail) {
if (isStorageSupport && storageLastname && storageFirstname && storageEmail) {
  lastname.value = storageLastname;
  firstname.value = storageFirstname;
  // middlename.value = storageMiddlename;
  // phone.value = storagePhone;
  email.value = storageEmail;
  // usertext.focus();
} else {
  lastname.focus();
}


form.addEventListener("submit", function(evt) {
  if (!lastname.value || !firstname.value || !email.value) {
    evt.preventDefault();
    modalFailure.classList.remove("modal--show");
    modalFailure.offsetWidth = modalFailure.offsetWidth;
    modalFailure.classList.add("modal--show");
  } else {
    modalSuccess.classList.remove("modal--show");
    modalSuccess.offsetWidth = modalSuccess.offsetWidth;
    modalSuccess.classList.add("modal--show");
    if (isStorageSupport) {
      localStorage.setItem("lastname", lastname.value);
      localStorage.setItem("firstname", firstname.value);
      // localStorage.setItem("middlename", middlename.value);
      // localStorage.setItem("phone", phone.value);
      localStorage.setItem("email", email.value);
    }
  }
});



btnCloseFailure.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalFailure.classList.remove("modal--show");
});


btnCloseSuccess.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalSuccess.classList.remove("modal--show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.code === "Escape") {
    if (modalFailure.classList.contains("modal--show")) {
      evt.preventDefault();
      modalFailure.classList.remove("modal--show");
    }
    if (modalSuccess.classList.contains("modal--show")) {
      evt.preventDefault();
      modalSuccess.classList.remove("modal--show");
    }
  }
});
