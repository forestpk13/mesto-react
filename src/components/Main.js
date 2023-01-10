import profilePhoto from '../images/profile-photo.jpg';

export function Main({onEditAvatar, onEditProfile, onAddPlace}) {

  return (
    <main className="content">
      <section className="profile">
        <button onClick={onEditAvatar} className="profile__avatar-wrapper">
          <img className="profile__avatar" src={profilePhoto} alt="Аватар пользователя" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <button onClick={onEditProfile} type="button" className="profile__edit-button" aria-label="Редактировать"></button>
          <p className="profile__description">Исследователь океана</p>
        </div>
        <button onClick={onAddPlace} type="button" className="profile__add-button" aria-label="Добавить"></button>
      </section>

      <section className="elements">
        <ul className="elements__list"></ul>
      </section>
    </main>
  );
}