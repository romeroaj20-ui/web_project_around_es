export class UserInfo {
    titleSelector;
    descriptionSelector;
    avatarSelector;
    constructor(titleSelector, descriptionSelector, avatarSelector) {
        this.titleSelector = titleSelector;
        this.descriptionSelector = descriptionSelector;
        this.avatarSelector = avatarSelector;
    }
    getUserInfo() {
        return {
            name: this.titleSelector.textContent,
            about: this.descriptionSelector.textContent,
        };
    }
    setUserInfo({ name, about }) {
        this.titleSelector.textContent = name;
        this.descriptionSelector.textContent = about;
    }
}
