export class Api {
    baseUrl;
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    async handleResponse(response) {
        if (!response.ok) {
            return await response.json();
        }
        throw new Error(`Error: ${response.status}`);
    }
    async getUserInfo() {
        const response = await fetch(`${this.baseUrl}users/me`, {
            headers: {
                "authorization": "c5a41762-9c64-4f77-939c-b998ccc0c795",
                "Content-Type": "application/json",
            },
        });
        return this.handleResponse(response);
    }
    async getInitialCards() {
        const response = await fetch(`${this.baseUrl}cards/`, {
            headers: {
                "authorization": "c5a41762-9c64-4f77-939c-b998ccc0c795",
                "Content-Type": "application/json",
            },
        });
        return this.handleResponse(response);
    }
    async updateUserInfo(userData) {
        const response = await fetch(`${this.baseUrl}users/me`, {
            method: "PATCH",
            headers: {
                "authorization": "c5a41762-9c64-4f77-939c-b998ccc0c795",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData)
        });
        return this.handleResponse(response);
    }
    async addNewCard(cardData) {
        const response = await fetch(`${this.baseUrl}users/me`, {
            method: "POST",
            headers: {
                "authorization": "c5a41762-9c64-4f77-939c-b998ccc0c795",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cardData)
        });
        return this.handleResponse(response);
    }
    async deleteCard(cardData) {
        const response = await fetch(`${this.baseUrl}/cards/${cardData._id}`, {
            method: "DELETE",
            headers: {
                "authorization": "c5a41762-9c64-4f77-939c-b998ccc0c795",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cardData)
        });
        return this.handleResponse(response);
    }
    async LikeCard(cardData) {
        const response = await fetch(`${this.baseUrl}/cards/${cardData._id}/likes`, {
            method: "PUT",
            headers: {
                "authorization": "c5a41762-9c64-4f77-939c-b998ccc0c795",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cardData)
        });
        return this.handleResponse(response);
    }
    async deleteLikeCard(cardData) {
        const response = await fetch(`${this.baseUrl}/cards/${cardData._id}/likes`, {
            method: "DELETE",
            headers: {
                "authorization": "c5a41762-9c64-4f77-939c-b998ccc0c795",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cardData)
        });
        return this.handleResponse(response);
    }
    async updateProfileAvatar(avatar) {
        const response = await fetch(`${this.baseUrl}users/me/avatar`, {
            method: "PATCH",
            headers: {
                "authorization": "c5a41762-9c64-4f77-939c-b998ccc0c795",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(avatar)
        });
        return this.handleResponse(response);
    }
}
