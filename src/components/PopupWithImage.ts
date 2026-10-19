import { Popup } from "./Popup";
import { FormValidator } from "./FormValidator.js";

interface ImageOption {
    link: string;
    name: string;
}

export class PopupWithImage extends Popup {
    private imageElement: HTMLImageElement;
    private linkElement: HTMLElement;
    
    constructor(popupSelector: string) {
        super(popupSelector);
        this.imageElement = this.popupElement.querySelector(".popup__image") as HTMLImageElement;
        this.linkElement = this.popupElement.querySelector(".popup__caption") as HTMLElement;
    }

    open(data?: ImageOption): void {
        if (data) {
            const { link, name } = data;
            this.imageElement.src = link;
            this.imageElement.alt = name;
            this.linkElement.textContent = name;
        }
        super.open();
    }

}