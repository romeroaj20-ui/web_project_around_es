interface CardData {
    name: string;
    link: HTMLImageElement;
}

export abstract class Card {
    private name: string;
    private link: HTMLImageElement;
    private templateSelector: HTMLFormElement;

    constructor(
        { name, link }: CardData,
        templateSelector: HTMLTemplateElement,
        handleCardClick: (name: string, link: HTMLImageElement) => void
    ) {
        this.name = name;
        this.link = link;
        this.templateSelector = templateSelector;
    }

  public getTemplate(): HTMLElement {
    const cardTemplate = document.querySelector(
      this.templateSelector,
    ) as HTMLFormElement;

    const cardElement = cardTemplate.content
      .querySelector(".card")!
      .cloneNode(true) as HTMLElement;

    return cardElement;
  }

   generateCard(): HTMLElement {
    this.link = this.getTemplate();
    this.setEventListeners();

    const cardImage = this.element.querySelector(
      ".card__image",
    ) as HTMLImageElement;
    const cardTitle = this.element.querySelector(".card__title") as HTMLElement;

    cardImage.src = this.image;
    cardImage.alt = this.title;
    cardTitle.textContent = this.title;

    return this.element;
  }
 
 
  protected handleOpenPopup = (): void => {
    const cardImage = this.element.querySelector(
      ".card__image",     ) as HTMLImageElement;
    popupImage.src = cardImage.src;     popupElement.classList.add("popup_is-opened");   };

  protected handleClosePopup = (): void => {
   popupImage.src = "";
    popupElement.classList.remove("popup_is-opened");   };

  protected setEventListeners(): void {
    this.element.addEventListener("click", this.handleOpenPopup);
    popupCloseButton.addEventListener("click", this.handleClosePopup);
  }
}
