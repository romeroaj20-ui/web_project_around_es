export class FormValidator {
    formElement;
    submitButtonElement;
    disabledButtonClass;
    errorInputClass;
    visibleErrorClass;
    inputList;
    constructor({ inputSelector, submitButtonSelector, disabledButtonClass, errorInputClass, visibleErrorClass }, formElement) {
        this.formElement = formElement;
        this.submitButtonElement = this.formElement.querySelector(submitButtonSelector);
        this.disabledButtonClass = disabledButtonClass;
        this.errorInputClass = errorInputClass;
        this.visibleErrorClass = visibleErrorClass;
        this.inputList = formElement.querySelectorAll(inputSelector);
    }
    checkInputValid(input) {
        const errorElement = document.querySelector(`.${input.id}-error`);
        if (!input.validity.valid) {
            input.classList.add(this.errorInputClass);
            errorElement.textContent = input.validationMessage;
            errorElement.classList.add(this.visibleErrorClass);
        }
        else {
            input.classList.remove(this.errorInputClass);
            errorElement.classList.remove(this.visibleErrorClass);
            errorElement.textContent = '';
        }
    }
    toggleButtonState() {
        if (this.formElement.checkValidity()) {
            this.submitButtonElement.disabled = false;
            this.submitButtonElement.classList.remove(this.disabledButtonClass);
        }
        else {
            this.submitButtonElement.disabled = true;
            this.submitButtonElement.classList.add(this.disabledButtonClass);
        }
    }
    setEventListeners() {
        this.inputList.forEach((input) => {
            input.addEventListener("input", () => {
                this.checkInputValid(input);
                this.toggleButtonState();
            });
        });
    }
    enableValidation() {
        this.setEventListeners();
        this.toggleButtonState();
    }
    resetValidation() {
        this.inputList.forEach((input) => {
            const errorElement = this.formElement.querySelector(`.${input.id}-error`);
            input.classList.remove(this.errorInputClass);
            errorElement.classList.remove(this.visibleErrorClass);
            errorElement.textContent = "";
        });
        this.toggleButtonState();
    }
}
