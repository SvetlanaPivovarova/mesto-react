import React from 'react';
import avatar from '../images/image_kusto.jpg';

function Main() {

    const handleEditAvatarClick = () => {
        document.querySelector('.popup_type_avatar').classList.add('popup_opened');
    }

    const handleEditProfileClick = () => {
        document.querySelector('.popup_type_profile').classList.add('popup_opened');
    }
    
    const handleAddPlaceClick = () => {
        document.querySelector('.popup_type_card').classList.add('popup_opened');
    }

    return(
        <main className="content">
            <section className="profile content__section">
                <button className="profile__avatar-edit" type="button" onClick={handleEditAvatarClick} aria-label="Редактировать аватар">
                    <div className="profile__avatar-overlay"></div>
                    <img className="profile__avatar-image" src={avatar}
                         alt="Фотография пользователя"/>
                </button>
                <div className="profile__info">
                    <h1 className="profile__name">Жак Ив Кусто</h1>
                    <button className="profile__edit-button" type="button" onClick={handleEditProfileClick} aria-label="Редактировать профиль"></button>
                    <p className="profile__profession">Исследователь океана</p>
                </div>
                <button className="profile__add-button" type="button" onClick={handleAddPlaceClick} aria-label="Добавить"></button>
            </section>
            <section className="elements content__section">
            </section>
        </main>
    )
}

export default Main;