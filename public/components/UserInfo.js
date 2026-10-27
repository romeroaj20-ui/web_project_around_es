export class UserInfo {
    nameElement;
    descriptionElement;
    avatarElement;
    constructor({ nameSelector, jobSelector, avatarSelector }) {
        this.nameElement = document.querySelector(nameSelector);
        this.descriptionElement = document.querySelector(jobSelector);
        this.avatarElement = document.querySelector(avatarSelector);
    }
    getUserInfo() {
        return {
            name: this.nameElement.textContent ?? "",
            description: this.descriptionElement.textContent ?? "",
        };
    }
    setUserInfo({ name, description, avatar }) {
        this.nameElement.textContent = name;
        this.descriptionElement.textContent = description;
        if (avatar)
            this.setAvatar(avatar);
    }
    setAvatar(avatarUrl) {
        this.avatarElement.src = avatarUrl;
    }
}
