const openPopupButtonEl = document.querySelector('#open-popup-button');
const closePopupButtonEl = document.querySelector('#close-popup-button');
const editPopupEl = document.querySelector('#edit-popup');
const pageTitleEl = document.querySelector('.profile__title');
const nameInputEl = document.querySelector('#name-input');
const editFormEl = document.querySelector('#edit-form');
const inputSubTitleEl= document.querySelector('#input-subtitle');
const profileSubTitleEl = document.querySelector('.profile__subtitle'); 


// открытие попапа по нажатию 
openPopupButtonEl.addEventListener('click', function () {
  openPopup(editPopupEl);
  nameInputEl.value = pageTitleEl.textContent;
  inputSubTitleEl.value = profileSubTitleEl.textContent;
});

closePopupButtonEl.addEventListener('click', function () {
  closePopup(editPopupEl);
});


// отправка названий на сайт

editFormEl.addEventListener('submit', function (event) {
  event.preventDefault();

  pageTitleEl.textContent = nameInputEl.value;
  profileSubTitleEl.textContent = inputSubTitleEl.value;

  closePopup(editPopupEl);
});

function openPopup(popupEl) {
  popupEl.classList.add('popup_is-opened');
}

function closePopup(popupEl) {
  popupEl.classList.remove('popup_is-opened');
}


// попапы добавления карточек

const openAddPopupBtn= document.querySelector('#add-popup-button');
const closeAddPopupBtn= document.querySelector('#close-popup-add');
const addPopupEl = document.querySelector('#add-popup');
const addForm= document.querySelector('#add-form');


openAddPopupBtn.addEventListener('click', function () {
  nameInputEl.value = pageTitleEl.textContent;
  inputSubTitleEl.value = profileSubTitleEl.textContent;
openPopup(addPopupEl);
});

closeAddPopupBtn.addEventListener('click', function () {
closePopup(addPopupEl);
});
