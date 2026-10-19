import type { FormConfig } from "../utils/constants.js";

export class FormValidator { 
  private formElement: HTMLFormElement;
  private submitButtonElement: HTMLButtonElement;
  private disabledButtonClass: string;
  private errorInputClass: string;
  private visibleErrorClass: string;
  private inputList: NodeListOf<HTMLInputElement>;
    
  constructor({ inputSelector, 
    submitButtonSelector, 
    disabledButtonClass, 
    errorInputClass, 
    visibleErrorClass }: FormConfig, formElement: HTMLFormElement) {
        this.formElement = formElement;
        this.submitButtonElement = this.formElement.querySelector(submitButtonSelector) as HTMLButtonElement;
        this.disabledButtonClass = disabledButtonClass;
        this.errorInputClass = errorInputClass;
        this.visibleErrorClass = visibleErrorClass;
        this.inputList = formElement.querySelectorAll(inputSelector);
  }
  
private checkInputValid(input: HTMLInputElement): void {
  const errorElement: HTMLElement = document.querySelector(`.${input.id}-error`) as HTMLElement;  
  if (!input.validity.valid) {      
      input.classList.add(this.errorInputClass);
      errorElement.textContent = input.validationMessage;
      errorElement.classList.add(this.visibleErrorClass);}

      else {
        input.classList.remove(this.errorInputClass);
        errorElement.classList.remove(this.visibleErrorClass);
        errorElement.textContent = '';
      }
}

private toggleButtonState(): void {
    if (this.formElement.checkValidity()) {
      this.submitButtonElement.disabled = false;
      this.submitButtonElement.classList.remove(this.disabledButtonClass);
    } else {
      this.submitButtonElement.disabled = true;
      this.submitButtonElement.classList.add(this.disabledButtonClass);
    }
  }

 private setEventListeners(): void {
  this.inputList.forEach((input: HTMLInputElement) => {
    input.addEventListener("input", () => {
      this.checkInputValid(input);
      this.toggleButtonState();
    });
  });
}

  enableValidation(): void {
  this.setEventListeners();
  this.toggleButtonState();
}

  resetValidation(): void {
  this.inputList.forEach((input: HTMLInputElement) => {
    const errorElement = this.formElement.querySelector(`.${input.id}-error`) as HTMLElement;
    input.classList.remove(this.errorInputClass);
    errorElement.classList.remove(this.visibleErrorClass);
    errorElement.textContent = "";
  });
  this.toggleButtonState();
}

}