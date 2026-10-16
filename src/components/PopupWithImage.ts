import { Popup } from "./Popup";

interface ImageOption {
    link: string;
    title: string;
}

export class PopupWithImage extends Popup {
    private imageElement: HTMLImageElement;
    private linkElement: HTMLElement;
    
    constructor(popupSelector: string) {
        super(popupSelector);
        this.imageElement = this.popupElement.querySelector(".popup__image") as HTMLImageElement;
        this.linkElement = this.popupElement.querySelector(".popup__link") as HTMLElement;
    }

    open(data?: ImageOption): void {
        if (data) {
            const { link, title } = data;
            this.imageElement.src = link;
            this.imageElement.alt = title;
            this.linkElement.textContent = title;
        }
        super.open();
    }

}