import { Popup } from "./Popup";
import { FormValidator } from "./FormValidator.js";
export class PopupWithImage extends Popup {
    imageElement;
    linkElement;
    constructor(popupSelector) {
        super(popupSelector);
        this.imageElement = this.popupElement.querySelector(".popup__image");
        this.linkElement = this.popupElement.querySelector(".popup__link");
    }
    open(data) {
        if (data) {
            const { link, title } = data;
            this.imageElement.src = link;
            this.imageElement.alt = title;
            this.linkElement.textContent = title;
        }
        super.open();
    }
}
