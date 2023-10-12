const formElement = document.getElementById("form");
const usernameElement = document.getElementById("username");
const emailElement = document.getElementById("email");
const passElement = document.getElementById("pass");
const btnElement = document.getElementById("btn");
const warningElement = document.getElementById("warning");
const warning2Element = document.getElementById("warning2");
const warning3Element = document.getElementById("warning3");

passElement.addEventListener("mouseenter", function () {
  passElement.type = "txt";
});
passElement.addEventListener("mouseleave", function () {
  passElement.type = "password";
});

form.addEventListener("submit", function (event) {
  warningElement.innerHTML = "";
  warning2Element.innerHTML = "";
  warning3Element.innerHTML = "";

  if (usernameElement.value === "") {
    warningElement.innerHTML = "Please Enter Your Username :))";
  } else if (
    usernameElement.value.length < 3 ||
    usernameElement.value.length > 10
  ) {
    warningElement.innerHTML =
      "The username must be more than 3 characters and less than 10 characters";
  }

  if (emailElement.value === "") {
    warning2Element.innerHTML = "Please Enter Your Email :)) ";
  }

  if (passElement.value === "") {
    warning3Element.innerHTML = "Please Enter Your Password :)) ";
  } else if (passElement.value.length < 3 || passElement.value.length > 12) {
    warning3Element.innerHTML =
      "The password must be more than 3 characters and less than 12 characters";
  }

  event.preventDefault();
});
