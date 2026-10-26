export interface CardFormData {
       name: string;
       link: string;
     }

export interface CardData {
    name: string;
    link: string;
    _id?: string;
    isLiked: boolean;
    owner?: string;
    createdAt?: string;
}

export class Card {
    private name: string;
    private link: string;
    private element!: HTMLElement;
    private selector: string;
    private handleCardClick: (name: string, link: string) => void;

    constructor(
        { name, link }: CardData,
        selector: string,
        handleCardClick: (name: string, link: string) => void
    ) {
        this.name = name;
        this.link = link;
        this.selector = selector;
        this.handleCardClick = handleCardClick;
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
    
    const cardImage = this.element.querySelector(
      ".card__image",
    ) as HTMLImageElement;
    const cardTitle = this.element.querySelector(".card__title") as HTMLElement;

    cardImage.src = this.link;
    cardImage.alt = this.name;
    cardTitle.textContent = this.name;

    this.setEventListeners();
    
    return this.element;
  }
 
private handleLikeClick = (): void => {
    const likeButton = this.element.querySelector(
      ".card__like-button",
    ) as HTMLButtonElement;
    likeButton.classList.toggle("card__like-button_is-active");
  } 

private handleDeleteClick = (): void => {
    const deleteButton = this.element.querySelector(
      ".card__delete-button",
    ) as HTMLButtonElement;
    deleteButton.closest(".card")?.remove();
  }

  private setEventListeners(): void {
    const cardImage = this.element.querySelector(
      ".card__image",
    ) as HTMLImageElement;
    cardImage.addEventListener("click", async () => {
      //cambiar texto a buton a guardando
      await this.handleCardClick(this.name, this.link)
      //volver texto a boton normal 
    }) ;
    const likeButton = this.element.querySelector(
      ".card__like-button",
    ) as HTMLButtonElement;
    likeButton.addEventListener("click", this.handleLikeClick);
    const deleteButton = this.element.querySelector(
      ".card__delete-button",
    ) as HTMLButtonElement;
    deleteButton.addEventListener("click", this.handleDeleteClick);
  }
}
