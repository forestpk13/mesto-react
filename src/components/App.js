import React from 'react';
import { Header } from './Header.js';
import { Main } from './Main.js';
import { Footer } from './Footer.js';
import { PopupWithForm } from './PopupWithForm.js';
import { ImagePopup } from './ImagePopup.js';


function App() {

  const [isEditProfilePopupOpened, setIsEditProfilePopupOpened] = React.useState(false);
  const [isEditAvatarPopupOpened, setIsEditAvatarPopupOpened] = React.useState(false);
  const [isAddPlacePopupOpened, setIsAddPlacePopupOpened] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpened(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpened(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpened(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpened(false);
    setIsEditAvatarPopupOpened(false);
    setIsAddPlacePopupOpened(false);
  }

  function handleClickOnPopup(evt) {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
      closeAllPopups();
    }
  }

  const closeByEsc = (e) => {
    if (e.key === 'Escape') {
      closeAllPopups();
    }
  };

  React.useEffect(() => {
    if (isAddPlacePopupOpened || isEditAvatarPopupOpened || isEditProfilePopupOpened) {
      document.addEventListener('keydown', closeByEsc);
    }
    return () => document.removeEventListener('keydown', closeByEsc);
  }, [isAddPlacePopupOpened, isEditAvatarPopupOpened, isEditProfilePopupOpened]);


  return (
    <div className="page">

      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}/>
      <Footer />

      <PopupWithForm title="Редактировать профиль" name="edit-profile" isOpen={isEditProfilePopupOpened} onClose={handleClickOnPopup}>
        <fieldset className="form__fields">
          <label className="form__field">
            <input type="text" className="form__item" id="profile-name" name="name" placeholder="Введите ваше имя" minLength="2" maxLength="40" required/>
            <span className="form__error_field_profile-name form__error"></span>
          </label>
          <label className="form__field">
            <input type="text" className="form__item" id="profile-description" name="about" placeholder="Укажите род деятельности" minLength="2" maxLength="200" required/>
            <span className="form__error_field_profile-description form__error"></span>
            </label>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm title="Обновить аватар" name="edit-avatar" isOpen={isEditAvatarPopupOpened} onClose={handleClickOnPopup}>
        <fieldset className="form__fields">
          <label className="form__field">
            <input type="url" className="form__item" id="avatar-link" name="avatar" placeholder="Ссылка на аватар" minLength="7" required/>
            <span className="form__error form__error_field_avatar-link"></span>
          </label>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm title="Новое место" name="new-photo" isOpen={isAddPlacePopupOpened} onClose={handleClickOnPopup}>
        <fieldset className="form__fields">
          <label className="form__field">
            <input type="text" className="form__item" id="photo-name" name="name" placeholder="Название" minLength="2" maxLength="30" required/>
            <span className="form__error_field_photo-name form__error"></span>
          </label>
          <label className="form__field">
            <input type="url" className="form__item" id="photo-link" name="link" placeholder="Ссылка на картинку" required/>
            <span className="form__error_field_photo-link form__error"></span>
          </label>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm title="Вы уверены?" name="confirmation">
        <button type="submit" className="button form__submit-button" name="confirm" value="Да">Да</button>
      </PopupWithForm>
      <ImagePopup />
    </div>);
}

export default App;
