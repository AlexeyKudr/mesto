import Card from "../scripts/Card.js";
import { FormValidator } from "../scripts/FormValidator.js";
import { validationSettings, pageTitleEl, nameInputEl, editFormEl, inputSubTitleEl, profileSubTitleEl, cardsEl, addFormEl, addInputTit, addInputSub, openAddPopupBtn, btnProfile, openBtnAvatar, avatarFormEl, avatar } from "../utils/constants.js";
import Section from "../scripts/Section.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import UserInfo from "../scripts/UserInfo.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import Api from "../scripts/Api.js";
import PopupWithConfirmation from "../scripts/PopupWithConfirmation.js";
import "./index.css";

// класс Card
const createCard = (data) => {
    const card = new Card(data, ".card-template", handleCardClick);
    return card.generateCard();
};

// класс Section
const cardsList = new Section(
    {
        renderer: (item) => {
            const cardElement = createCard(item, ".card-template", handleCardClick);
            cardsList.addItem(cardElement);
        },
    },
    ".cards"
);

// валидация
const editFormValid = new FormValidator(editFormEl, validationSettings);
editFormValid.enableValidation();
const addFormValid = new FormValidator(addFormEl, validationSettings);
addFormValid.enableValidation();
const avatarFormValid = new FormValidator( avatarFormEl, validationSettings);
avatarFormValid.enableValidation();

// открытие фото на весь экран класс PopupWithImage
const popupShowFullImage = new PopupWithImage(".popup_black");
popupShowFullImage.setEventListeners();
function handleCardClick(name, link) {
    popupShowFullImage.open(name, link);
}

// открытие Аватарки
const popupEditAvatar = new PopupWithForm({
    popupSelector: ".popup__avatar",
    submitForm: (data) => {
        api.changeAvatar(data)
          .then((data) => {
            avatar.src = data.avatar;
            popupEditAvatar.close();
          })
      }
});
  openBtnAvatar.addEventListener("click", () => {
    avatarFormValid.disableSubmitButton();
    popupEditAvatar.open();
});
popupEditAvatar.setEventListeners();

// класс UserInfo
const user = new UserInfo({
    profileName: pageTitleEl,
    profileDescription: profileSubTitleEl,
    avatar: avatar
});

const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-76',
    headers: {
      authorization: 'ec5cea19-08b8-48a2-8256-e2c1e9bb4820',
      'Content-Type': 'application/json'
    }
  });

api.getInitialCards()
.then(cardsArr => {
    cardsList.renderItems(cardsArr)
})
.catch(err => {
    console.error(err);
  });

api.getUserInfo()
.then(item => {
    user.setUserInfo(item);
})
.catch(err => {
    console.error(err);
  });



// форма редактирования профиля edit
const popupEditForm = new PopupWithForm({
    popupSelector: "#edit-popup",
    submitForm: (item) => {
        api.editUserInfo(item)
        .then((item) => {
          user.setUserInfo(item);
        })
        .catch(err => {
          console.error(err);
        });
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

// // форма создания карточек Add
// const popupAddForm = new PopupWithForm({
//     popupSelector: "#add-popup",
//     submitForm: (formData) => {
//         api.addNewCard(formData)
//         .then ((formData) => {
//             cardsList.addItem(createCard(formData));
//         popupAddForm.close();
//     })
//     .catch((err) => {
//         console.log(`Ошибка: ${err}`);
// })
//     }
// });

// openAddPopupBtn.addEventListener("click", () => {
//     addFormValid.disableSubmitButton();
//     popupAddForm.open();
// });
// popupAddForm.setEventListeners();




