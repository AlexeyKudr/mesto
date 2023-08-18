const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const openPopupButtonEl = document.querySelector('#open-popup-button');
const closePopupButtonEl = document.querySelector('#close-popup-button');
const editPopupEl = document.querySelector('#edit-popup');
const pageTitleEl = document.querySelector('.profile__title');
const nameInputEl = document.querySelector('#name-input');
const editFormEl = document.querySelector('#edit-form');
const inputSubTitleEl= document.querySelector('#input-subtitle');
const profileSubTitleEl = document.querySelector('.profile__subtitle'); 


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

function openPopup(popupEl) {
  popupEl.classList.add("popup_is-opened");
  document.addEventListener('keydown', closeByEscape);
}

function closePopup(popupEl) {
  popupEl.classList.remove("popup_is-opened");
  document.removeEventListener('keydown', closeByEscape); 
}


// попапы добавления карточек

const openAddPopupBtn= document.querySelector('#add-popup-button');
const closeAddPopupBtn= document.querySelector('#close-popup-add');
const addPopupEl = document.querySelector('#add-popup');
const addForm= document.querySelector('#add-form');


openAddPopupBtn.addEventListener("click", function () {
  openPopup(addPopupEl);
});

closeAddPopupBtn.addEventListener("click", function () {
  closePopup(addPopupEl);
});

const templateEl = document.querySelector("#mesto-card-template");
const templateContent = templateEl.content;
const cardEl = templateContent.querySelector(".card");
const cardsEl = document.querySelector(".cards");
/** @type {HTMLFormElement}  */
const addFormEl = document.querySelector(".popup__add-form");
const addInputTit = document.querySelector("#card-input-title");
const addInputSub = document.querySelector("#place-input-subtitle");
const popupImg = document.querySelector('#popup-photo');

//карты

initialCards.forEach(function (item) { // проходимся по карточке
  const newPlace = createPlace(item); // созданный образ становится элементом
  cardsEl.prepend(newPlace); // потом карта встает в начало
});


function createPlace(item) {  //создаем элементы карты
  const newPlace = cardEl.cloneNode(true); // клонирование карты, в переменную newPlace
  const cardText = newPlace.querySelector(".card__title"); // заголовок на карточке
  cardText.textContent = item.name;
  const cardImage = newPlace.querySelector(".card__image");
  cardImage.src = item.link;
  cardImage.alt = item.name;
  const likeEl = newPlace.querySelector(".card__like");
  const popupImage = document.querySelector(".popup__image-full");
  const popupCaption = document.querySelector(".popup__name-photo");

  likeEl.addEventListener("click", function (event) {
      // добавил слушатель на клик для лайка(меняется цвет)
      event.target.classList.toggle("card__like_active");
  });

  const deleteCardBtn = newPlace.querySelector(".card__delete"); // кнопка удаления карточек
  deleteCardBtn.addEventListener("click", function (event) {
      newPlace.remove(); // cards. сам div где лежат карты
  });

  cardImage.addEventListener("click", function () {
      popupImage.src = item.link;
      popupCaption.textContent = item.name;
      popupImage.alt = item.name;
      openPopup(popupImg);
  });

  closePopup(popupImg);

  return newPlace;
}


const closePopupPhoto = document.querySelector('#close-popup-photo');
closePopupPhoto.addEventListener('click', function () {
  closePopup(popupImg);
});

// Логика создание карты после открытого попапа добавления карты, с ссылкой на картинку и заголовком
addFormEl.addEventListener("submit", function (event) {  // по клику и интеру отправляем сохранение от попапа добавления места
  event.preventDefault(); // по умолчанию никуда не отправлять

  const form = event.target;
  const formData = new FormData(form);
  const values = Object.fromEntries(formData);
  const inputUrl = values["input-add-subtitle"];
  const inputName = values["input-add-title"];
  const newPlace = createPlace({ name: inputName, link: inputUrl });
  cardsEl.prepend(newPlace);
  form.reset();
  event.submitter.classList.add('popup__button_disabled')
  event.submitter.disabled = true;
  
  closePopup(addPopupEl);
});


// esc закрытие
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
  closePopup(openedPopup);
  }
}

const overlayClose= function (event) {
  if(event.currentTarget === event.target) {
    closePopup(event.target)
  }
}

addPopupEl.addEventListener('mousedown', overlayClose);
popupImg.addEventListener('mousedown', overlayClose);
editPopupEl.addEventListener('mousedown', overlayClose);