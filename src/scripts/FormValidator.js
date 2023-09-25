export class FormValidator {
    constructor(formEl, validationSettings) {
        this._formSelector = validationSettings.formSelector;
        this._inputSelector = validationSettings.inputSelector;
        this._submitButtonSelector = validationSettings.submitButtonSelector;
        this._inactiveButtonClass = validationSettings.inactiveButtonClass;
        this._inputErrorClass = validationSettings.inputErrorClass;
        this._errorClass = validationSettings.errorClass;
        this._formEl = formEl;
        this._buttonElement = this._formEl.querySelector(this._submitButtonSelector);
        this._inputList = Array.from(this._formEl.querySelectorAll(this._inputSelector));
    }

    // показывать ошибку
    _showInputError(inputElement) {
        const errorElement = this._formEl.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.classList.add(this._errorClass);
    }

    // прятать ошибку
    _hideInputError(inputElement) {
        const errorElement = this._formEl.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
    }

    // валидность инпутов, если валидна то прятать ошибку, иначе показывать ошибку
    _checkValidateInput(inputElement) {
        const errorElement = this._formEl.querySelector(`#${inputElement.id}-error`);
        if (!inputElement.validity.valid) {
            errorElement.textContent = inputElement.validationMessage;
            this._showInputError(inputElement);
        } else {
            errorElement.textContent = inputElement.validationMessage;
            this._hideInputError(inputElement);
        }
    }

    // валидность инпута из всех инпутов
    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    // состояние кнопки
    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this.disableSubmitButton();
        } else {
            this.enableSubmitButton();
        }
    }

    disableSubmitButton() {
        this._buttonElement.setAttribute("disabled", "disabled");
        this._buttonElement.classList.add(this._inactiveButtonClass);
    }

    enableSubmitButton() {
        this._buttonElement.removeAttribute("disabled", "disabled");
        this._buttonElement.classList.remove(this._inactiveButtonClass);
    }

    //  проверка формы и кнопки
    _setEventListeners() {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                this._checkValidateInput(inputElement);
                this._toggleButtonState();
            });
        });
    }

    // функциz enableValidation, которая найдёт и переберёт все формы на странице
    enableValidation() {
        this._formEl.addEventListener("submit", (event) => {
            event.preventDefault();
        });
        this._setEventListeners();
    }
}


