import { Popup } from "./Popup";
import { FormValidator } from "./FormValidator.js";
export class PopupWithForm extends Popup {
    formElement;
    inputList;
    handleFormSubmit;
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this.formElement = this.popupElement.querySelector(".popup__form");
        this.inputList = this.formElement.querySelectorAll(".popup__input");
        this.handleFormSubmit = handleFormSubmit;
    }
    open(inputValues) {
        super.open();
        this.formElement.reset();
        if (inputValues) {
            this.inputList.forEach((input) => {
                if (inputValues[input.name] !== undefined) {
                    input.value = inputValues[input.name];
                }
            });
        }
    }
    getInputValues() {
        const inputValues = {};
        this.inputList.forEach((input) => {
            inputValues[input.name] = input.value;
        });
        return inputValues;
    }
    setEventListeners() {
        this.formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const inputValues = this.getInputValues();
            this.handleFormSubmit(inputValues);
            this.close();
        });
    }
}
