import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    private formElement: HTMLFormElement;
    private inputList: NodeListOf<HTMLInputElement>;
    private handleFormSubmit: (inputValues: Record<string, string>) => void; 
    
    constructor(
        popupSelector: string,
        handleFormSubmit: (inputValues: Record<string, string>) => void
    ) {
        super(popupSelector);
        this.formElement = this.popupElement.querySelector(".popup__form") as HTMLFormElement;
        this.inputList = this.formElement.querySelectorAll(".popup__input");
        this.handleFormSubmit = handleFormSubmit;
      }
    
    open (inputValues?: Record<string, string>) {
        super.open();
        this.formElement.reset();
        if (inputValues) {
            this.inputList.forEach((input) => {
                if (inputValues[input.name] !== undefined) {
                    input.value = inputValues[input.name]!;
                }
            });
        }
    }

    close(): void {
    super.close();
    this.formElement.reset();
    }

    private getInputValues(): Record<string, string> {
        const inputValues: Record<string, string> = {};
        this.inputList.forEach((input) => {
            inputValues[input.name] = input.value;
        });
        return inputValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this.formElement.addEventListener("submit", async (event) => {
            event.preventDefault();
            const inputValues = this.getInputValues();
            const submitButton = this.formElement.querySelector<HTMLButtonElement>("[type=submit]");
            const originalButtonText = submitButton?.textContent ?? "";

    if (submitButton) {
        submitButton.textContent = "Guardando...";
        submitButton.disabled = true;
    }

    try {
        await this.handleFormSubmit(inputValues);
        this.close();
        } catch (error) {
        console.error("No se pudo guardar el formulario:", error);
        } finally {
        if (submitButton) {
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
                }
            }
        });
    }
    
}