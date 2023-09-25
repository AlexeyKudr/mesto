import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
      super(popupSelector);
      this._title= this._popupSelector.querySelector('.popup__name-photo');
      this._image= this._popupSelector.querySelector('.popup__image-full');
    }
  
    open(name, link) {
      this._title.textContent = name;
      this._image.src = link;
      this._image.alt = name;
      super.open();
    }
  }