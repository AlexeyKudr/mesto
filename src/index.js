import { Card } from "./scripts/Card.js";
import { FormValidator } from "./scripts/FormValidator.js";
import { validationSettings, initialCards, pageTitleEl, nameInputEl, editFormEl, inputSubTitleEl, profileSubTitleEl, cardsEl, addFormEl, addInputTit, addInputSub, openAddPopupBtn, btnProfile} from "./utils/constants.js";
import Section from "./scripts/Section.js";
import PopupWithImage from "./scripts/PopupWithImage.js";
import UserInfo from "./scripts/UserInfo.js";
import PopupWithForm from "./scripts/PopupWithForm.js";



// класс Card
const createCard = (item) => {
    const card = new Card(item, ".card-template", handleCardClick); 
    return card.generateCard(); 
}

// класс Section
const cardsList = new Section(
    {
      data: initialCards,
      renderer: (item) => {
        const cardElement = createCard(item, ".card-template", handleCardClick);
        cardsList.addItem(cardElement);
      },
    },
    '.cards');
  cardsList.renderItems();

  // валидация
const editFormValid = new FormValidator (editFormEl, validationSettings)
editFormValid.enableValidation()
const addFormValid = new FormValidator (addFormEl, validationSettings)
addFormValid.enableValidation()

// открытие фото на весь экран класс PopupWithImage
  const popupShowFullImage = new PopupWithImage(".popup_black");
  popupShowFullImage.setEventListeners();
  
  function handleCardClick(name, link) {
    popupShowFullImage.open(name, link);
  }

 const userInfo = new UserInfo ({
    profileName: ".popup__input_type_title", 
    profileDescription: '.popup__input_type_subtitle'})

    const popupEditForm = new PopupWithForm( {
        popupSelector: '#edit-popup',
        formSubmitter: (item) => {
            userInfo.setUserInfo(item)
            popupEditForm.close();
          }
        });
        btnProfile.addEventListener("click", () => {
    popupEditForm.open();
  });
  popupEditForm.setEventListeners();

  function handleFormEdit(event) {
    event.preventDefault();
    userInfo.getUserInfo();
    pageTitleEl.textContent = nameInputEl.value;
    profileSubTitleEl.textContent = inputSubTitleEl.value;
    popupEditForm.close();
};
editFormEl.addEventListener('submit', handleFormEdit);



  // открытие создания карточек 
  const popupAddForm = new PopupWithForm( {
    popupSelector: '#add-popup',
    formSubmitter: (item) => {
      createCard(item, ".card-template", handleCardClick);
      popupAddForm.close();
      }
    });
    openAddPopupBtn.addEventListener("click", () => {
        addFormValid.disableSubmitButton();
        popupAddForm.open();
      });
      popupAddForm.setEventListeners();



      function handleFormAdd(event) {
        event.preventDefault();
        cardsEl.prepend(createCard({ name: addInputTit.value, link: addInputSub.value }));
        addFormEl.reset();
        addFormValid.disableSubmitButton()
        popupAddForm.close()
    };

addFormEl.addEventListener('submit', handleFormAdd);
