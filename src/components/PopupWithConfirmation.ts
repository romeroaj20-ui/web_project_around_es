import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  private formElement: HTMLFormElement;
  private submitAction: () => Promise<void> = async () => {};

  constructor(popupSelector: string, submitAction: () => void) {
    super(popupSelector);
    this.formElement = this.popupElement.querySelector(
      ".popup__form",
    ) as HTMLFormElement;
  }

  setSubmitAction(action: () => Promise<void>): void {
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
