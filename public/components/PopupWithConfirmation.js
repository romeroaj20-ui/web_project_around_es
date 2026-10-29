import { Popup } from "./Popup.js";
export class PopupWithConfirmation extends Popup {
    formElement;
    submitAction = async () => { };
    constructor(popupSelector, submitAction) {
        super(popupSelector);
        this.formElement = this.popupElement.querySelector(".popup__form");
    }
    setSubmitAction(action) {
        this.submitAction = action;
    }
    setEventListeners() {
        super.setEventListeners();
        this.formElement.addEventListener("submit", async (event) => {
            event.preventDefault();
            await this.submitAction();
            this.close();
        });
    }
}
