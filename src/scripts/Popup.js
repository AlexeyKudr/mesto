export default class Popup {
    constructor(popupSelector) {
        this._popupSelector= document.querySelector(popupSelector);
        this._closeButton= this._popupSelector.querySelector('.popup__close-button');
        this._handleEscClose = this._handleEscClose.bind(this)
    }

    open() {
      this._popupSelector.classList.add('popup_is-opened');
      document.addEventListener('keydown', this._handleEscClose);
    }

    close(){
        this._popupSelector.classList.remove('popup_is-opened')
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
          this.close();
        };
}
    _handleOverlayClose(event) {
    if (event.target === this._popupSelector) {
      this.close()
    }
  }

  setEventListeners() {
    this._closeButton.addEventListener('click', () => {
      this.close();
    });
    
    this._popupSelector.addEventListener('mousedown', event => this._handleOverlayClose(event));
  }
} 