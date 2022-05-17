import React from 'react';
import Card from './Card'
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete}) {
    const currentUser = React.useContext(CurrentUserContext);

    return(
        <main className="content">
            <section className="profile content__section">
                <button className="profile__avatar-edit" type="button" onClick={onEditAvatar} aria-label="Редактировать аватар">
                    <div className="profile__avatar-overlay"/>
                    <img className="profile__avatar-image" src={currentUser.avatar}
                         alt="Фотография пользователя"/>
                </button>
                <div className="profile__info">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <button className="profile__edit-button" type="button" onClick={onEditProfile} aria-label="Редактировать профиль"/>
                    <p className="profile__profession">{currentUser.about}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={onAddPlace}  aria-label="Добавить"/>
            </section>
            <section className="elements content__section">
                {cards.map((card) => (
                    <Card
                        item={card}
                        key={card._id}
                        onCardClick={onCardClick}
                        onCardLike={onCardLike}
                        onCardDelete={onCardDelete}
                    />
                ))
                }
            </section>
        </main>
    )
}

export default Main;