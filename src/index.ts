import { UserInfo } from "./components/UserInfo.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
import { Card } from "./components/Card.js";
import { Section } from "./components/Section.js";
import { FormValidator } from "./components/FormValidator.js";
import { initialCards, defaultFormConfig } from "./utils/constants.js";
import type { CardData } from "./components/Card.js";

const imagePopup = new PopupWithImage("#image-popup");
imagePopup.setEventListeners();

const createCard = (cardData: CardData): HTMLElement => {
  const card = new Card(cardData, "#card-template", (name, link) => {
    imagePopup.open({ name, link });
  });
  return card.generateCard();
};

const cardsSection = new Section<CardData>(
  {
    items: initialCards,
    renderer: (cardData) => cardsSection.addItem(createCard(cardData)),
  },
  ".cards__list",
);
cardsSection.renderItems();

const editProfilePopup = new PopupWithForm("#edit-popup", (inputValues) => {
  userInfo.setUserInfo({
    name: inputValues["name"]!,
    description: inputValues["description"]!,
  });
});

editProfilePopup.setEventListeners();

const newCardPopup = new PopupWithForm("#new-card-popup", (inputValues) => {
  cardsSection.addItem(
    createCard({ name: inputValues["place-name"]!, link: inputValues["link"]! }),
  );
});

newCardPopup.setEventListeners();

document.querySelector(".profile__edit-button")!.addEventListener("click", () => {
  const { name, description } = userInfo.getUserInfo();
  editProfilePopup.open({ name, description });
  validators["edit-profile-form"]!.resetValidation();
});

document.querySelector(".profile__add-button")!.addEventListener("click", () => {
  newCardPopup.open();
  validators["new-card-form"]!.resetValidation();
});

const validators: Record<string, FormValidator> = {};
document.querySelectorAll<HTMLFormElement>(".popup__form").forEach((formElement) => {
  const validator = new FormValidator(defaultFormConfig, formElement);
  validator.enableValidation();
  validators[formElement.id] = validator;
});

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
});