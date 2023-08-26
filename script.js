let firstNameInput = document.querySelector("#first-name-input");
const firstNameSpan = document.querySelector("#first-name-span");
let lastNameInput = document.querySelector("#last-name-input");
const lastNameSpan = document.querySelector("#last-name-span");
const emailInput = document.querySelector("#email-input");
const emailSpan = document.querySelector("#email-span");
const clickToEditButton = document.querySelector("#click-to-edit");
const submitButton = document.querySelector("#submit");
const cancelButton = document.querySelector("#cancel");

clickToEditButton.classList.add("remove-button");
firstNameSpan.classList.add("remove-span");
lastNameSpan.classList.add("remove-span");
emailSpan.classList.add("remove-span");

function savingUserInfo() {
  localStorage.setItem("firstName", firstNameInput.value);
  localStorage.setItem("lastName", lastNameInput.value);
  localStorage.setItem("email", emailInput.value);
}

window.onload = function () {
  firstNameInput.classList.add("remove-inputs");
  firstNameSpan.classList.remove("remove-span");
  firstNameSpan.innerHTML = localStorage.getItem("firstName");

  lastNameInput.classList.add("remove-inputs");
  lastNameSpan.classList.remove("remove-span");
  lastNameSpan.innerHTML = localStorage.getItem("lastName");

  emailInput.classList.add("remove-inputs");
  emailSpan.classList.remove("remove-span");
  emailSpan.innerHTML = localStorage.getItem("email");

  submitButton.classList.add("remove-button");
  cancelButton.classList.add("remove-button");
  clickToEditButton.classList.remove("remove-button");

  //

  firstNameInput.value = localStorage.getItem("firstName");
  lastNameInput.value = localStorage.getItem("lastName");
  emailInput.value = localStorage.getItem("email");
};

function checking() {
  if (
    firstNameInput.value === "" &&
    lastNameInput.value === "" &&
    emailInput.value === ""
  ) {
    alert("You need to fill the fields");
    firstNameInput.classList.add("red-border-input");
    lastNameInput.classList.add("red-border-input");
    emailInput.classList.add("red-border-input");
  } else if (firstNameInput.value === "") {
    firstNameInput.classList.add("red-border-input");
    alert("You need to fill First Name field");
  } else if (lastNameInput.value === "") {
    lastNameInput.classList.add("red-border-input");
    alert("You need to fill Last Name field");
  } else if (emailInput.value === "") {
    emailInput.classList.add("red-border-input");
    alert("You need to fill Email field");
  } else {
    savingUserInfo();
    firstNameInput.classList.add("remove-inputs");
    firstNameSpan.classList.remove("remove-span");
    firstNameSpan.innerHTML = localStorage.getItem("firstName");

    lastNameInput.classList.add("remove-inputs");
    lastNameSpan.classList.remove("remove-span");
    lastNameSpan.innerHTML = localStorage.getItem("lastName");

    emailInput.classList.add("remove-inputs");
    emailSpan.classList.remove("remove-span");
    emailSpan.innerHTML = localStorage.getItem("email");

    clickToEditButton.classList.remove("remove-button");
    submitButton.classList.add("remove-button");
    cancelButton.classList.add("remove-button");
  }
}

submitButton.addEventListener("click", function () {
  checking();
});

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    checking();
  }
});

cancelButton.addEventListener("click", function () {
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  firstNameInput.classList.remove("red-border-input");
  lastNameInput.classList.remove("red-border-input");
  emailInput.classList.remove("red-border-input");
});

clickToEditButton.addEventListener("click", function () {
  firstNameSpan.classList.add("remove-span");
  lastNameSpan.classList.add("remove-span");
  emailSpan.classList.add("remove-span");

  firstNameInput.classList.remove("remove-inputs");
  lastNameInput.classList.remove("remove-inputs");
  emailInput.classList.remove("remove-inputs");

  clickToEditButton.classList.add("remove-button");
  submitButton.classList.remove("remove-button");
  cancelButton.classList.remove("remove-button");
});
