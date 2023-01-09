import profilePhoto from '../images/profile-photo.jpg';

export function Main() {

  function handleEditAvatarClick() {
    document.querySelector('.popup_content_edit-avatar').classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    document.querySelector('.popup_content_edit-profile').classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup_content_new-photo').classList.add('popup_opened');
  }

  return (
    <main className="content">
      <section className="profile">
        <button onClick={handleEditAvatarClick} className="profile__avatar-wrapper">
          <img className="profile__avatar" src={profilePhoto} alt="Аватар пользователя" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <button onClick={handleEditProfileClick} type="button" className="profile__edit-button" aria-label="Редактировать"></button>
          <p className="profile__description">Исследователь океана</p>
        </div>
        <button onClick={handleAddPlaceClick} type="button" className="profile__add-button" aria-label="Добавить"></button>
      </section>

      <section className="elements">
        <ul className="elements__list"></ul>
      </section>
    </main>
  );
}