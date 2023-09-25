export default class UserInfo {
    constructor({profileName, profileDescription}) {
        this._profileName= profileName;
        this._profileDescription= profileDescription;
    }

    getUserInfo() {
        return {
            profileName: this._profileName.textContent,
            profileDescription: this._profileDescription.textContent,
        }

    }

    setUserInfo(profileName, profileDescription) {
        this._profileName.textContent = profileName;
        this._profileDescription.textContent = profileDescription;
    }

}