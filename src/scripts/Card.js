export default class Card {
    constructor({data, templateSelector, userId, handleCardClick, deleteIcon, handlePutLike, handleDeleteLike }) {
        this._name = data.name;
        this._link = data.link;
        this._cardId = data._id;
        this._likes = data.likes;
        this._userId = userId;
        this._templateSelector = templateSelector;
        this._handlePutLike = handlePutLike;
        this._handleDeleteLike = handleDeleteLike;
        this._handleCardClick = handleCardClick;
        this._deleteIcon= deleteIcon;
        this._cardOwnerId = data.owner._id;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(true);
        return cardElement;
    }

    _onDeleteCard() {
        this._element.remove();
        this._element= null;
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
        this._cardLikesList.textContent = this._likes.length;
        this._checkCardLiked()
        this._ownerCard();
        this._setEventListeners();
        // Вернём элемент наружу
        return this._element;
    }

    _checkCardLiked() {
    if (this._likes.some((user) => {
      return this._userId === user._id;
    })) 
    {
        this._cardLike.classList.add('card__like_actived');
    }
  }

  handleLikeCard(data) {
    this._likes = data.likes;
    this._cardLikesList.textContent = this._likes.length;
    this._cardLike.classList.toggle('card__like_actived');
  }

  _ownerCard() {
    if (this._userId !== this._cardOwnerId) {
        this._cardDelete.remove();
    }
  }

  _setEventListeners() {
    this._cardDelete.addEventListener("click", () => {
        this._deleteIcon(this._cardId);
    });

    this._cardLike.addEventListener('click', () => {
        if (this._cardLike.classList.contains('card__like_actived')) {
          this._handleDeleteLike(this._cardId);
        } else {
          this._handlePutLike(this._cardId);
        }
      })

    this._cardImage.addEventListener("click", () => {
        this._handleCardClick(this._name, this._link);
    });
}

}
