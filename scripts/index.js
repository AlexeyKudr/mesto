import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { validationSettings, initialCards } from "./constants.js";

const openPopupButtonEl = document.querySelector("#open-popup-button");
const closePopupButtonEl = document.querySelector("#close-popup-button");
const editPopupEl = document.querySelector("#edit-popup");
const pageTitleEl = document.querySelector(".profile__title");
const nameInputEl = document.querySelector("#name-input");
const editFormEl = document.querySelector("#edit-form");
const inputSubTitleEl = document.querySelector("#input-subtitle");
const profileSubTitleEl = document.querySelector(".profile__subtitle");
const cardsEl = document.querySelector(".cards");
/** @type {HTMLFormElement}  */
const addFormEl = document.querySelector(".popup__add-form");
const addInputTit = document.querySelector("#card-input-title");
const addInputSub = document.querySelector("#place-input-subtitle");
export const popupImg = document.querySelector("#popup-photo");
const closePopupPhoto = document.querySelector("#close-popup-photo");


const createCard = (item) => {
    const card = new Card(item, ".card-template"); 
    return card.generateCard(); 
}
initialCards.forEach(item => {cardsEl.prepend(createCard(item))});

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


openAddPopupBtn.addEventListener("click", function () {
    openPopup(addPopupEl);
});

closeAddPopupBtn.addEventListener("click", function () {
    closePopup(addPopupEl);
});


closePopupPhoto.addEventListener("click", function () {
    closePopup(popupImg);
});


// валидация
const editFormValid = new FormValidator (editFormEl, validationSettings)
editFormValid.enableValidation()
const addFormValid = new FormValidator (addFormEl, validationSettings)
addFormValid.enableValidation()


// Логика создание карты после открытого попапа добавления карты, с ссылкой на картинку и заголовком
addFormEl.addEventListener("submit", function (event) {
    // по клику и интеру отправляем сохранение от попапа добавления места
    event.preventDefault(); // по умолчанию никуда не отправлять
    const newCard = new Card({ name: addInputTit.value, link: addInputSub.value }, "#mesto-card-template");
    const cardElement = newCard.generateCard();
    cardsEl.prepend(cardElement);
    addFormEl.reset();
    addFormValid.disableSubmitButton()
    closePopup(addPopupEl);
});

// esc закрытие
function closeByEscape(evt) {
    if (evt.key === "Escape") {
        const openedPopup = document.querySelector(".popup_is-opened");
        closePopup(openedPopup);
    }
}

const closeByOverlay = function (event) {
    if (event.currentTarget === event.target) {
        closePopup(event.target);
    }
};


addPopupEl.addEventListener("mousedown", closeByOverlay);
popupImg.addEventListener("mousedown", closeByOverlay);
editPopupEl.addEventListener("mousedown", closeByOverlay);


