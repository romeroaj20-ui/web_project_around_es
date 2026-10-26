import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
    private buttonElement: HTMLElement;
    private handleConfirmationClick: () => void;

     constructor(
        popupSelector: string,
        handleConfirmationClick: () => void,
        ) {
        super(popupSelector);
        this.buttonElement = this.popupElement.querySelector(".popup__button") as HTMLElement;
        this.handleConfirmationClick = handleConfirmationClick;
    }

    open(): void {
      super.open();
    }

    close(): void {
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