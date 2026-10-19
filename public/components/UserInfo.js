export class UserInfo {
    nameElement;
    descriptionElement;
    constructor({ nameSelector, jobSelector }) {
        this.nameElement = document.querySelector(nameSelector);
        this.descriptionElement = document.querySelector(jobSelector);
    }
    getUserInfo() {
        return {
            name: this.nameElement.textContent ?? "",
            description: this.descriptionElement.textContent ?? "",
        };
    }
    setUserInfo({ name, description }) {
        this.nameElement.textContent = name;
        this.descriptionElement.textContent = description;
    }
}
