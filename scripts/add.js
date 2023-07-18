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

  const templateEl= document.querySelector('#mesto-card-template');
  const templateContent= templateEl.content;
  const cardEl= templateContent.querySelector('.card');
  const cardsEl= document.querySelector('.cards');
  /** @type {HTMLFormElement}  */
  const addFormEl= document.querySelector('.popup__add-form');
  const addInputTit= document.querySelector('#card-input-title');
  const addInputSub= document.querySelector('#place-input-subtitle');
  const likeEl= document.querySelector('.card__like');



//карты
  initialCards.forEach(function(item) {  // проходимся по карточке
    const newPlace= createPlace(item);  // созданный образ становится элементом
    cardsEl.prepend(newPlace);  // потом карта встает в начало
  });

function createPlace(item) { //создаем элементы карты
  const newPlace= cardEl.cloneNode(true);  // клонирование карты, в переменную newPlace
  const cardText= newPlace.querySelector('.card__title'); // заголовок на карточке
  cardText.textContent = item.name;
  const cardImage= newPlace.querySelector('.card__image');
  cardImage.src = item.link;
  cardImage.alt = item.name;
  const likeEl= newPlace.querySelector('.card__like');
  const popupImage= document.querySelector('.popup__image-full');
  const popupCaption= document.querySelector('.popup__title_image');
  const PopupImg = document.querySelector('#popup-photo'); 

  likeEl.addEventListener('click', function(event) {  // добавил слушатель на клик для лайка(меняется цвет)
    event.target.classList.toggle('card__like_active');
  });

  const deleteCardBtn = newPlace.querySelector('.card__delete');  // кнопка удаления карточек
  deleteCardBtn.addEventListener('click', function(event) {
    cardsEl.removeChild(newPlace);     // cards. сам div где лежат карты
  });

  cardImage.addEventListener('click', function() {
    popupImage.src= item.link;
    popupCaption.textContent= item.name;
    openPopup(PopupImg);
    console.log(PopupImg)
  });

  const closePopupPhoto = document.querySelector('#close-popup-photo');
  closePopupPhoto.addEventListener('click', function () {
    closePopup(PopupImg);
  });
  
  //добавить слушатели
  return newPlace;
};

// Логика создание карты после открытого попапа добавления карты, с ссылкой на картинку и заголовком
addFormEl.addEventListener('submit', function(event) {  // по клику и интеру отправляем сохранение от попапа адд
  event.preventDefault();  // по умолчанию никуда не отправлять
  
  const form= event.target;
  const formData= new FormData(form);
  const values= Object.fromEntries(formData);

  const placeImage=values['input-add-subtitle'];
  const placeName=values['input-add-title'];
  const newPlace= createPlace({name: placeName, link: placeImage});
  cardsEl.prepend(newPlace);
  form.reset();
  closePopup(addPopupEl);
});