import type { defaultFormConfig } from '../utils/constants';

class FormValidator { 
  private checkInputValid: HTMLInputElement;
  private submitButtonEstate: HTMLButtonElement;
  private formElement: HTMLFormElement;
  private inputEvents: HTMLInputElement[];
  private buttonElement: HTMLButtonElement;
    
  constructor({ inputSelector, 
    submitButtonSelector, 
    disabledButtonClass, 
    errorInputClass, 
    VisibleErrorClass }: defaultFormConfig, formElement: HTMLFormElement) {
        this.checkInputValid = this.checkInputValid;
        this.submitButtonEstate = this.submitButtonEstate;
        this.formElement = formElement;
        this.inputEvents = Array.from(this.formElement.querySelectorAll(inputSelector));
        this.buttonElement = this.formElement.querySelector(submitButtonSelector);
  }
  
  enableValidation(){

    }
    
  resetValidation() {

    }  

}