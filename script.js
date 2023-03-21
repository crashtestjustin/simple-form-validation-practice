formValidation();

function formValidation() {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    const errorMessage = input.nextElementSibling;
    const formDivParent = input.parentNode;
    input.addEventListener("focusout", (e) => {
      if (!input.checkValidity()) {
        showError(input);
      } else {
        console.log("correct");
        errorMessage.textContent = "";
        input.classList.remove("invalid");
        formDivParent.style.marginBottom = "30px";
      }
    });
    input.addEventListener("keyup", (e) => {
      if (!input.checkValidity()) {
        showError(input);
      } else {
        console.log("correct");
        errorMessage.textContent = "";
        input.classList.remove("invalid");
        formDivParent.style.marginBottom = "30px";
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
  const formDivParent = input.parentNode;
  const errorMessage = input.nextElementSibling;

  if (input.validity.valueMissing) {
    errorMessage.textContent = "This field is required.";
    formDivParent.style.marginBottom = "15px";
    input.classList.add("invalid");
    return;
  } else {
    formDivParent.style.marginBottom = "15px";
    input.classList.add("invalid");
    errorMessageDeterminant(input);
  }
}

function errorMessageDeterminant(input) {
  const errorMessage = input.nextElementSibling;

  if (input.id === "email-input") {
    errorMessage.textContent = "Please provide a valid email address.";
  } else if (input.id === "country-input") {
    errorMessage.textContent = "Please provide a valid country.";
  } else if (input.id === "zipcode-input") {
    errorMessage.textContent = "Please provide a valid zip code.";
  } else if (input.id === "password") {
    errorMessage.textContent = "Please provide a valid password.";
  } else if (input.id === "password-confirmation") {
    errorMessage.textContent = "Passwords do not match.";
  }
}
