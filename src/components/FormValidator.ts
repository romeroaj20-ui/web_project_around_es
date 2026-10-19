import { inputSelector, type defaultFormConfig } from '../utils/constants';

export class FormValidator { 
  private formElement: HTMLFormElement;
  private inputElement: HTMLInputElement;
  private submitButtonElement: HTMLButtonElement;
  private disabledButtonClass: string;
  private errorInputClass: string;
  private visibleErrorClass: string;
  private inputList: NodeListOf<HTMLInputElement>;
    
  constructor({ inputSelector, 
    submitButtonSelector, 
    disabledButtonClass, 
    errorInputClass, 
    visibleErrorClass }: defaultFormConfig, formElement: HTMLFormElement) {
        this.formElement = formElement;
        this.inputElement = document.querySelector(inputSelector) as HTMLInputElement;
        this.submitButtonElement = document.querySelector(submitButtonSelector) as HTMLButtonElement;
        this.disabledButtonClass = disabledButtonClass;
        this.errorInputClass = errorInputClass;
        this.visibleErrorClass = visibleErrorClass;
        this.inputList = this.formElement.querySelectorAll(inputSelector);
  }
  
private checkInputValid(input: HTMLInputElement): void {
    if (!input.validity.valid) {
      const errorElement: HTMLElement = document.querySelector(`.${this.inputElement.id}-error`) as HTMLElement;
      input.classList.add(this.errorInputClass);
      errorElement.textContent = input.validationMessage;
      errorElement.classList.add(this.visibleErrorClass);}

      else {
        const errorElement: HTMLElement = document.querySelector(`.${this.inputElement.id}-error`) as HTMLElement;
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
      input.classList.remove(this.errorInputClass);
      
    });
  }

}