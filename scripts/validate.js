
const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input_error-message'
}
// показывать ошибку
const showInputError = (form, inputElement, validationSettings) => {
  const errorElement = form.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(validationSettings.inputErrorClass);
  errorElement.classList.add(validationSettings.errorClass);
}


  // прятать ошибку
const hideInputError = (form, inputElement, validationSettings) => {
  const errorElement = form.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(validationSettings.inputErrorClass);
  errorElement.classList.remove(validationSettings.errorClass);
}

  // валидность инпутов, если валидна то прятать ошибку, иначе показывать ошибку
const checkValidateInput = (form, inputElement, validationSettings) => {
  const errorElement = form.querySelector(`#${inputElement.id}-error`);
  if (!inputElement.validity.valid) {
    errorElement.textContent=inputElement.validationMessage;
    showInputError(form, inputElement, validationSettings)
  } else {
    errorElement.textContent=inputElement.validationMessage;
    hideInputError(form, inputElement, validationSettings)
  }
}


// валидность инпута из всех инпутов
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

  // состояние кнопки
const toggleButtonState = (inputList, buttonElement, validationSettings) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validationSettings.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(validationSettings.inactiveButtonClass);
    buttonElement.disabled = false;
  }
}

//  проверка формы и кнопки?
const setEventListeners = (form, validationSettings) => {
  const inputList = Array.from(form.querySelectorAll(validationSettings.inputSelector));
  const submitButton = form.querySelector(validationSettings.submitButtonSelector);
  toggleButtonState(inputList, submitButton, validationSettings);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkValidateInput(form, inputElement, validationSettings);
      toggleButtonState(inputList, submitButton, validationSettings);
    });
  });
};

// функциz enableValidation, которая найдёт и переберёт все формы на странице
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(validationSettings.formSelector));
  formList.forEach((form) => {
    setEventListeners(form, validationSettings);
  });
}

 // запускает функцию валидации
enableValidation (validationSettings);