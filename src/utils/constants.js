export const initialCards = [
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

export const validationSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input_error-message'
  };

export const pageTitleEl = document.querySelector(".profile__title");
export const nameInputEl = document.querySelector("#name-input");
export const editFormEl = document.querySelector("#edit-form");
export const inputSubTitleEl = document.querySelector("#input-subtitle");
export const profileSubTitleEl = document.querySelector(".profile__subtitle");
export const cardsEl = document.querySelector(".cards");
/** @type {HTMLFormElement}  */
export const addFormEl = document.querySelector(".popup__add-form");
export const addInputTit = document.querySelector("#card-input-title");
export const addInputSub = document.querySelector("#place-input-subtitle");
export const openAddPopupBtn = document.querySelector("#add-popup-button");
export const btnProfile = document.querySelector(".profile__edit-button")
