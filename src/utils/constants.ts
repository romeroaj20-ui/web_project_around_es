import type { CardData } from "../components/Card.js";

export interface defaultFormConfig {
  inputSelector: HTMLInputElement;
  submitButtonSelector: HTMLButtonElement;
  disabledButtonClass?: HTMLButtonElement;
  errorInputClass?: HTMLInputElement;
  visibleErrorClass?: HTMLElement;
}

  export const inputSelector = document.querySelector(".popup__input") as HTMLInputElement;
  export const submitButtonSelector = document.querySelector(".popup__button") as HTMLButtonElement;
  export const disabledButtonClass = document.querySelector(".popup__button_disabled") as HTMLButtonElement;
  export const errorInputClass = document.querySelector(".popup__input_type_error") as HTMLInputElement;
  export const visibleErrorClass = document.querySelector(".popup__error_visible") as HTMLElement;

  export const initialCards: CardData[] = [
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

