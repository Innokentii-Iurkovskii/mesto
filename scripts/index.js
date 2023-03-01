let page = document.querySelector('.page');
let profileEditButton = page.querySelector('.profile__edit-button');
let popup = page.querySelector('.popup');
let popupCloseButton = page.querySelector('.popup__close-button');
let popupSaveButton = page.querySelector('.popup__save-button');
let photoLikeButtons = page.querySelectorAll('.photo-gallery__like-button');
let profileName = page.querySelector('.profile__name');
let profileDescription = page.querySelector('.profile__description');
let popupName = page.querySelector('.popup__input_type_name');
let popupDescription = page.querySelector('.popup__input_type_description');

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

//Вызываем функции открытия-закрытия попапа по клику
profileEditButton.addEventListener('click', openPopup)
popupCloseButton.addEventListener('click', closePopup)

//Добавляем-удаляем модификатор у лайков
for (let i = 0; i < photoLikeButtons.length; i++) {
  photoLikeButtons[i].addEventListener("click", function() {
    photoLikeButtons[i].classList.toggle("photo-gallery__like-button_active");
  });
}

//Функция изменения текста в профиле и закрытия попапа
function changeProfile() {
  console.log(profileName.textContent);
  profileName.textContent = popupName.value;
  profileDescription.textContent = popupDescription.value;
  popup.classList.remove('popup_opened');
}
//Вызываем функцию изменения профиля и закрытия попапа по клику
popupSaveButton.addEventListener('click', changeProfile);
