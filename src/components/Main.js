import React from 'react';
import {api} from "../utils/api";
import Card from './Card'

function Main({onEditProfile, onAddPlace, onEditAvatar}) {
    const [userName, setUserName] = React.useState('Жак Ив Кусто');
    const [userDescription, setUserDescription] = React.useState('Исследователь океана');
    const [userAvatar, setUserAvatar] = React.useState('../images/image_kusto.jpg');
    const [cards, setCards] = React.useState([]);


    React.useEffect(() => {
        Promise.all([api.getProfile(), api.getInitialData()])
            .then(([profile, initialCards]) => {
                console.log(profile);
                setUserName(profile.name);
                setUserDescription(profile.about);
                setUserAvatar(profile.avatar);

                //отрисовка карточек
                setCards(initialCards);
            })
            .catch((err) => {
                console.error(err);
                throw err;
            });

    }, []);

    return(
        <main className="content">
            <section className="profile content__section">
                <button className="profile__avatar-edit" type="button" onClick={onEditAvatar} aria-label="Редактировать аватар">
                    <div className="profile__avatar-overlay"/>
                    <img className="profile__avatar-image" src={userAvatar}
                         alt="Фотография пользователя"/>
                </button>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button className="profile__edit-button" type="button" onClick={onEditProfile} aria-label="Редактировать профиль"/>
                    <p className="profile__profession">{userDescription}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={onAddPlace}  aria-label="Добавить"/>
            </section>
            <section className="elements content__section">
                {cards.map((card) => (
                    <Card
                        item={card}
                        key={card._id}
                    />
                ))
                }
            </section>
        </main>
    )
}

export default Main;