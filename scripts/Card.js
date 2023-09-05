import { openPopup } from "./index.js";
import { popupImg } from "./index.js";

export class Card {
    constructor(data, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const cardElement = document.querySelector("#mesto-card-template").content.querySelector(".card").cloneNode(true);

        return cardElement;
    }

    _generateCard() {
        this._element = this._getTemplate();
        // Добавим данные
        this._CardImage = this._element.querySelector(".card__image");
        this._CardTitle = this._element.querySelector(".card__title");
        this._CardLike = this._element.querySelector(".card__like");
        this._CardDelete = this._element.querySelector(".card__delete");
        this._CardImage.src = this._link;
        this._CardImage.alt = this._name;
        this._CardTitle.textContent = this._name;
        this._setEventListeners();
        // Вернём элемент наружу
        return this._element;
    }

    _setEventListeners() {
        this._CardDelete.addEventListener("click", () => {
            this._deleteCard();
        });

        this._CardLike.addEventListener("click", () => {
            this._LikeClick();
        });

        this._CardImage.addEventListener("click", () => {
            this._handleImage();
        });
    }

    _deleteCard() {
        this._element.remove();
    }

    _LikeClick() {
        this._CardLike.classList.toggle("card__like_active");
    }

    _CardFullImage() {
        this._element.classList.toggle("popup_is-opened");
    }

    _handleImage() {
        const bigPopupImage = popupImg.querySelector(".popup__image-full");
        const bigPopupTitle = popupImg.querySelector(".popup__name-photo");
        openPopup(popupImg);
        bigPopupTitle.textContent = this._CardTitle.textContent;
        bigPopupImage.src = this._CardImage.src;
        bigPopupImage.alt = this._CardImage.alt;
    }
}


