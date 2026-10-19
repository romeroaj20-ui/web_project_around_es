import { UserInfo } from "./components/UserInfo.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
import { Card } from "./components/Card.js";
import { Section } from "./components/Section.js";
import { FormValidator } from "./components/FormValidator.js";
import { initialCards } from "./utils/constants.js";

initialCards.forEach((data) => {
  const card = new Card(
    { name: data.name, link: data.link },
    "#card-template",
    handlePreviewPicture
  );
  const cardElement = card.generateCard();
  document.body.append(cardElement);
});

const editFormModalWindow = new PopupWithForm("#edit-popup", (inputValues) => {
  userInfo.setUserInfo(inputValues.name, inputValues.link);
});

editFormModalWindow.setEventListeners();

const cardFormModalWindow = new PopupWithForm(
  "#new-card-popup",
  (inputValues) => {
    renderCard(
      { name: inputValues.name, link: inputValues.link },
      cardsWrap
    );
    cardFormModalWindow.reset();
    cardFormModalWindow.close();
  },
);

cardFormModalWindow.setEventListeners();

// const openCardFormButton = document.querySelector(".profile__add-button");
// const cardNameInput = cardFormModalWindow.querySelector("#place-name-input");
// const cardLinkInput = cardFormModalWindow.querySelector("#link-input");
const imageModalWindow = new PopupWithImage("#image-popup");
//const imageElement = imageModalWindow.querySelector(".popup__image");
//const imageCaption = imageModalWindow.querySelector(".popup__caption");
const forms = document.querySelectorAll(".popup__form");
forms.forEach((form) => {
  const formValidator = new FormValidator(
    {
      inputSelector: ".popup__input",
      submitButtonSelector: ".popup__button",
      disabledButtonClass: "popup__button_disabled",
      errorInputClass: "popup__input_type_error",
      visibleErrorClass: "popup__error_visible",
    },
    form,
  );
  formValidator.enableValidation();
});

const userInfo = new UserInfo(name, description);
