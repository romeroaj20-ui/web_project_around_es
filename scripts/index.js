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
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const nameInput = formElement.querySelector(".popup__input_type_name");
const descriptionInput = formElement.querySelector(
  ".popup__input_type_description",
);
const formElement = document.querySelector(".popup__form");

function openModal() {
  editProfilePopup.classList.add("popup_is-opened");
}

function closeModal() {
  editProfilePopup.classList.remove("popup_is-opened");
}

function fillProfileForm() {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
}

function handleOpenEditModal() {
  fillProfileForm();
  openModal();
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closeModal();
}

initialCards.forEach((card) => {
  console.log(card.name);
});
editProfileBtn.addEventListener("click", handleOpenEditModal);
closeEditProfileBtn.addEventListener("click", closeModal);
formElement.addEventListener("submit", handleProfileFormSubmit);
