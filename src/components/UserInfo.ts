interface UserInfoSelectors {
      nameSelector: string;
     jobSelector: string;
    }

interface UserData {
      name: string;
      description: string;
    }

    export class UserInfo {
    private nameElement: HTMLElement;
    private descriptionElement: HTMLElement;

    constructor({ nameSelector, jobSelector }: UserInfoSelectors) {
    this.nameElement = document.querySelector(nameSelector) as HTMLElement;
    this.descriptionElement = document.querySelector(jobSelector) as HTMLElement;
  }


    getUserInfo() {
        return {
            name: this.nameElement.textContent ?? "",
      description: this.descriptionElement.textContent ?? "",
    };
  }

    setUserInfo({ name, description }: UserData): void {
        this.nameElement.textContent = name;
        this.descriptionElement.textContent = description;
    }
}