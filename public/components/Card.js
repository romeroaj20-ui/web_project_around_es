export class Card {
    data;
    element;
    selector;
    handleCardClick;
    handleLikeClick;
    handleDeleteClick;
    constructor(data, selector, handlers) {
        this.data = data;
        this.selector = selector;
        this.handleCardClick = handlers.handleCardClick;
        this.handleLikeClick = handlers.handleLikeClick;
        this.handleDeleteClick = handlers.handleDeleteClick;
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
        cardImage.src = this.data.link;
        cardImage.alt = this.data.name;
        cardTitle.textContent = this.data.name;
        this.setEventListeners();
        return this.element;
    }
    setEventListeners() {
        const cardImage = this.element.querySelector(".card__image");
        cardImage.addEventListener("click", () => {
            this.handleCardClick(this.data.name, this.data.link);
        });
        const likeButton = this.element.querySelector(".card__like-button");
        likeButton.addEventListener("click", async () => {
            await this.handleLikeClick(this.data);
            likeButton.classList.toggle("card__like-button_is-active");
        });
        const deleteButton = this.element.querySelector(".card__delete-button");
        deleteButton.addEventListener("click", async () => {
            await this.handleDeleteClick(this.data);
            deleteButton.closest(".card")?.remove();
        });
    }
}
