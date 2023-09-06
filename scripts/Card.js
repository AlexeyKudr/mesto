import { openPopup } from "./index.js";
import { popupImg } from "./index.js";

export class Card {
    constructor(data, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(true);

        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        // Добавим данные
        this._cardImage = this._element.querySelector(".card__image");
        this._cardTitle = this._element.querySelector(".card__title");
        this._cardLike = this._element.querySelector(".card__like");
        this._cardDelete = this._element.querySelector(".card__delete");
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._cardTitle.textContent = this._name;
        this._setEventListeners();
        // Вернём элемент наружу
        return this._element;
    }

    _setEventListeners() {
        this._cardDelete.addEventListener("click", () => {
            this._onDeleteCard();
        });

        this._cardLike.addEventListener("click", () => {
            this._onLikeClick();
        });

        this._cardImage.addEventListener("click", () => {
            this._handleImage();
        });
    }

    _onDeleteCard() {
        this._element.remove();
    }

    _onLikeClick() {
        this._cardLike.classList.toggle("card__like_active");
    }

    _handleImage() {
        const fullPopupImg = popupImg.querySelector('.popup__image-full');
        const fullPopupNamePhoto = popupImg.querySelector('.popup__name-photo');
        openPopup(popupImg);
        fullPopupNamePhoto.textContent = this._name;
        fullPopupImg.src = this._link;
        fullPopupImg.alt = this._link;
    }
}

