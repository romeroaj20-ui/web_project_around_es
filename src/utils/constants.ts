export interface FormConfig {
  inputSelector: string;
  submitButtonSelector: string;
  disabledButtonClass: string;
  errorInputClass: string;
  visibleErrorClass: string;
}

  export const defaultFormConfig: FormConfig = { 
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  disabledButtonClass: "popup__button_disabled",
  errorInputClass: "popup__input_type_error",
  visibleErrorClass: "popup__error_visible"
};

