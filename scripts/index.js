// извлечем кнопки из попап
let popup = document.querySelector('.popup');
let popupCloseBtn = popup.querySelector('.popup__close-btn');
let popupSaveBtn = popup.querySelector('.popup__save-btn');
let inputs = popup.querySelectorAll('.popup__input');

// извлечем данные из профиля
let profile = document.querySelector('.profile__info');
let editBtn = profile.querySelector('.profile__edit-btn');

// извлечем имя пользователя и его описание
let userName = profile.querySelector('.profile__user-name');
let description = profile.querySelector('.profile__user-description');

// слушатель кнопки редактирования профиля
editBtn.addEventListener('click', function () {
    // делаем папап видимым
    popup.style.display = 'block';
    // переносим данные о профиле в поля ввода
    inputs[0].value = userName.textContent;
    inputs[1].value = description.textContent;
});

// слушатель кнопки закрытия попапа
popupCloseBtn.addEventListener('click', function () {
    // закрываем попап без сохранения данных
    popup.style.display = 'none';
})

// слушатель кнопки сохранения данных их попапа
popupSaveBtn.addEventListener('click', function () {
    // извлечем данные из попап и сохраняем в профиль
    userName.textContent = inputs[0].value;
    description.textContent = inputs[1].value;
    // закрываем попап
    popup.style.display = 'none';
})