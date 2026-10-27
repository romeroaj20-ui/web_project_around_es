import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  //private buttonElement: HTMLElement;
  private formElement: HTMLFormElement;
  private handleSubmit: () => void;

  constructor(popupSelector: string, handleSubmit: () => void) {
    super(popupSelector);
    //this.buttonElement = this.popupElement.querySelector(".popup__button") as HTMLElement;
    this.handleSubmit = handleSubmit;
    this.formElement = this.popupElement.querySelector(
      ".popup__form",
    ) as HTMLFormElement;
  }

  open(): void {
    super.open();
  }

  close(): void {
    super.close();
  }

  setSubmitAction() {}

  setEventListeners() {
    super.setEventListeners();
    this.formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      this.handleSubmit();
      this.close();
    });
  }
}
