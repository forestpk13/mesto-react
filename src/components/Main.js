import React from 'react';
import { api } from '../utils/Api.js';

export function Main({onEditAvatar, onEditProfile, onAddPlace}) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInitialCards(), api.getProfileData()])
      .then(([cards, user]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(cards);
      })
      .catch(err => {
        console.log(`Ошибка обращения к серверу ${err}`);
      });
  },[]);

  return (
    <main className="content">
      <section className="profile">
        <button onClick={onEditAvatar} className="profile__avatar-wrapper">
          <img className="profile__avatar" src={userAvatar} alt="Аватар пользователя" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button onClick={onEditProfile} type="button" className="profile__edit-button" aria-label="Редактировать"></button>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button onClick={onAddPlace} type="button" className="profile__add-button" aria-label="Добавить"></button>
      </section>

      <section className="elements">
        <ul className="elements__list">
          {cards.map((card, i) => {
            return (
              <li className="photo-card" key={i}>
                <img className="photo-card__image" src={card.link} />
                <div className="photo-card__description">
                  <h2 className="photo-card__title">{card.name}</h2>
                  <div>
                    <button type="button" className="photo-card__like-button" aria-label="Нравится"></button>
                    <p className="photo-card__likes">{card.likes.length}</p>
                  </div>
                </div>
                <button type="button" className="photo-card__delete-button" aria-label="Удалить"></button>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}