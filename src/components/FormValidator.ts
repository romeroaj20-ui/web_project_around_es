import { inputSelector, type defaultFormConfig } from '../utils/constants';

export class FormValidator { 
  private formElement: HTMLFormElement;
  
    
  constructor({ inputSelector, 
    submitButtonSelector, 
    disabledButtonClass, 
    errorInputClass, 
    visibleErrorClass }: defaultFormConfig, formElement: HTMLFormElement) {
        this.formElement = formElement;
  }
  
private checkInputValid(input: HTMLInputElement): void {
    if (!input.validity.valid) {
      const errorElement!: HTMLElement = document.querySelector(`.${inputSelector.id}-error`);
      input.classList.add(errorInputClass);
      errorElement.textContent = input.validationMessage;
      errorElement.classList.add(visibleErrorClass);}

      else {
        const errorElement!: HTMLElement = document.querySelector(`.${inputSelector.id}-error`);
        input.classList.remove(errorInputClass);
        errorElement.classList.remove(visibleErrorClass);
        errorElement.textContent = '';
      }
}

private toggleButtonState(): void {
    if (this.formElement.checkValidity()) {
      this.buttonElement.disabled = false;
      this.buttonElement.classList.remove(disabledButtonClass);
    } else {
      this.buttonElement.disabled = true;
      this.buttonElement.classList.add(disabledButtonClass);
    }
  }

  private setEventListeners(): void {
    this.inputList.forEach((input) => {
      input.addEventListener('input', () => {});
  })
}

  enableValidation(){
    this.inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this.checkInputValid(input);
        this.toggleButtonState();
      });
    });
  }

  resetValidation() {
    this.inputList.forEach((input) => {
      input.classList.remove(errorInputClass);
    });
  }

}