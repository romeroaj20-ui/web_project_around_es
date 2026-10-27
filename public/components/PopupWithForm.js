import { Popup } from "./Popup.js";
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
    close() {
        super.close();
        this.formElement.reset();
    }
    getInputValues() {
        const inputValues = {};
        this.inputList.forEach((input) => {
            inputValues[input.name] = input.value;
        });
        return inputValues;
    }
    setEventListeners() {
        super.setEventListeners();
        this.formElement.addEventListener("submit", async (event) => {
            event.preventDefault();
            const inputValues = this.getInputValues();
            const submitButton = this.formElement.querySelector("[type=submit]");
            const originalButtonText = submitButton?.textContent ?? "";
            if (submitButton) {
                submitButton.textContent = "Guardando...";
                submitButton.disabled = true;
            }
            try {
                await this.handleFormSubmit(inputValues);
                this.close();
            }
            catch (error) {
                console.error("No se pudo guardar el formulario:", error);
            }
            finally {
                if (submitButton) {
                    submitButton.textContent = originalButtonText;
                    submitButton.disabled = false;
                }
            }
        });
    }
}
