 export interface UserInfoSelectors {
    nameSelector: string;
    jobSelector: string;
    avatarSelector: string;
    }

export  interface UserData {
      name: string;
      about: string;
      avatar?: string;
    }

    export class UserInfo {
    private nameElement: HTMLElement;
    private aboutElement: HTMLElement;
    private avatarElement: HTMLImageElement;

    constructor({ nameSelector, jobSelector, avatarSelector }: UserInfoSelectors) {
    this.nameElement = document.querySelector(nameSelector) as HTMLElement;
    this.aboutElement = document.querySelector(jobSelector) as HTMLElement;
    this.avatarElement = document.querySelector(avatarSelector) as HTMLImageElement;
  }


    getUserInfo() {
        return {
            name: this.nameElement.textContent ?? "",
      description: this.aboutElement.textContent ?? "",
    };
  }

    setUserInfo({ name, about, avatar }: UserData): void {
        this.nameElement.textContent = name;
        this.aboutElement.textContent = about;
        if (avatar) this.setAvatar(avatar);
    }

    setAvatar(avatarUrl: string): void {
    this.avatarElement.src = avatarUrl;
  }    
}