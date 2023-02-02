import React from 'react';
import { Header } from './Header.js';
import { Main } from './Main.js';
import { Footer } from './Footer.js';
import { PopupWithForm } from './PopupWithForm.js';
import { ImagePopup } from './ImagePopup.js';
import { EditProfilePopup } from './EditProfilePopup.js';
import { EditAvatarPopup } from './EditAvatarPopup.js';
import { UserContext } from '../contexts/CurrentUserContext.js';
import { api } from '../utils/Api.js';



function App() {

  const [isEditProfilePopupOpened, setIsEditProfilePopupOpened] = React.useState(false);
  const [isEditAvatarPopupOpened, setIsEditAvatarPopupOpened] = React.useState(false);
  const [isAddPlacePopupOpened, setIsAddPlacePopupOpened] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isCardPopupOpened, setIsCardPopupOpened] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [isLoadingScreenClosed, setIsLoadingScreenClosed] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpened(true);
  }

  function handleUpdateUser(userData) {
    api.setProfileData(userData)
      .then((newData) => {
        setCurrentUser(newData);
        closeAllPopups();
      })
      .catch(err => {
        console.log(`Ошибка обращения к серверу ${err}`);
      });
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpened(true);
  }

  function handleUpdateAvatar(avatar) {
    api.setProfileAvatar(avatar)
    .then((newData) => {
      setCurrentUser(newData);
      closeAllPopups();
    })
    .catch(err => {
      console.log(`Ошибка обращения к серверу ${err}`);
    });
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpened(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpened(false);
    setIsEditAvatarPopupOpened(false);
    setIsAddPlacePopupOpened(false);
    setIsCardPopupOpened(false);
    if (selectedCard.link) {
      setTimeout(() => setSelectedCard({}), 500); //не убираю картинку пока показывается анимация закрытия попапа
    }
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsCardPopupOpened(true);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(user => user._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch(err => {
        console.log(`Ошибка обращения к серверу ${err}`);
      });
  }

  function handleDeleteCard(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((oldCard) => oldCard._id !== card._id))
      })
      .catch(err => {
        console.log(`Ошибка обращения к серверу ${err}`);
      });
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
    Promise.all([api.getInitialCards(),api.getProfileData()])
      .then(([cards,user]) => {
        setCurrentUser(user);
        setCards(cards);
        setIsLoadingScreenClosed(true);
      })
      .catch(err => {
        console.log(`Ошибка обращения к серверу ${err}`);
      });
  }, []);

  React.useEffect(() => {
    if (isAddPlacePopupOpened || isEditAvatarPopupOpened || isEditProfilePopupOpened || isCardPopupOpened) {
      document.addEventListener('keydown', closeByEsc);
    }
    return () => document.removeEventListener('keydown', closeByEsc);
  }, [isAddPlacePopupOpened, isEditAvatarPopupOpened, isEditProfilePopupOpened, isCardPopupOpened]);


  return (
    <div className="page">
      <UserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete ={handleDeleteCard}
          cards={cards}
          loadingScreenStatus={isLoadingScreenClosed}/>
        <Footer />

        <EditProfilePopup isOpen={isEditProfilePopupOpened} onClose={handleClickOnPopup} onUpdateUser={handleUpdateUser}/>
        <EditAvatarPopup isOpen={isEditAvatarPopupOpened} onClose={handleClickOnPopup} onUpdateAvatar={handleUpdateAvatar}/>

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
        <ImagePopup card={selectedCard} isOpen={isCardPopupOpened} onClose={handleClickOnPopup} />
        <PopupWithForm title="Вы уверены?" name="confirmation">
          <button type="submit" className="button form__submit-button" name="confirm" value="Да">Да</button>
        </PopupWithForm>
      </UserContext.Provider>
    </div>);
}

export default App;
