import Card from "../scripts/Card.js";
import { FormValidator } from "../scripts/FormValidator.js";
import { validationSettings, pageTitleEl, nameInputEl, editFormEl, submitBtn, inputSubTitleEl, profileSubTitleEl, cardsEl, addFormEl, addInputTit, addInputSub, openAddPopupBtn, btnProfile, openBtnAvatar, avatarFormEl, avatar } from "../utils/constants.js";
import Section from "../scripts/Section.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import UserInfo from "../scripts/UserInfo.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import Api from "../scripts/Api.js";
import PopupWithConfirmation from "../scripts/PopupWithConfirmation.js";
import "./index.css";
let userId;

// валидация
const editFormValid = new FormValidator(editFormEl, validationSettings);
editFormValid.enableValidation();
const addFormValid = new FormValidator(addFormEl, validationSettings);
addFormValid.enableValidation();
const avatarFormValid = new FormValidator( avatarFormEl, validationSettings);
avatarFormValid.enableValidation();

// класс Section
const cardsList = new Section(
  {
      renderer: (item) => {
          cardsList.addItemAppend(createCard(item));
      },
  },".cards"
);


// форма создания карточек Add
const popupAddForm = new PopupWithForm({
popupSelector: "#add-popup",
submitForm: (formData) => {
  popupAddForm.save();
    api.addNewCard(formData)
    .then((formData) => {
    cardsList.addItemPrepend(createCard(formData));
    popupAddForm.close();
})
.catch(err => {
  console.error(err);
})
.finally(() => {
  popupAddForm.return();
});
}
});

openAddPopupBtn.addEventListener("click", () => {
addFormValid.disableSubmitButton();
popupAddForm.open();
});
popupAddForm.setEventListeners();

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
      popupEditAvatar.save()
        api.changeAvatar(data)
          .then((data) => {
            avatar.src = data.avatar;
            popupEditAvatar.close();
          })
          .catch(err => {
            console.error(err);
          })
          .finally(() => {
            popupEditAvatar.return()
          });
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

// экземпляр общий Api
const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-76',
    headers: {
      authorization: 'ec5cea19-08b8-48a2-8256-e2c1e9bb4820',
      'Content-Type': 'application/json'
    }
  });

  // загрузка карточек и редактирования профиля
  Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([cardsArr, userData]) => {
    user.setUserInfo(userData);
    userId = userData._id;
    cardsList.renderItems(cardsArr);
  })
  .catch(err => {
    console.error(err);
  });

// форма редактирования профиля edit
const popupEditForm = new PopupWithForm({
    popupSelector: "#edit-popup",
    submitForm: (item) => {
      popupEditForm.save();
        api.editUserInfo(item)
        .then((item) => {
          user.setUserInfo(item);
        })
        .catch(err => {
          console.error(err);
        })
        .finally(() => {
          popupEditForm.return();
        });
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


const deletePopup = new PopupWithConfirmation({
  popupSelector: '#popup-delete'})
  deletePopup.setEventListeners()

// создание карточек
const createCard = (data) => {
  const card = new Card ({ 
    data: data,
    templateSelector: ".card-template", 
    userId: userId,
    handleCardClick,
    handlePutLike: (cardId) => {
      api.putLike(cardId)
        .then((item) => {
          card.handleLikeCard(item);
        })
        .catch(err => {
          console.error(err);
        });
    },
    handleDeleteLike: (cardId) => {
      api.deleteLike(cardId)
        .then((item) => {
          card.handleLikeCard(item);
        })
        .catch(err => {
          console.error(err);
        });
    },
    deleteIcon: (cardId) => {
      deletePopup.open();
      deletePopup.callbackDelete(() => {
        api.deleteCard(cardId)
          .then(() => {
            deletePopup.close();
            card._onDeleteCard();
          })
          .catch(err => {
            console.error(err);
          });
      });
    },
  });
  
  return card.generateCard();







};

