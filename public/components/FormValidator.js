class FormValidator {
    config;
    formElement;
    inputList;
    buttonElement;
    constructor({ config }, formElement) {
        this.config = config;
        this.formElement = formElement;
        this.inputList = Array.from(this.formElement.querySelectorAll(this.config.inputSelector));
        this.buttonElement = this.formElement.querySelector(this.config.submitButtonSelector);
    }
    enableValidation() {
    }
    resetValidation() {
    }
}
export {};
