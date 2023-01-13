import React from 'react';
import { LoadingScreen } from './LoadingScreen.js';
import { api } from '../utils/Api.js';
import { Card } from './Card.js';

export function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  const [isLoadingScreenClosed, setIsLoadingScreenClosed] = React.useState(false);
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInitialCards(), api.getProfileData()])
      .then(([cards, user]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(cards);
        setIsLoadingScreenClosed(true);
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
          {cards.map((cardElement, i) => {
            return (
              <li className="photo-card" key={cardElement._id}>
                <Card
                  card={cardElement}
                  onCardClick={onCardClick}
                />
              </li>
            );
          })}
        </ul>
      </section>

      <LoadingScreen isClose={isLoadingScreenClosed} />

    </main>
  );
}