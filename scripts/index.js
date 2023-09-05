import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const enableValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input_error-message'
};

const formList = document.querySelectorAll('.popup__form')
formList.forEach((formEl) => {
  const formValidator = new FormValidator (formEl, enableValidation)
  formValidator.enableValidation()
});

const initialCards = [
    {
        name: "Архыз",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
        name: "Челябинская область",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
        name: "Иваново",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
        name: "Камчатка",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
        name: "Холмогорский район",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
        name: "Байкал",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    },
];

const openPopupButtonEl = document.querySelector("#open-popup-button");
const closePopupButtonEl = document.querySelector("#close-popup-button");
const editPopupEl = document.querySelector("#edit-popup");
const pageTitleEl = document.querySelector(".profile__title");
const nameInputEl = document.querySelector("#name-input");
const editFormEl = document.querySelector("#edit-form");
const inputSubTitleEl = document.querySelector("#input-subtitle");
const profileSubTitleEl = document.querySelector(".profile__subtitle");

initialCards.forEach((item) => {
  // проходимся по карточке
  const card = new Card(item, ".card-template");
  const cardElement = card._generateCard();
  document.querySelector(".cards").prepend(cardElement); // потом карта встает в начало
});

// открытие попапа по нажатию
openPopupButtonEl.addEventListener("click", function () {
    openPopup(editPopupEl);
    nameInputEl.value = pageTitleEl.textContent;
    inputSubTitleEl.value = profileSubTitleEl.textContent;
});

closePopupButtonEl.addEventListener("click", function () {
    closePopup(editPopupEl);
});


// отправка названий на сайт
editFormEl.addEventListener("submit", function (event) {
    event.preventDefault();

    pageTitleEl.textContent = nameInputEl.value;
    profileSubTitleEl.textContent = inputSubTitleEl.value;

    closePopup(editPopupEl);
});

export function openPopup(popupEl) {
    popupEl.classList.add("popup_is-opened");
    document.addEventListener("keydown", closeByEscape);
}

function closePopup(popupEl) {
    popupEl.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", closeByEscape);
}

// попапы добавления карточек

const openAddPopupBtn = document.querySelector("#add-popup-button");
const closeAddPopupBtn = document.querySelector("#close-popup-add");
const addPopupEl = document.querySelector("#add-popup");
const addForm = document.querySelector("#add-form");

openAddPopupBtn.addEventListener("click", function () {
    openPopup(addPopupEl);
});

closeAddPopupBtn.addEventListener("click", function () {
    closePopup(addPopupEl);
});

const cardsEl = document.querySelector(".cards");
/** @type {HTMLFormElement}  */
const addFormEl = document.querySelector(".popup__add-form");
const addInputTit = document.querySelector("#card-input-title");
const addInputSub = document.querySelector("#place-input-subtitle");
export const popupImg = document.querySelector("#popup-photo");
const closePopupPhoto = document.querySelector("#close-popup-photo");
closePopupPhoto.addEventListener("click", function () {
    closePopup(popupImg);
});

// Логика создание карты после открытого попапа добавления карты, с ссылкой на картинку и заголовком
addFormEl.addEventListener("submit", function (event) {
    // по клику и интеру отправляем сохранение от попапа добавления места
    event.preventDefault(); // по умолчанию никуда не отправлять
    const newCard = new Card({ name: addInputTit.value, link: addInputSub.value }, "#mesto-card-template");
    const cardElement = newCard._generateCard();
    cardsEl.prepend(cardElement);
    addFormEl.reset();
    event.submitter.classList.add("popup__button_disabled");
    event.submitter.disabled = true;

    closePopup(addPopupEl);
});

// esc закрытие
function closeByEscape(evt) {
    if (evt.key === "Escape") {
        const openedPopup = document.querySelector(".popup_is-opened");
        closePopup(openedPopup);
    }
}

const overlayClose = function (event) {
    if (event.currentTarget === event.target) {
        closePopup(event.target);
    }
};

addPopupEl.addEventListener("mousedown", overlayClose);
popupImg.addEventListener("mousedown", overlayClose);
editPopupEl.addEventListener("mousedown", overlayClose);
