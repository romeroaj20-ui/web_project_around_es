const form = document.querySelector("#edit-profile-form");
const inputs = form.querySelectorAll(".form__input");
const submitButton = form.querySelector(".popup__button");
const inputList = Array.from(inputs);

const showInputError = (inputElement, errorMessage) => {
  const errorElement = form.querySelector(`.${inputElement.id}-input-error`);
  inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};

const hideInputError = (inputElement) => {
  const errorElement = form.querySelector(`.${inputElement.id}-input-error`);
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};

const hasInvalidInput = () => {
  return inputList.some(function (input) {
    return !input.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
  } else {
    buttonElement.disabled = false;
  }
};

const setEventListeners = (formElement) => {
  
    inputList.forEach(function (input) {
    input.addEventListener("blur", function () {
      if (!input.validity.valid) {
        showInputError(input, input.errorMessage);
      } else {
      hideInputError(input);
    }

      toggleButtonState(inputList, submitButton);
    });
  });
};

form.addEventListener("submit", (event) => {
  let formValid = true;

  inputs.forEach(input => {
    if (!input.validity.valid) {
      showInputError(input, input.validationMessage);
     formValid = false;
    }
});

  if (!formValid) {
    event.preventDefault();
  }
});
