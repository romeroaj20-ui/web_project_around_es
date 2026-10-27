export class UserInfo {
    nameElement;
    aboutElement;
    avatarElement;
    constructor({ nameSelector, jobSelector, avatarSelector }) {
        this.nameElement = document.querySelector(nameSelector);
        this.aboutElement = document.querySelector(jobSelector);
        this.avatarElement = document.querySelector(avatarSelector);
    }
    getUserInfo() {
        return {
            name: this.nameElement.textContent ?? "",
            description: this.aboutElement.textContent ?? "",
        };
    }
    setUserInfo({ name, about, avatar }) {
        this.nameElement.textContent = name;
        this.aboutElement.textContent = about;
        if (avatar)
            this.setAvatar(avatar);
    }
    setAvatar(avatarUrl) {
        this.avatarElement.src = avatarUrl;
    }
}
