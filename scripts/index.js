let page = document.querySelector('.page');
let profileEditButton = page.querySelector('.profile__edit-button');
let profileName = page.querySelector('.profile__name');
let profileDescription = page.querySelector('.profile__description');
let popup = page.querySelector('.popup');
// Находим форму в DOM
let popupForm = page.querySelector('.popup__form');
let popupCloseButton = page.querySelector('.popup__close-button');
// Находим поля формы в DOM
let popupName = page.querySelector('.popup__input_type_name');
let popupDescription = page.querySelector('.popup__input_type_description');
let photoLikeButtons = page.querySelectorAll('.place__like-button');
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

//Функция открытия попапа и подставление в value информации из профиля
function openPopup() {
  popupName.value = profileName.textContent;
  popupDescription.value = profileDescription.textContent;

  popup.classList.add('popup_opened');
}
//Функция закрытия попапа
function closePopup() {
  popup.classList.remove('popup_opened');
}
// Обработчик «отправки» формы
function handleFormSubmit (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  profileName.textContent = popupName.value;
  profileDescription.textContent = popupDescription.value;
  closePopup();
}

//Вызываем функции открытия-закрытия попапа по клику
profileEditButton.addEventListener('click', openPopup)
popupCloseButton.addEventListener('click', closePopup)
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popupForm.addEventListener('submit', handleFormSubmit); 

//Добавляем-удаляем модификатор у лайков
for (let i = 0; i < photoLikeButtons.length; i++) {
  photoLikeButtons[i].addEventListener("click", function() {
    photoLikeButtons[i].classList.toggle("place__like-button_active");
  });
}
