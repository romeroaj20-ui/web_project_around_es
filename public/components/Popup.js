export class Popup {
    popupElement;
    constructor(popupSelector) {
        this.popupElement = document.querySelector(popupSelector);
    }
    handleEscUp = (event) => {
        if (event.key === "Escape") {
            this.close();
        }
    };
    setEventListeners() {
        const closeButton = this.popupElement.querySelector(".popup__close");
        closeButton.addEventListener("click", () => {
            this.close();
        });
        this.popupElement.addEventListener("click", (event) => {
            if (event.target === this.popupElement) {
                this.close();
            }
        });
    }
    open() {
        this.popupElement.classList.add("popup_is-opened");
        document.addEventListener("keyup", this.handleEscUp);
    }
    close() {
        this.popupElement.classList.remove("popup_is-opened");
        document.removeEventListener("keyup", this.handleEscUp);
    }
}
