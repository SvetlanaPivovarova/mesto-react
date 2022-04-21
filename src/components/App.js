import React from 'react';
import Header from './Header';
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

    return (
      <body className="page">
        <Header />
        <Main />
        <Footer />

        <PopupWithForm name={'profile'} title={'Редактировать профиль'} submit={'Сохранить'}>
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

        <PopupWithForm name={'card'} title={'Новое место'} submit={'Создать'}>
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

        <PopupWithForm name={'avatar'} title={'Обновить аватар'} submit={'Сохранить'}>
          <input
              type="url"
              placeholder="Ссылка на новый аватар"
              name="avatar"
              className="form__text form__text_type_place-link"
              required
          />
          <span id="avatar-error" className="form__error" />
        </PopupWithForm>

        <ImagePopup />



      <div className="popup popup_type_delete-card">
        <div className="popup__container">
          <h2 className="popup__title popup__title_type_delete-window">Вы уверены?</h2>
          <button className="popup__close-btn" type="button" aria-label="Закрыть" />
          <form className="form" name="delete-card">
            <button type="submit" className="form__submit-btn">Да</button>
          </form>
        </div>
      </div>

      <template id="card-template" className="card-template-default">
        <article className="card">
          <div className="card__container">
            <button className="card__delete-icon" type="button" aria-label="Удалить" />
            <img className="card__image" alt=""/>
          </div>
          <div className="card__caption">
            <h2 className="card__place-title" />
            <div className="card__like">
              <button className="card__like-icon" type="button" aria-label="Нравится" />
              <p className="card__like-amount" />
            </div>
          </div>
        </article>
      </template>
      </body>

  );
}

export default App;
