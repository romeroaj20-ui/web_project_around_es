export class UserInfo {
    private titleSelector: HTMLElement;
    private descriptionSelector: HTMLElement;
    private avatarSelector: HTMLImageElement;

    constructor(titleSelector: HTMLElement, descriptionSelector: HTMLElement, avatarSelector: HTMLImageElement) 
    { this.titleSelector = titleSelector;
      this.descriptionSelector = descriptionSelector;
      this.avatarSelector = avatarSelector;
    }   

    getUserInfo() {
        return {
            name: this.titleSelector.textContent,
            about: this.descriptionSelector.textContent,
        };
    }

    setUserInfo({ name, about }: { name: string; about: string }) {
        this.titleSelector.textContent = name;
        this.descriptionSelector.textContent = about;
    }
}