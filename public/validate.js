const form = document.querySelector(".popup");
function hideInputError(inputElement) {
    const errorElement = document.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove("popup__input_type_error");
    errorElement.classList.remove("popup__error_visible");
    errorElement.textContent = "";
}
function showInputError(inputElement, errorMessage) {
    const errorElement = document.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add("popup__input_type_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("popup__error_visible");
}
function hasInvalidInput(inputList) {
    return Array.from(inputList).some(function (input) {
        return !input.validity.valid;
    });
}
function toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
        buttonElement.disabled = true;
        buttonElement.classList.add("popup__button_disabled");
    }
    else {
        buttonElement.disabled = false;
        buttonElement.classList.remove("popup__button_disabled");
    }
}
export function setEventListeners(forms) {
    forms.forEach((formElement) => {
        const inputs = formElement.querySelectorAll(".popup__input");
        const submitButton = formElement.querySelector(".popup__button");
        toggleButtonState(inputs, submitButton);
        inputs.forEach((input) => {
            input.addEventListener("input", () => {
                if (!input.validity.valid) {
                    showInputError(input, input.validationMessage);
                }
                else {
                    hideInputError(input);
                }
                toggleButtonState(inputs, submitButton);
            });
        });
    });
}
export function resetValidation(formElement) {
    const inputs = formElement.querySelectorAll(".popup__input");
    const submitButton = formElement.querySelector(".popup__button");
    inputs.forEach((inputElement) => {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove("popup__input_type_error");
        errorElement.classList.remove("popup__error_visible");
        errorElement.textContent = "";
    });
    submitButton.disabled = true;
    submitButton.classList.add("popup__button_disabled");
}
