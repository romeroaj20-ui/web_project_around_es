import type { CardData } from "./Card.js";
import type { UserData } from "./UserInfo.js";
import type { CardFormData } from "./Card.js";

interface ApiOptions {
  baseUrl: string;
  headers: Record<string, string>;
}

export class Api {
  private baseUrl: string;
  private headers: Record<string, string>;

  constructor({ baseUrl, headers }: ApiOptions) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (response.ok) {
      return await response.json();
    }
    throw new Error(`Error: ${response.status}`);
  }

  public async getUserInfo(): Promise<UserData> {
    console.log(this.headers);
    const response = await fetch(`${this.baseUrl}users/me`, {
      headers: this.headers,
    });
    return this.handleResponse<UserData>(response);
  }

  public async getInitialCards(): Promise<CardData[]> {
    const response = await fetch(`${this.baseUrl}cards/`, {
      headers: this.headers,
    });
    return this.handleResponse<CardData[]>(response);
  }

  public async updateUserInfo(userData: UserData): Promise<UserData> {
    const response = await fetch(`${this.baseUrl}users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(userData),
    });
    return this.handleResponse<UserData>(response);
  }

  public async addNewCard(cardData: CardData): Promise<CardData> {
    const response = await fetch(`${this.baseUrl}cards/`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({ name: cardData.name, link: cardData.link }),
    });
    return this.handleResponse<CardData>(response);
  }

  public async deleteCard(cardData: CardData): Promise<CardData> {
    const response = await fetch(`${this.baseUrl}cards/${cardData._id}`, {
      method: "DELETE",
      headers: this.headers,
      body: JSON.stringify({ name: cardData.name, link: cardData.link }),
    });
    return this.handleResponse<CardData>(response);
  }

  public async likeCard(cardData: CardData): Promise<CardData> {
    const response = await fetch(`${this.baseUrl}cards/${cardData._id}/likes`, {
      method: "PUT",
      headers: this.headers,
      body: JSON.stringify({ name: cardData.name, link: cardData.link }),
    });
    return this.handleResponse<CardData>(response);
  }

  public async deleteLikeCard(cardData: CardData): Promise<CardData> {
    const response = await fetch(`${this.baseUrl}cards/${cardData._id}/likes`, {
      method: "DELETE",
      headers: this.headers,
      body: JSON.stringify({ name: cardData.name, link: cardData.link }),
    });
    return this.handleResponse<CardData>(response);
  }

  public async updateProfileAvatar(
    avatar: string,
  ): Promise<{ avatar: string }> {
    const response = await fetch(`${this.baseUrl}users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({ avatar }),
    });
    return this.handleResponse<{ avatar: string }>(response);
  }
}
