import { Header } from './Header.js';
import { Main } from './Main.js';
import { Footer } from './Footer.js';
import { PopupWithForm } from './PopupWithForm.js';
import { ImagePopup } from './ImagePopup.js';


function App() {
  return (
    <body className="root">
      <div className="page">

        <Header />
        <Main />
        <Footer />

        <PopupWithForm title="Редактировать профиль" name="edit-profile">
          <fieldset className="form__fields">
            <label className="form__field">
              <input type="text" className="form__item" id="profile-name" name="name" placeholder="Введите ваше имя" minlength="2" maxlength="40" required/>
              <span className="form__error_field_profile-name form__error"></span>
            </label>
            <label className="form__field">
              <input type="text" className="form__item" id="profile-description" name="about" placeholder="Укажите род деятельности" minlength="2" maxlength="200" required/>
              <span className="form__error_field_profile-description form__error"></span>
              </label>
          </fieldset>
        </PopupWithForm>
        <PopupWithForm title="Обновить аватар" name="edit-avatar">
          <fieldset className="form__fields">
            <label className="form__field">
              <input type="url" className="form__item" id="avatar-link" name="avatar" placeholder="Ссылка на аватар" minlength="7" required/>
              <span className="form__error form__error_field_avatar-link"></span>
            </label>
          </fieldset>
        </PopupWithForm>
        <PopupWithForm title="Новое место" name="new-photo">
          <fieldset className="form__fields">
            <label className="form__field">
              <input type="text" className="form__item" id="photo-name" name="name" placeholder="Название" minlength="2" maxlength="30" required/>
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
      </div>

      <ImagePopup />

      <template className="photo-card-template">
        <li className="photo-card">
          <img className="photo-card__image"/>
          <div classNameName="photo-card__description">
            <h2 className="photo-card__title">Карачаевск</h2>
            <div>
              <button type="button" className="photo-card__like-button" aria-label="Нравится"></button>
              <p className="photo-card__likes"></p>
            </div>
          </div>
          <button type="button" className="photo-card__delete-button" aria-label="Удалить"></button>
        </li>
      </template>
    </body>);
}

export default App;
