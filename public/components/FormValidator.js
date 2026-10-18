import { inputSelector } from '../utils/constants';
export class FormValidator {
    formElement;
    constructor({ inputSelector, submitButtonSelector, disabledButtonClass, errorInputClass, visibleErrorClass }, formElement) {
        this.formElement = formElement;
    }
    checkInputValid(input) {
        if (!input.validity.valid) {
            const errorElement = document.querySelector(`.${inputSelector.id}-error`);
            input.classList.add(errorInputClass);
            errorElement.textContent = input.validationMessage;
            errorElement.classList.add(visibleErrorClass);
        }
        else {
            const errorElement = document.querySelector(`.${inputSelector.id}-error`);
            input.classList.remove(errorInputClass);
            errorElement.classList.remove(visibleErrorClass);
            errorElement.textContent = '';
        }
    }
    toggleButtonState() {
        if (this.formElement.checkValidity()) {
            this.buttonElement.disabled = false;
            this.buttonElement.classList.remove(disabledButtonClass);
        }
        else {
            this.buttonElement.disabled = true;
            this.buttonElement.classList.add(disabledButtonClass);
        }
    }
    setEventListeners() {
        this.inputList.forEach((input) => {
            input.addEventListener('input', () => { }),
            ;
        });
    }
    enableValidation() {
        this.inputList.forEach((input) => {
            input.addEventListener('input', () => {
                this.checkInputValid(input);
                this.toggleButtonState();
            });
        });
    }
    resetValidation() {
        this.inputList.forEach((input) => {
            input.classList.remove(errorInputClass);
        });
    }
}
