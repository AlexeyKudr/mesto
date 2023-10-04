export default class Card {
    constructor(data, templateSelector, handleCardClick, userId) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._userId= userId;
        this._cardId = data._id;
        this._likes = data.likes;
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
        this._cardLikesList= this._element.querySelector(".card__likes-counter");

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
            this._handleCardClick(this._name, this._link);
        });
    }

    _onDeleteCard() {
        this._element.remove();
        this._element= null;
    }

    _onLikeClick() {
        this._cardLike.classList.toggle("card__like_active");
    }

    _handleLikeCard(data) {
        this._likes = data.likes;
        this._likesNumber.textContent = this._likes.length;
        this._likeBtn.classList.toggle('element__like-btn_active');
      }

}


