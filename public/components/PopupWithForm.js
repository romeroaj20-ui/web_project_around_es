import { Popup } from "./Popup";
export class PopupWithForm extends Popup {
    handleFormSubmit;
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this.handleFormSubmit = handleFormSubmit;
    }
}
