import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body className="root">
      <div className="page">
        <header className="header">
         <img className="logo" src="<%=require('./images/header-logo.svg')%>" alt="Логотип проекта Mesto"/>
        </header>

        <main className="content">

          <section className="profile">
            <button className="profile__avatar-wrapper">
              <img className="profile__avatar" src="#" alt="Аватар пользователя"/>
            </button>
            <div className="profile__info">
              <h1 className="profile__name"></h1>
              <button type="button" className="profile__edit-button" aria-label="Редактировать"></button>
              <p className="profile__description"></p>
            </div>
            <button type="button" className="profile__add-button" aria-label="Добавить"></button>
          </section>

          <section className="elements">
            <ul className="elements__list"></ul>
          </section>

          <div className = "loading-screen">
            <img className="loading-screen__loader" src="<%=require('./images/loader.svg')%>" alt="Логотип проекта Mesto"/>
          </div>

        </main>
        <footer className="footer">
          <p className="footer__copyright">&copy; 2022 Mesto Russia</p>
        </footer>
        <div className="popup popup_content_edit-profile">
          <div className="popup__container">
            <button type="button" className="popup__close-button" aria-label="Закрыть"></button>
            <form className="form" id="profile" name="profile" novalidate>
              <h2 className="form__title">Редактировать профиль</h2>
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
              <button type="submit" className="button form__submit-button" name="profile__save" value="Сохранить">Сохранить</button>
            </form>
          </div>
        </div>

        <div className="popup popup_content_edit-avatar">
          <div className="popup__container">
            <button type="button" className="popup__close-button" aria-label="Закрыть"></button>
            <form className="form" id="avatar" name="avatar" novalidate>
              <h2 className="form__title">Обновить аватар</h2>
              <fieldset className="form__fields">
                <label className="form__field">
                  <input type="url" className="form__item" id="avatar-link" name="avatar" placeholder="Ссылка на аватар" minlength="7" required/>
                  <span className="form__error form__error_field_avatar-link"></span>
                </label>
              </fieldset>
              <button type="submit" className="button form__submit-button" name="avatar-edit" value="Сохранить">Сохранить</button>
            </form>
          </div>
        </div>

        <div className="popup popup_content_new-photo">
          <div className="popup__container">
            <button type="button" className="popup__close-button" aria-label="Закрыть"></button>
            <form className="form" id="photo" name="photo" novalidate>
              <h2 className="form__title">Новое место</h2>
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
              <button type="submit" className="button form__submit-button" name="new-photo__add" value="Создать">Создать</button>
            </form>
          </div>
        </div>

        <div className="popup popup_content_confirmation">
          <div className="popup__container">
            <button type="button" className="popup__close-button" aria-label="Закрыть"></button>
            <form className="form form_content_comfirmation" id="confirm" name="confirm" novalidate>
              <h2 className="form__title">Вы уверены?</h2>
              <button type="submit" className="button form__submit-button" name="confirm" value="Да">Да</button>
            </form>
          </div>
        </div>
     </div>

      <div className="popup popup_content_photo-big">
        <div className="popup__image-container">
          <button type="button" className="popup__close-button" aria-label="Закрыть"></button>
          <img className="popup__image" src="#" alt="#"/>
          <h3 className="popup__image-caption"></h3>
        </div>
      </div>

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
