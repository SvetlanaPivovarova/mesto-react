import React from 'react';
import Header from './Header';
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
      <body className="page">
        <Header />
        <Main />
        <Footer />
      <div className="popup popup_type_profile">
        <div className="popup__container">
          <h2 className="popup__title">Редактировать профиль</h2>
          <button className="popup__close-btn" type="button" aria-label="Закрыть"></button>
          <form className="form" name="profile-information" noValidate>
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
              <span id="user-error" className="form__error"></span>
              <input
                  type="text"
                  placeholder="О себе"
                  name="about"
                  className="form__text form__text_type_about"
                  required
                  minLength="2"
                  maxLength="200"
              />
                <span id="about-error" className="form__error"></span>
                <button type="submit" className="form__submit-btn">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_card">
        <div className="popup__container">
          <h2 className="popup__title">Новое место</h2>
          <button className="popup__close-btn" type="button" aria-label="Закрыть"></button>
          <form className="form" name="new-place-card" noValidate>
            <input
                type="text"
                placeholder="Название"
                name="name"
                className="form__text form__text_type_place-title"
                required
                minLength="2"
                maxLength="30"
            />
              <span id="name-error" className="form__error"></span>
              <input
                  type="url"
                  placeholder="Ссылка на картинку"
                  name="link"
                  className="form__text form__text_type_place-link"
                  required
              />
                <span id="link-error" className="form__error"></span>
                <button type="submit" className="form__submit-btn">Создать</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_image">
        <div className="popup__image-container">
          <img className="popup__image-item" alt=""/>
            <h2 className="popup__title popup__title_type_image-caption"></h2>
            <button className="popup__close-btn" type="button" aria-label="Закрыть"></button>
        </div>
      </div>
      <div className="popup popup_type_delete-card">
        <div className="popup__container">
          <h2 className="popup__title popup__title_type_delete-window">Вы уверены?</h2>
          <button className="popup__close-btn" type="button" aria-label="Закрыть"></button>
          <form className="form" name="delete-card">
            <button type="submit" className="form__submit-btn">Да</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_avatar">
        <div className="popup__container">
          <h2 className="popup__title">Обновить аватар</h2>
          <button className="popup__close-btn" type="button" aria-label="Закрыть"></button>
          <form className="form" name="edit-avatar" noValidate>
            <input
                type="url"
                placeholder="Ссылка на новый аватар"
                name="avatar"
                className="form__text form__text_type_place-link"
                required
            />
              <span id="avatar-error" className="form__error"></span>
              <button type="submit" className="form__submit-btn">Сохранить</button>
          </form>
        </div>
      </div>
      <template id="card-template" className="card-template-default">
        <article className="card">
          <div className="card__container">
            <button className="card__delete-icon" type="button" aria-label="Удалить"></button>
            <img className="card__image" alt=""/>
          </div>
          <div className="card__caption">
            <h2 className="card__place-title"></h2>
            <div className="card__like">
              <button className="card__like-icon" type="button" aria-label="Нравится"></button>
              <p className="card__like-amount"></p>
            </div>
          </div>
        </article>
      </template>
      </body>

  );
}

export default App;
