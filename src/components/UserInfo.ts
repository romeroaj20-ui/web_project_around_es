 export interface UserInfoSelectors {
      nameSelector: string;
     jobSelector: string;
     avatarSelector: string;
    }

export  interface UserData {
      name: string;
      description: string;
      avatar?: string;
    }

    export class UserInfo {
    private nameElement: HTMLElement;
    private descriptionElement: HTMLElement;
    private avatarElement: HTMLImageElement;

    constructor({ nameSelector, jobSelector, avatarSelector }: UserInfoSelectors) {
    this.nameElement = document.querySelector(nameSelector) as HTMLElement;
    this.descriptionElement = document.querySelector(jobSelector) as HTMLElement;
    this.avatarElement = document.querySelector(avatarSelector) as HTMLImageElement;
  }


    getUserInfo() {
        return {
            name: this.nameElement.textContent ?? "",
      description: this.descriptionElement.textContent ?? "",
    };
  }

    setUserInfo({ name, description, avatar }: UserData): void {
        this.nameElement.textContent = name;
        this.descriptionElement.textContent = description;
        if (avatar) this.setAvatar(avatar);
    }

    setAvatar(avatarUrl: string): void {
    this.avatarElement.src = avatarUrl;
  }    
}