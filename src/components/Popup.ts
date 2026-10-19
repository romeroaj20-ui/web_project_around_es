export class Popup {
protected popupElement: HTMLElement;

    constructor(popupSelector: string) {
        this.popupElement = document.querySelector(popupSelector) as HTMLElement;
    }

private handleEscUp = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            this.close();
        }
    };

setEventListeners() {
        const closeButton = this.popupElement.querySelector(".popup__close") as HTMLElement;
        closeButton.addEventListener("click", () => {this.close();
        });

        this.popupElement.addEventListener("click", (event) => {
            if (event.target === this.popupElement) {
                this.close();
            }
        });
    }

open(): void {
        this.popupElement.classList.add("popup_is-opened");
        document.addEventListener("keyup", this.handleEscUp);
    }

close(): void {
        this.popupElement.classList.remove("popup_is-opened");
        document.removeEventListener("keyup", this.handleEscUp);
    }

}