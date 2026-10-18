import { setEventListeners, resetValidation } from "./validate.js";
import { UserInfo } from "./components/UserInfo.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
import { Card } from "./components/Card.js";
import { Section } from "./components/Section.js";
import { FormValidator } from "./components/FormValidator.js";
import { initialCards } from "./utils/constants.js";

initialCards.forEach((data) => {
  const card = new Card(
    data.name,
    data.link,
    "#card-template",
    handlePreviewPicture,
  );
  const cardElement = card.generateCard();
  document.body.append(cardElement);
});



const editFormModalWindow = new PopupWithForm("#edit-popup", (inputValues) => {
  userInfo.setUserInfo(inputValues[titleInput], inputValues[descriptionInput]);
});

editFormModalWindow.setEventListeners();

const cardFormModalWindow = new PopupWithForm(
  "#new-card-popup",
  (inputValues) => {
    renderCard(
      { name: inputValues[cardNameInput], link: inputValues[cardLinkInput] },
      cardsWrap,
    );
    cardFormElement.reset();
    cardFormModalWindow.close();
  },
);

cardFormModalWindow.setEventListeners();

const openCardFormButton = document.querySelector(".profile__add-button");
const cardNameInput = cardFormModalWindow.querySelector("#place-name-input");
const cardLinkInput = cardFormModalWindow.querySelector("#link-input");
const imageModalWindow = new PopupWithImage("#image-popup");
//const imageElement = imageModalWindow.querySelector(".popup__image");
//const imageCaption = imageModalWindow.querySelector(".popup__caption");
const forms = document.querySelectorAll(".popup__form");

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const popups = document.querySelectorAll(".popup");
const cardsWrap = document.querySelector(".cards__list");
const cardFormElement = cardFormModalWindow.querySelector(".popup__form");

const userInfo = new UserInfo(profileTitle, profileDescription);



const fillProfileForm = () => {
  const { title, description } = userInfo.getUserInfo();
  titleInput.value = title;
  descriptionInput.value = description;
};
const handleOpenEditModal = () => {
  fillProfileForm();
  editFormModalWindow.open();
};
const handleProfileFormSubmit = (event) => {
  event.preventDefault();
  userInfo.setUserInfo(titleInput.value, descriptionInput.value);
  editFormModalWindow.close();
};

const handleLikeIcon = (event) => {
  event.target.classList.toggle("card__like-button_is-active");
};

const handleDeleteCard = (event) => {
  event.target.closest(".card").remove();
};

const handlePreviewPicture = (data) => {
  imageElement.src = data.link;
  imageElement.alt = data.name;
  imageCaption.textContent = data.name;
  openModal(imageModalWindow);
};

const getCardElement = (data) => {
  const cardElement = cardTemplate.cloneNode(true);
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const cardImage = cardElement.querySelector(".card__image");

  cardImage.src = data.link;
  cardImage.alt = data.name;
  const cardTitle = cardElement.querySelector(".card__title");
  cardTitle.textContent = data.name;

  likeButton.addEventListener("click", handleLikeIcon);
  deleteButton.addEventListener("click", handleDeleteCard);

  cardImage.addEventListener("click", () => handlePreviewPicture(data));
  return cardElement;
};

const renderCard = (data, wrap) => {
  wrap.prepend(getCardElement(data));
};

const handleCardFormSubmit = (event) => {
  event.preventDefault();
  renderCard(
    { name: inputValues[cardNameInput], link: inputValues[cardLinkInput] },
    cardsWrap,
  );
  cardFormElement.reset();
  cardFormModalWindow.close();
};

const handlePopupClose = (event) => {
  if (
    event.target.classList.contains("popup") ||
    event.target.classList.contains("popup__close")
  ) {
    closeModal(event.currentTarget);
  }
};

editFormModalWindow.addEventListener("submit", handleProfileFormSubmit);
cardFormModalWindow.addEventListener("submit", handleCardFormSubmit);
openEditFormButton.addEventListener("click", handleOpenEditModal);
openCardFormButton.addEventListener("click", () =>
  openModal(cardFormModalWindow),
);
setEventListeners(forms);

popups.forEach((popup) => {
  popup.addEventListener("click", handlePopupClose);
});
