import { Card } from "./scripts/Card.js";
import { FormValidator } from "./scripts/FormValidator.js";
import { validationSettings, initialCards, pageTitleEl, nameInputEl, editFormEl, inputSubTitleEl, profileSubTitleEl, cardsEl, addFormEl, addInputTit, addInputSub, openAddPopupBtn, btnProfile } from "./utils/constants.js";
import Section from "./scripts/Section.js";
import PopupWithImage from "./scripts/PopupWithImage.js";
import UserInfo from "./scripts/UserInfo.js";
import PopupWithForm from "./scripts/PopupWithForm.js";
import "./pages/index.css";

// класс Card
const createCard = (item) => {
    const card = new Card(item, ".card-template", handleCardClick);
    return card.generateCard();
};

// класс Section
const cardsList = new Section(
    {
        data: initialCards,
        renderer: (item) => {
            const cardElement = createCard(item, ".card-template", handleCardClick);
            cardsList.addItem(cardElement);
        },
    },
    ".cards"
);
cardsList.renderItems();

// валидация
const editFormValid = new FormValidator(editFormEl, validationSettings);
editFormValid.enableValidation();
const addFormValid = new FormValidator(addFormEl, validationSettings);
addFormValid.enableValidation();

// открытие фото на весь экран класс PopupWithImage
const popupShowFullImage = new PopupWithImage(".popup_black");
popupShowFullImage.setEventListeners();

function handleCardClick(name, link) {
    popupShowFullImage.open(name, link);
}

// открытие создания карточек
const popupAddForm = new PopupWithForm({
    popupSelector: "#add-popup",
    submitForm: (item) => {
        createCard(item, ".card-template", handleCardClick);
        cardsEl.prepend(createCard({ name: addInputTit.value, link: addInputSub.value }));
        addFormEl.reset();
        addFormValid.disableSubmitButton();
        popupAddForm.close();
    },
});
openAddPopupBtn.addEventListener("click", () => {
    addFormValid.disableSubmitButton();
    popupAddForm.open();
});
popupAddForm.setEventListeners();


// класс UserInfo
const user = new UserInfo({
    profileName: pageTitleEl,
    profileDescription: profileSubTitleEl,
});

const popupEditForm = new PopupWithForm({
    popupSelector: "#edit-popup",
    submitForm: (item) => {
        user.setUserInfo(item);
        popupEditForm.close();
    },
});

btnProfile.addEventListener("click", () => {
    const userData = user.getUserInfo();
    nameInputEl.value = userData.name;
    inputSubTitleEl.value = userData.about;
    popupEditForm.open();
});
popupEditForm.setEventListeners();



