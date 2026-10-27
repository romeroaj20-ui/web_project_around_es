import { Popup } from "./Popup.js";
export class PopupWithConfirmation extends Popup {
    buttonElement;
    handleConfirmationClick;
    constructor(popupSelector, handleConfirmationClick) {
        super(popupSelector);
        this.buttonElement = this.popupElement.querySelector(".popup__button");
        this.handleConfirmationClick = handleConfirmationClick;
    }
    open() {
        super.open();
    }
    close() {
        super.close();
    }
    setEventListeners() {
        super.setEventListeners();
        this.buttonElement.addEventListener("submit", (event) => {
            event.preventDefault();
            this.handleConfirmationClick();
            this.close();
        });
    }
}
