import { Popup } from "./Popup.js";
export class PopupWithConfirmation extends Popup {
    //private buttonElement: HTMLElement;
    formElement;
    handleSubmit;
    constructor(popupSelector, handleSubmit) {
        super(popupSelector);
        //this.buttonElement = this.popupElement.querySelector(".popup__button") as HTMLElement;
        this.handleSubmit = handleSubmit;
        this.formElement = this.popupElement.querySelector(".popup__form");
    }
    open() {
        super.open();
    }
    close() {
        super.close();
    }
    setSubmitAction() { }
    setEventListeners() {
        super.setEventListeners();
        this.formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            this.handleSubmit();
            this.close();
        });
    }
}
