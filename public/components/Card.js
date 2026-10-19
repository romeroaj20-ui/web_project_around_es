export class Card {
    name;
    link;
    element;
    selector;
    handleCardClick;
    constructor({ name, link }, selector, handleCardClick) {
        this.name = name;
        this.link = link;
        this.selector = selector;
        this.handleCardClick = handleCardClick;
    }
    getTemplate() {
        const cardTemplate = document.querySelector(this.selector);
        const cardElement = cardTemplate.content
            .querySelector(".card")
            .cloneNode(true);
        return cardElement;
    }
    generateCard() {
        this.element = this.getTemplate();
        const cardImage = this.element.querySelector(".card__image");
        const cardTitle = this.element.querySelector(".card__title");
        cardImage.src = this.link;
        cardImage.alt = this.name;
        cardTitle.textContent = this.name;
        this.setEventListeners();
        return this.element;
    }
    handleLikeClick = () => {
        const likeButton = this.element.querySelector(".card__like-button");
        likeButton.classList.toggle("card__like-button_is-active");
    };
    handleDeleteClick = () => {
        const deleteButton = this.element.querySelector(".card__delete-button");
        deleteButton.closest(".card")?.remove();
    };
    setEventListeners() {
        const cardImage = this.element.querySelector(".card__image");
        cardImage.addEventListener("click", () => this.handleCardClick(this.name, this.link));
        const likeButton = this.element.querySelector(".card__like-button");
        likeButton.addEventListener("click", this.handleLikeClick);
        const deleteButton = this.element.querySelector(".card__delete-button");
        deleteButton.addEventListener("click", this.handleDeleteClick);
    }
}
