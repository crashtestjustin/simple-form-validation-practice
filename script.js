formValidation();

function formValidation() {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.addEventListener("focusout", (e) => {
      if (!input.checkValidity()) {
        showError(input);
      } else {
        console.log("correct");
      }
    });
  });

  const submit = document.querySelector(".submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("submit");
  });
}

function showError(input) {
  const formInputs = document.querySelectorAll("form input");
  const errorMessages = document.querySelectorAll(".error-message");

  console.log(input);
}
