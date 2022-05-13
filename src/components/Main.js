import React from 'react';
import {api} from "../utils/api";
import Card from './Card'
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
    //const [userName, setUserName] = React.useState('Жак Ив Кусто');
    //const [userDescription, setUserDescription] = React.useState('Исследователь океана');
    //const [userAvatar, setUserAvatar] = React.useState('../images/image_kusto.jpg');
    const [cards, setCards] = React.useState([]);
    const currentUser = React.useContext(CurrentUserContext);

    console.log(currentUser);

    React.useEffect(() => {
        api.getInitialData()
            .then((initialCards) => {
                //отрисовка карточек
                setCards(initialCards);
            })
            .catch((err) => {
                console.error(err);
                throw err;
            });

    }, []);

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, !isLiked)
            .then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        });
    }

    function handleCardDelete(card) {
        const isOwn = card.owner._id === currentUser._id;

        api.deleteCard(card._id)
            .then((result) => {
                setCards((state) => state.filter((c) => c._id !== card._id));
            })
    }

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
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                    />
                ))
                }
            </section>
        </main>
    )
}

export default Main;