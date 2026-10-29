import { UserInfo } from "./components/UserInfo.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
import { PopupWithConfirmation } from "./components/PopupWithConfirmation.js";
import { Card } from "./components/Card.js";
import { Section } from "./components/Section.js";
import { FormValidator } from "./components/FormValidator.js";
import { defaultFormConfig } from "./utils/constants.js";
import type { CardData } from "./components/Card.js";
import { Api } from "./components/Api.js";

const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1/",
  headers: {
    authorization: "c5a41762-9c64-4f77-939c-b998ccc0c795",
    "Content-Type": "application/json",
  },
});

const imagePopup = new PopupWithImage("#image-popup");
imagePopup.setEventListeners();

const confirmationPopup = new PopupWithConfirmation("#confirmation-popup", () => {});
confirmationPopup.setEventListeners();

const createCard = (cardData: CardData): HTMLElement => {
  const card = new Card(cardData, "#card-template", {
    handleCardClick: (name, link) => {
      imagePopup.open({ name, link, isLiked: false });
    },
    handleLikeClick: async (data) => {
      data.isLiked ? api.deleteLikeCard(data._id!) : api.likeCard(data._id!);
    },
    handleDeleteClick: async (data) => {
      confirmationPopup.setSubmitAction(async () => {
        await api.deleteCard(data._id!);
        card.removeCard();
      });
      confirmationPopup.open();
    },
  });
  return card.generateCard();
};

const cardsSection = new Section<CardData>(
  {
    items: [],
    renderer: (cardData) => {
      cardsSection.addItem(createCard(cardData));
    },
  },
  ".cards__list",
);

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
  avatarSelector: ".profile__image",
});

// const deletePopup = new PopupWithConfirmation("#delete-popup", () => {});
// deletePopup.setEventListeners();

// // al hacer clic en la papelera:
// deletePopup.setSubmitAction(async () => {
//   await api.deleteCard(Card.getId());
//   Card.removeCard();
// });
// deletePopup.open();

const initApp = async () => {
  try {
    const [userData, cards] = await Promise.all([
      api.getUserInfo(),
      api.getInitialCards(),
    ]);
    cardsSection.renderItems(cards);
    userInfo.setUserInfo({
      name: userData.name,
      about: userData.about,
      avatar: userData.avatar,
    });
  } catch (err) {
    console.error("Fallo al cargar datos iniciales:", err);
  }
};
initApp();

const avatarPopup = new PopupWithForm("#avatar-popup", async (inputValues) => {
  const avatarUrl = inputValues["avatar"]!.trim();
  const updatedUser = await api.updateProfileAvatar(avatarUrl);
  userInfo.setAvatar(updatedUser.avatar);
});
avatarPopup.setEventListeners();

document.querySelector(".profile__edit")!.addEventListener("click", () => {
  avatarPopup.open();
  validators["avatar-form"]!.resetValidation();
});

const editProfilePopup = new PopupWithForm(
  "#edit-popup",
  async (inputValues) => {
    const data = {
      name: inputValues["name"]!,
      about: inputValues["description"]!,
    };
    const UpdateUser = await api.updateUserInfo(data);
    userInfo.setUserInfo({
      name: UpdateUser.name,
      about: UpdateUser.about,
    });
    editProfilePopup.close();
  },
);

editProfilePopup.setEventListeners();

const newCardPopup = new PopupWithForm(
  "#new-card-popup",
  async (inputValues) => {
    const newCard = await api.addNewCard({
      name: inputValues["place-name"]!,
      link: inputValues["link"]!,
      isLiked: false,
    });
    cardsSection.addItem(createCard(newCard));
    newCardPopup.close();
  },
);
newCardPopup.setEventListeners();

document
  .querySelector(".profile__edit-button")!
  .addEventListener("click", () => {
    const { name, description } = userInfo.getUserInfo();
    editProfilePopup.open({ name, description });
    validators["edit-profile-form"]!.resetValidation();
  });

document
  .querySelector(".profile__add-button")!
  .addEventListener("click", () => {
    newCardPopup.open();
    validators["new-card-form"]!.resetValidation();
  });

const validators: Record<string, FormValidator> = {};
document
  .querySelectorAll<HTMLFormElement>(".popup__form")
  .forEach((formElement) => {
    const validator = new FormValidator(defaultFormConfig, formElement);
    validator.enableValidation();
    validators[formElement.id] = validator;
  });
