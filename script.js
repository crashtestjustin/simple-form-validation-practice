formValidation();

function formValidation() {
  const inputs = document.querySelectorAll("input");
  const country = document.querySelector("#country-input");
  console.log(country);
  inputs.forEach((input) => {
    const errorMessage = input.nextElementSibling;
    const formDivParent = input.parentNode;

    input.addEventListener("keyup", (e) => {
      if (input.id === "password-confirmation") {
        checkErrorType(input);
        return;
      }
      if (!input.checkValidity()) {
        showError(input);
      } else {
        validInput(input);
      }
    });
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
  });

  country.addEventListener("change", (e) => {
    // const errorMessage = country.nextElementSibling;
    // const formDivParent = country.parentNode;
    if (country.value === "select country") {
      showError(country);
    } else {
      validInput(country);
    }
  });

  const submit = document.querySelector(".submit");
  submit.addEventListener("click", (e) => {
    const countrySelect = document.querySelector("select");
    if (countrySelect.value === "select country") {
      showError(countrySelect);
      e.preventDefault();
      console.log("submit not accepted");
    }
    inputs.forEach((input) => {
      const formDivParent = input.parentNode;
      const errorMessage = input.nextElementSibling;
      if (input.validity.valueMissing) {
        e.preventDefault();
        errorMessage.textContent = "This field is required.";
        formDivParent.style.marginBottom = "15px";
        input.classList.add("invalid");
        console.log("submit not accepted");
      }
    });
  });
}

function checkErrorType(input) {
  const mainPwField = document.getElementById("password");
  if (input.value !== mainPwField.value) {
    console.log("pw missmatch");
    showError(input);
    mainPwField.style.border = "2px solid firebrick";
    mainPwField.classList.add("invalid");
  } else {
    mainPwField.classList.remove("invalid");
    input.classList.remove("invalid");
    validInput(mainPwField);
    validInput(input);
  }
}

function showError(input) {
  const formDivParent = input.parentNode;
  const errorMessage = input.nextElementSibling;
  if (input.id === "country-input") {
    errorMessage.textContent = "Please select a country.";
    formDivParent.style.marginBottom = "15px";
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
  if (input.validity.valueMissing) {
    errorMessage.textContent = "This field is required.";
    formDivParent.style.marginBottom = "15px";
    input.classList.add("invalid");
    input.classList.remove("valid");
  } else {
    formDivParent.style.marginBottom = "15px";
    input.classList.add("invalid");
    errorMessageDeterminant(input);
    input.classList.remove("valid");
  }
}

function errorMessageDeterminant(input) {
  const errorMessage = input.nextElementSibling;

  if (input.id === "email-input") {
    errorMessage.textContent = "Please provide a valid email address.";
  } else if (input.id === "zipcode-input") {
    errorMessage.textContent = "Please provide a valid zip code.";
  } else if (input.id === "password") {
    const pwConfirm = document.getElementById("password-confirmation");
    if (input.value !== pwConfirm.value && pwConfirm.value.length >= 1) {
      errorMessage.textContent = "Passwords do not match.";
    } else {
      errorMessage.textContent = "Please provide a valid password.";
    }
  } else if (input.id === "password-confirmation") {
    errorMessage.textContent = "Passwords do not match.";
  }
}

function validInput(input) {
  const formDivParent = input.parentNode;
  const errorMessage = input.nextElementSibling;
  errorMessage.textContent = "";
  formDivParent.style.marginBottom = "30px";
  input.classList.remove("invalid");
  input.classList.add("valid");
}
