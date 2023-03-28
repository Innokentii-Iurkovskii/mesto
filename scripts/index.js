const page = document.querySelector('.page');
// Имя профиля
const profileName = page.querySelector('.profile__name');
// Описание профиля
const profileDescription = page.querySelector('.profile__description');
// Кнопка редактирования имени и описания профиля
const profileEditButton = page.querySelector('.profile__edit-button');
// Все оверлеи попапы
const popups = page.querySelectorAll('.popup');
// Попап редактирования имени и описания профиля
const popupTypeEdit = page.querySelector('.popup_type_edit');
// Форма попапа редактирования имени и описания профиля
const popupFormEdit = popupTypeEdit.querySelector('.popup__form');
// Инпут имени в попапе редактирования профиля
const editPopupName = popupFormEdit.querySelector('.popup__input_type_name');
// Инпут описания в попапе редактирования профиля
const editPopupInfo = popupFormEdit.querySelector('.popup__input_type_description');
// Кнопка добавления места
const placeAddButton = page.querySelector('.profile__add-button');
// Попап добавления места
const popupTypeAdd = page.querySelector('.popup_type_add');
// Форма попапа добавления места
const popupFormAdd = popupTypeAdd.querySelector('.popup__form');
// Имя в попапе добавления места
const namePopupAdd = popupTypeAdd.querySelector('.popup__input_type_title');
// Путь картинки в попапе добавления места
const imageSrcPopupAdd = popupTypeAdd.querySelector('.popup__input_type_image-link');
// Кнопка сохранения попапа добавления места
const saveButtonPopupAdd = popupTypeAdd.querySelector('.popup__save-button');
// Список куда вставляются карточки мест
const gallery = page.querySelector('.photo-gallery__list');
// Попап фотографии карточки
const popupTypePhoto = page.querySelector('.popup_type_photo');
// Фотография в попапе карточки
const popupTypePhotoImage = page.querySelector('.popup__image');
// Подпись к фотографии в попапе карточки
const popupTypePhotoCaption = page.querySelector('.popup__image-caption');
// Кнопка закрытия попапа фотографии карточки
const closeButtonPopupPhoto = popupTypePhoto.querySelector('.popup__close-button');
// Все оверлеи попапов
const popupOverlays = page.querySelectorAll('.popup__overlay');
// Массив карточек
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

// Функции
// Функция создания карточки места
function createCard (item) {
	const placeTemplate = page.querySelector(".place-template").content;
  const placeElement = placeTemplate.querySelector('.place').cloneNode(true);
  const placeImage = placeElement.querySelector(".place__image");
  const placeName = placeElement.querySelector(".place__name");
  const placeLikebutton = placeElement.querySelector(".place__like-button");;
  const placeRemoveButton = placeElement.querySelector(".place__remove-button");

  placeImage.src = item.link;
  placeImage.alt = `Фотография места: ${item.name}`;
  placeName.textContent = item.name;

  placeLikebutton.addEventListener('click', function() {
    toggleLike(placeLikebutton);
  });

  placeImage.addEventListener('click', function() {
    openPopup(popupTypePhoto);

    popupTypePhotoImage.src = placeImage.src;
    popupTypePhotoImage.alt = placeImage.alt;
    popupTypePhotoCaption.textContent = placeImage.alt;
  });

  placeRemoveButton.addEventListener('click', function() {
    removePlace(placeRemoveButton);
  });

  console.log(placeElement);
  return placeElement
};
// Функция добавить-удалить лайк
function toggleLike(likeButton) {
  likeButton.classList.toggle('place__like-button_active');
}
// Функция удаления карточки места
function removePlace(removeButton) {
  const removeItem = removeButton.closest('.place')
  removeItem.remove();
}
// Функция закрытия попапа по нажатию клавишы ESC
function handleKeyboardKey(event) {
  const popupTarget = page.querySelector('.popup_opened');

  if (event.key === 'Escape') {
    popupTarget.classList.remove('popup_opened');
  }
}
// Функция открытия попапа
function openPopup(popupType) {
  popupType.classList.add('popup_opened');
  page.addEventListener('keydown', handleKeyboardKey)
}
// Функция закрытия попапа
function closePopup(popupType) {
  popupType.classList.remove('popup_opened');
  page.removeEventListener('keydown', handleKeyboardKey)
}
// Функция обработчика «отправки» формы редактирования профиля
function handleFormEditSubmit (evt) {
  const popupFormParent = evt.target;

  editProfile();
  evt.preventDefault();
  closePopup(popupFormParent.closest('.popup'));
}
// Функция обработчика «отправки» формы добавления карточек мест
function handleFormAddSubmit (evt) {
  const popupFormParent = evt.target;
  item = {
    name: namePopupAdd.value,
    link: imageSrcPopupAdd.value
  };

  gallery.prepend(createCard(item));
  popupFormParent.reset();
  closePopup(popupFormParent.closest('.popup'));
  evt.preventDefault();
}
// Функция подстановки значений из профиля в инпуты формы редактирования профиля
function editEditForm() {
  editPopupName.value = profileName.textContent;
  editPopupInfo.value = profileDescription.textContent;
}
// Функция подстановки значений из формы редактирования профиля в профиль
function editProfile() {
  profileName.textContent = editPopupName.value;
  profileDescription.textContent = editPopupInfo.value;
}
// Функция закрытия попапов по клику на оверлей
const closePopupOverlay = () => {
  Array.from(popupOverlays).forEach((element) => {
    element.addEventListener('click', function (evt) {
      closePopup(element.closest('.popup'));
    });
  });
};

// Создание 6 карточек мест
initialCards.forEach(function (item) {
  gallery.append(createCard(item));
});

// Открытие попапов
profileEditButton.addEventListener('click', function() {
  openPopup(popupTypeEdit);
  editEditForm();
});
placeAddButton.addEventListener('click', function() {
  openPopup(popupTypeAdd);
});

// Слушатели сабмита у форм
popupFormEdit.addEventListener('submit', handleFormEditSubmit);
popupFormAdd.addEventListener('submit', handleFormAddSubmit);

// Добавление карточек мест через попап
saveButtonPopupAdd.addEventListener('click', function() {
  item = {
    name: namePopupAdd.value,
    link: imageSrcPopupAdd.value
  };
  renderPlace (item)
});

// Закрытие попапов
closeButtonPopupEdit.addEventListener('click', function() {
  closePopup(popupTypeEdit);
});
closeButtonPopupAdd.addEventListener('click', function() {
  closePopup(popupTypeAdd);
});
closeButtonPopupPhoto.addEventListener('click', function() {
  closePopup(popupTypePhoto);
});
closePopupOverlay();

// Обработчики к формам
// popupFormEdit.addEventListener('submit', handleFormSubmit);
// popupFormAdd.addEventListener('submit', handleFormSubmit);
