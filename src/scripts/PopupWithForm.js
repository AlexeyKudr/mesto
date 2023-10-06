import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({popupSelector, submitForm}) {
        super(popupSelector);
        this._submitForm= submitForm;
        this._form= this._popupSelector.querySelector('.popup__form');
        this._inputList= this._form.querySelectorAll('.popup__input');
        this._submit= this._form.querySelector('.popup__button');
    }

    _getInputValues() {
        this._valuesInput= {};
        this._inputList.forEach(input=> {
            this._valuesInput[input.name] = input.value;
        });
        return this._valuesInput;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', event => {
        event.preventDefault();
        this._submitForm(this._getInputValues());
        super.close()
    } 
    )
}
    close() {
        super.close()
        this._form.reset();
    }

    save() {
        this._submit.textContent = 'Сохранение...';
      }

    return() {
        this._submit.textContent = 'Сохранить';
      }


}
