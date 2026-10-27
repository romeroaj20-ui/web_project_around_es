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
  private data: CardData;

  private element!: HTMLElement;
  private selector: string;
  private handleCardClick: (name: string, link: string) => void;
  private handleLikeClick: (card: CardData) => Promise<void>;
  private handleDeleteClick: (card: CardData) => Promise<void>;

  constructor(
    data: CardData,
    selector: string,

    handlers: {
      handleCardClick: (name: string, link: string) => void;
      handleLikeClick: (card: CardData) => Promise<void>;
      handleDeleteClick: (card: CardData) => Promise<void>;
    },
  ) {
    this.data = data;

    this.selector = selector;
    this.handleCardClick = handlers.handleCardClick;
    this.handleLikeClick = handlers.handleLikeClick;
    this.handleDeleteClick = handlers.handleDeleteClick;
  }

  protected getTemplate(): HTMLElement {
    const cardTemplate = document.querySelector(
      this.selector,
    ) as HTMLTemplateElement;

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

    cardImage.src = this.data.link;
    cardImage.alt = this.data.name;
    cardTitle.textContent = this.data.name;

    this.setEventListeners();

    return this.element;
  }

  private setEventListeners(): void {
    const cardImage = this.element.querySelector(
      ".card__image",
    ) as HTMLImageElement;
    cardImage.addEventListener("click", () => {
      this.handleCardClick(this.data.name, this.data.link);
    });
    const likeButton = this.element.querySelector(
      ".card__like-button",
    ) as HTMLButtonElement;
    likeButton.addEventListener("click", async () => {
      await this.handleLikeClick(this.data);
      likeButton.classList.toggle("card__like-button_is-active");
    });

    const deleteButton = this.element.querySelector(
      ".card__delete-button",
    ) as HTMLButtonElement;
    deleteButton.addEventListener("click", async () => {
      await this.handleDeleteClick(this.data);
      deleteButton.closest(".card")?.remove();
    });
  }
}
