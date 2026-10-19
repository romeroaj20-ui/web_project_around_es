import { inputSelector } from '../utils/constants';
export class FormValidator {
    formElement;
    inputElement;
    submitButtonElement;
    disabledButtonClass;
    errorInputClass;
    visibleErrorClass;
    inputList;
    constructor({ inputSelector, submitButtonSelector, disabledButtonClass, errorInputClass, visibleErrorClass }, formElement) {
        this.formElement = formElement;
        this.inputElement = document.querySelector(inputSelector);
        this.submitButtonElement = document.querySelector(submitButtonSelector);
        this.disabledButtonClass = disabledButtonClass;
        this.errorInputClass = errorInputClass;
        this.visibleErrorClass = visibleErrorClass;
        this.inputList = this.formElement.querySelectorAll(inputSelector);
    }
    checkInputValid(input) {
        if (!input.validity.valid) {
            const errorElement = document.querySelector(`.${this.inputElement.id}-error`);
            input.classList.add(this.errorInputClass);
            errorElement.textContent = input.validationMessage;
            errorElement.classList.add(this.visibleErrorClass);
        }
        else {
            const errorElement = document.querySelector(`.${this.inputElement.id}-error`);
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
            input.addEventListener('input', () => { });
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
            input.classList.remove(this.errorInputClass);
        });
    }
}
