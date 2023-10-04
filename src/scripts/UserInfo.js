export default class UserInfo {
    constructor({profileName, profileDescription, avatar}) {
        this._profileName= profileName;
        this._profileDescription= profileDescription;
        this._avatar= avatar;
    }
    getUserInfo() {
        return {
            name: this._profileName.textContent,
            about: this._profileDescription.textContent,
            avatar: this._avatar.src
        }
    }

    setUserInfo(item) {
        this._profileName.textContent = item.name;
        this._profileDescription.textContent = item.about;
        this._avatar.src = item.avatar;
    }
}
