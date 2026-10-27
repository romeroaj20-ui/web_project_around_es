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
        console.log(this.headers);
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
    async deleteCard(cardData) {
        const response = await fetch(`${this.baseUrl}cards/${cardData._id}`, {
            method: "DELETE",
            headers: this.headers,
            body: JSON.stringify({ name: cardData.name, link: cardData.link }),
        });
        return this.handleResponse(response);
    }
    async likeCard(cardData) {
        const response = await fetch(`${this.baseUrl}cards/${cardData._id}/likes`, {
            method: "PUT",
            headers: this.headers,
            body: JSON.stringify({ name: cardData.name, link: cardData.link }),
        });
        return this.handleResponse(response);
    }
    async deleteLikeCard(cardData) {
        const response = await fetch(`${this.baseUrl}cards/${cardData._id}/likes`, {
            method: "DELETE",
            headers: this.headers,
            body: JSON.stringify({ name: cardData.name, link: cardData.link }),
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
