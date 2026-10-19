export class UserInfo {
    private titleSelector: HTMLElement;
    private descriptionSelector: HTMLElement;

    constructor(titleSelector: HTMLElement, descriptionSelector: HTMLElement) 
    { this.titleSelector = titleSelector;
      this.descriptionSelector = descriptionSelector;
    }   

    getUserInfo() {
        return {
            name: this.titleSelector.textContent,
            description: this.descriptionSelector.textContent,
        };
    }

    setUserInfo({ name, description }: { name: string; description: string }) {
        this.titleSelector.textContent = name;
        this.descriptionSelector.textContent = description;
    }
}