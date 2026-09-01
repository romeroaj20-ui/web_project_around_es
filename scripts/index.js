let initialCards = [
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

const editProfileBtn = document.querySelector(".profile__edit-button");
const editProfilePopup = document.querySelector("#edit-popup");
const closeEditProfileBtn = editProfilePopup.querySelector(".popup__close");
const formElement = document.querySelector("#edit-profile-form");
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const nameInput = formElement.querySelector(".popup__input_type_name");
const descriptionInput = formElement.querySelector(
  ".popup__input_type_description",
);
const formCardElement = document.querySelector("#new-card-popup");
const createCardBtn = document.querySelector(".profile__add-button");
const cardNameInput = formCardElement.querySelector(
  ".popup__input_type_card-name",
);
const cardLinkInput = formCardElement.querySelector(".popup__input_type_url");
const closeCardBtn = formCardElement.querySelector(".popup__close");
const imagesPopup = document.querySelector("#image-popup");
const imagePopupImage = imagesPopup.querySelector(".popup__image");
const imagePopupCaption = imagesPopup.querySelector(".popup__caption");
const imageCloseBtn = imagesPopup.querySelector(".popup__close");

function openModal(popup) {
  popup.classList.add("popup_is-opened");
}

function closeModal(popup) {
  popup.classList.remove("popup_is-opened");
}

function fillProfileForm() {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
}

function handleOpenEditModal() {
  fillProfileForm();
  openModal(editProfilePopup);
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closeModal(editProfilePopup);
}

function getCardElement(
  name = "sin título",
  link = "./images/placeholder.jpg",
) {
  const cardElement = document
    .querySelector("#card-template")
    .content.querySelector(".card")
    .cloneNode(true);

  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;

  const likeButton = cardElement.querySelector(".card__like-button");
  likeButton.addEventListener("click", (event) => {
    event.target.classList.toggle("card__like-button_is-active");
  });

  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", (event) => {
    event.target.closest(".card").remove();
  });

  cardImage.addEventListener("click", () => {
    imagePopupImage.src = link;
    imagePopupImage.alt = name;
    imagePopupCaption.textContent = name;
    openModal(imagesPopup);
  });

  return cardElement;
}

function renderCard({ name, link }, cardsContainer) {
  console.log(cardsContainer);
  const cardsContainerElement = document.querySelector(cardsContainer);
  cardsContainerElement.prepend(getCardElement(name, link));
}

function handleCardFormSubmit(event) {
  event.preventDefault();
  const name = cardNameInput.value;
  const link = cardLinkInput.value;
  renderCard({ name, link }, ".cards__list");
  formCardElement.reset();
  closeModal(formCardElement);
}

initialCards.forEach((card) => {
  renderCard({ name: card.name, link: card.link }, ".cards__list");
});
editProfileBtn.addEventListener("click", handleOpenEditModal);
closeEditProfileBtn.addEventListener("click", () =>
  closeModal(editProfilePopup),
);
formElement.addEventListener("submit", handleProfileFormSubmit);
formCardElement.addEventListener("submit", handleCardFormSubmit);
closeCardBtn.addEventListener("click", () => closeModal(formCardElement));
createCardBtn.addEventListener("click", () => openModal(formCardElement));
imageCloseBtn.addEventListener("click", () => closeModal(imagesPopup));
