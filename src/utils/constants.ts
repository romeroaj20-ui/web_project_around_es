export interface defaultFormConfig {
  inputSelector: string;
  submitButtonSelector: string;
  disabledButtonClass?: string;
  errorInputClass?: string;
  VisibleErrorClass?: string;
}

const defaultFormConfig: defaultFormConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  disabledButtonClass: ".popup__button_disabled",
  errorInputClass: ".popup__input_type_error",
  VisibleErrorClass: ".popup__error_visible"
};
