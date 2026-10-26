import type { CardData } from "./Card.js";
import type { UserData } from "./UserInfo.js";

export class Api {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

private async handleResponse<T> (response: Response): Promise<T> {
    if (!response.ok) {
          return await response.json(); 
        } 
        throw new Error(`Error: ${response.status}`);
    } 

    public async getUserInfo(): Promise<UserData> {
        
        const response = await fetch(`${this.baseUrl}users/me`, {
          headers: {            
            "authorization": "c5a41762-9c64-4f77-939c-b998ccc0c795",
            "Content-Type": "application/json",
        },
    });
        return this.handleResponse<UserData>(response);
    }

    public async getInitialCards(): Promise<CardData[]> {
        const response = await fetch(`${this.baseUrl}cards/`, {
           headers: {
            "authorization": "c5a41762-9c64-4f77-939c-b998ccc0c795",
            "Content-Type": "application/json",
        },
        });
        return this.handleResponse<CardData[]>(response);
    }

public async updateUserInfo(userData: UserData): Promise<UserData> {
    const response = await fetch(`${this.baseUrl}users/me`, {
        method: "PATCH",
        headers: {
            "authorization": "c5a41762-9c64-4f77-939c-b998ccc0c795",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData)
    });
    return this.handleResponse<UserData>(response);
    }

public async addNewCard(cardData: CardData): Promise<CardData[]>{ 
    const response = await fetch(`${this.baseUrl}users/me`, {
        method: "POST",
        headers: {
            "authorization": "c5a41762-9c64-4f77-939c-b998ccc0c795",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cardData)
    });
    return this.handleResponse<CardData[]>(response);
}

public async deleteCard(cardData: CardData): Promise<CardData[]>{
    const response = await fetch(`${this.baseUrl}/cards/${cardData._id}`, {
         method: "DELETE",
        headers: {
            "authorization": "c5a41762-9c64-4f77-939c-b998ccc0c795",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cardData)
    });
    return this.handleResponse<CardData[]>(response);
}
    
public async LikeCard(cardData: CardData): Promise<CardData[]>{
    const response = await fetch(`${this.baseUrl}/cards/${cardData._id}/likes`, {
         method: "PUT",
        headers: {
            "authorization": "c5a41762-9c64-4f77-939c-b998ccc0c795",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cardData)
    });
    return this.handleResponse<CardData[]>(response);
}

public async deleteLikeCard(cardData: CardData): Promise<CardData[]>{
    const response = await fetch(`${this.baseUrl}/cards/${cardData._id}/likes`, {
         method: "DELETE",
        headers: {
            "authorization": "c5a41762-9c64-4f77-939c-b998ccc0c795",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cardData)
    });
    return this.handleResponse<CardData[]>(response);
}

public async updateProfileAvatar(cardData: CardData): Promise<CardData[]>{ 
    const response = await fetch(`${this.baseUrl}users/me/avatar`, {
        method: "PATCH",
        headers: {
            "authorization": "c5a41762-9c64-4f77-939c-b998ccc0c795",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cardData)
    });
    return this.handleResponse<CardData[]>(response);
}

}