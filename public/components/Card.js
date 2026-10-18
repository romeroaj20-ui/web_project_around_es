export class Card {
    name;
    link;
    element;
    selector;
    constructor({ name, link }, selector, handleCardClick) {
        this.name = name;
        this.link = link;
        this.selector = selector;
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
        this.setEventListeners();
        const cardImage = this.element.querySelector(".card__image");
        const cardTitle = this.element.querySelector(".card__title");
        cardImage.src = this.link;
        cardImage.alt = this.name;
        cardTitle.textContent = this.name;
        return this.element;
    }
    handleCardClick = () => {
        const cardImage = this.element.querySelector(".card__image");
        cardImage.classList.toggle(".popup__image");
    };
    setEventListeners() {
        const cardImage = this.element.querySelector(".card__image");
        cardImage.addEventListener("click", this.handleCardClick);
    }
}
//   protected handleOpenPopup = (): void => {
//     const cardImage = this.element.querySelector(
//       ".card__image",     ) as HTMLImageElement;
//     popupImage.src = cardImage.src;     popupElement.classList.add("popup_is-opened");   };
//   protected handleClosePopup = (): void => {
//    popupImage.src = "";
//     popupElement.classList.remove("popup_is-opened");   };
//   protected setEventListeners(): void {
//     this.element.addEventListener("click", this.handleOpenPopup);
//     popupCloseButton.addEventListener("click", this.handleClosePopup);
//   }
// }
