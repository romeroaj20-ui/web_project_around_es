export interface CardData {
    name: string;
    link: string;
}

export class Card {
    private name: string;
    private link: string;
    private element!: HTMLElement;
    private selector: string;

    constructor(
        { name, link }: CardData,
        selector: string,
        handleCardClick: (name: string, link: string) => void
    ) {
        this.name = name;
        this.link = link;
        this.selector = selector;
    }

  protected getTemplate(): HTMLElement {
    const cardTemplate = document.querySelector(this.selector) as HTMLTemplateElement;

    const cardElement = cardTemplate.content
      .querySelector(".card")!
      .cloneNode(true) as HTMLElement;

    return cardElement;
  }

   generateCard(): HTMLElement {
    this.element = this.getTemplate();
    this.setEventListeners();

    const cardImage = this.element.querySelector(
      ".card__image",
    ) as HTMLImageElement;
    const cardTitle = this.element.querySelector(".card__title") as HTMLElement;

    cardImage.src = this.link;
    cardImage.alt = this.name;
    cardTitle.textContent = this.name;

    return this.element;
  }
 
  protected handleCardClick = (): void => {
    const cardImage = this.element.querySelector(
      ".card__image",
    ) as HTMLImageElement;
    cardImage.classList.toggle(".popup__image");
  }

  setEventListeners(): void {
    const cardImage = this.element.querySelector(
      ".card__image",
    ) as HTMLImageElement;
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
