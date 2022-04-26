import React, {useState} from 'react';
import Header from './Header';
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);

    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

    const [selectedCard, setSelectedCard] = useState({});

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
    }

    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true);
    }
    
    const closeAllPopups = () => {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard({});
    }

    const handleCardClick = (card) => {
        setSelectedCard(card);
    }

    return (
      <div className="page">
        <Header />
        <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}

            onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm
            name={"profile"}
            title="Редактировать профиль"
            submit="Сохранить"
            isOpen={isEditProfilePopupOpen? 'popup_opened' : ''}
            isClose={closeAllPopups}
        >
          <input
              type="text"
              placeholder="Имя"
              name="user"
              id="name"
              className="form__text form__text_type_name"
              required
              minLength="2"
              maxLength="40"
          />
          <span id="user-error" className="form__error"/>
          <input
              type="text"
              placeholder="О себе"
              name="about"
              className="form__text form__text_type_about"
              required
              minLength="2"
              maxLength="200"
          />
          <span id="about-error" className="form__error"/>
        </PopupWithForm>

        <PopupWithForm
            name={"card"}
            title="Новое место"
            submit="Создать"
            isOpen={isAddPlacePopupOpen? 'popup_opened' : ''}
            isClose={closeAllPopups}
        >
          <input
              type="text"
              placeholder="Название"
              name="name"
              className="form__text form__text_type_place-title"
              required
              minLength="2"
              maxLength="30"
          />
          <span id="name-error" className="form__error"/>
          <input
              type="url"
              placeholder="Ссылка на картинку"
              name="link"
              className="form__text form__text_type_place-link"
              required
          />
          <span id="link-error" className="form__error"/>
        </PopupWithForm>

        <PopupWithForm
            name={"avatar"}
            title="Обновить аватар"
            submit="Сохранить"
            isOpen={isEditAvatarPopupOpen? 'popup_opened' : ''}
            isClose={closeAllPopups}
        >
          <input
              type="url"
              placeholder="Ссылка на новый аватар"
              name="avatar"
              className="form__text form__text_type_place-link"
              required
          />
          <span id="avatar-error" className="form__error" />
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <div className="popup popup_type_delete-card">
        <div className="popup__container">
          <h2 className="popup__title popup__title_type_delete-window">Вы уверены?</h2>
          <button className="popup__close-btn" type="button" aria-label="Закрыть" />
          <form className="form" name="delete-card">
            <button type="submit" className="form__submit-btn">Да</button>
          </form>
        </div>
      </div>

      </div>
  );
}

export default App;
