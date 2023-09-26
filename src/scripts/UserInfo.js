export default class UserInfo {
    constructor({profileName, profileDescription}) {
        this._profileName= profileName;
        this._profileDescription= profileDescription;
    }
    getUserInfo() {
        return {
            name: this._profileName.textContent,
            about: this._profileDescription.textContent,
        }
    }

    setUserInfo(item) {
        this._profileName.textContent = item.name;
        this._profileDescription.textContent = item.about;
    }
}
