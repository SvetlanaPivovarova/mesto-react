import React from 'react';
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Card({item, onCardClick, onCardLike, onCardDelete}) {
    const currentUser = React.useContext(CurrentUserContext);
    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = item.owner._id === currentUser._id;

    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (
        `card__delete-icon ${isOwn ? '' : 'card__delete-icon_hidden'}`
    );

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = item.likes.some(i => i._id === currentUser._id);

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = (
        `card__like-icon ${isLiked ? 'card__like-icon_active' : ''}`
    );

    const handleCardClick = () => {
        onCardClick(item);
    };

    const handleLikeClick = () => {
        onCardLike(item);
    };

    const handleDeleteClick = () => {
        onCardDelete(item);
    };

    return(
            <article className="card">
                <div className="card__container">
                    <button className={cardDeleteButtonClassName} onClick={handleDeleteClick} type="button" aria-label="Удалить" />
                    <img className="card__image" src={item.link} alt={item.name}
                         onClick={handleCardClick}
                    />
                </div>
                <div className="card__caption">
                    <h2 className="card__place-title">{item.name}</h2>
                    <div className="card__like">
                        <button className={cardLikeButtonClassName} onClick={handleLikeClick} type="button" aria-label="Нравится" />
                        <p className="card__like-amount">{item.likes.length}</p>
                    </div>
                </div>
            </article>
        )
    }

    export default Card;