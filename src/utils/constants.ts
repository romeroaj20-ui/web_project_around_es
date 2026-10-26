import type { CardData } from "../components/Card.js";
import type { CardFormData } from "../components/Card.js";

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

  export const initialCards: CardFormData[] = [
    {
      name: "Valle de Yosemite",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
    },
    {
      name: "Parque Nacional de la Vanoise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
    },
    {
      name: "Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
    },
    {
      name: "Montañas Calvas",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
    },
    {
      name: "Lago Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    },
  ];

