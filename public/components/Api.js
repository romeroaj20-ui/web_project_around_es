export class Api {
    baseUrl;
    headers;
    constructor({ baseUrl, headers }) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }
    async handleResponse(response) {
        if (response.ok) {
            return await response.json();
        }
        throw new Error(`Error: ${response.status}`);
    }
    async getUserInfo() {
        const response = await fetch(`${this.baseUrl}users/me`, {
            headers: this.headers,
        });
        return this.handleResponse(response);
    }
    async getInitialCards() {
        const response = await fetch(`${this.baseUrl}cards/`, {
            headers: this.headers,
        });
        return this.handleResponse(response);
    }
    async updateUserInfo(userData) {
        const response = await fetch(`${this.baseUrl}users/me`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(userData),
        });
        return this.handleResponse(response);
    }
    async addNewCard(cardData) {
        const response = await fetch(`${this.baseUrl}cards/`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify({ name: cardData.name, link: cardData.link }),
        });
        return this.handleResponse(response);
    }
    async deleteCard(cardId) {
        const response = await fetch(`${this.baseUrl}cards/${cardId}`, {
            method: "DELETE",
            headers: this.headers,
        });
        await this.handleResponse(response);
    }
    async likeCard(cardId) {
        const response = await fetch(`${this.baseUrl}cards/${cardId}/likes`, {
            method: "PUT",
            headers: this.headers,
        });
        return this.handleResponse(response);
    }
    async deleteLikeCard(cardId) {
        const response = await fetch(`${this.baseUrl}cards/${cardId}/likes`, {
            method: "DELETE",
            headers: this.headers,
        });
        return this.handleResponse(response);
    }
    async updateProfileAvatar(avatar) {
        const response = await fetch(`${this.baseUrl}users/me/avatar`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify({ avatar }),
        });
        return this.handleResponse(response);
    }
}
