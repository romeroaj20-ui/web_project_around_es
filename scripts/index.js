import { setEventListeners, resetValidation } from "./validate.js";

const initialCards = [
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

const openEditFormButton = document.querySelector(".profile__edit-button");
const editFormModalWindow = document.querySelector("#edit-popup");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const titleInput = editFormModalWindow.querySelector("#name-input");
const descriptionInput =
  editFormModalWindow.querySelector("#description-input");
const cardFormModalWindow = document.querySelector("#new-card-popup");
const openCardFormButton = document.querySelector(".profile__add-button");
const cardNameInput = cardFormModalWindow.querySelector("#place-name-input");
const cardLinkInput = cardFormModalWindow.querySelector("#link-input");
const imageModalWindow = document.querySelector("#image-popup");
const imageElement = imageModalWindow.querySelector(".popup__image");
const imageCaption = imageModalWindow.querySelector(".popup__caption");
const forms = document.querySelectorAll(".popup__form");

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const popups = document.querySelectorAll(".popup");
const cardsWrap = document.querySelector(".cards__list");
const cardFormElement = cardFormModalWindow.querySelector(".popup__form");

const openModal = (modal) => {
  modal.classList.add("popup_is-opened");
  document.addEventListener("keyup", handleEscUp);
};

const isEscEvent = (event, action) => {
  if (event.key === "Escape") {
    const activePopup = document.querySelector(".popup_is-opened");
    action(activePopup);
  }
};

const handleEscUp = (event) => {
  event.preventDefault();
  isEscEvent(event, closeModal);
};

const closeModal = (modal) => {
  modal.classList.remove("popup_is-opened");
  document.removeEventListener("keyup", handleEscUp);

  const formElement = modal.querySelector(".popup__form");
  if (formElement) {
    resetValidation(formElement);
    formElement.reset();
  }
};

const fillProfileForm = () => {
  titleInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
};

const handleOpenEditModal = () => {
  fillProfileForm();
  openModal(editFormModalWindow);
};

const handleProfileFormSubmit = (event) => {
  event.preventDefault();
  profileTitle.textContent = titleInput.value;
  profileDescription.textContent = descriptionInput.value;
  closeModal(editFormModalWindow);
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
    { name: cardNameInput.value, link: cardLinkInput.value },
    cardsWrap,
  );
  closeModal(cardFormModalWindow);
  cardFormElement.reset();
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

initialCards.forEach((data) => {
  renderCard(data, cardsWrap);
});
