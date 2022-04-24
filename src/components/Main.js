import React from 'react';
import {api} from "../utils/api";

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

        // Список действий внутри одного хука


        // Возвращаем функцию, которая удаляет эффекты
        //return () => {
       //
       // };
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
                {cards.map((item) => {
                    return(
                        <article className="card" key={item._id}>
                            <div className="card__container">
                                <button className="card__delete-icon" type="button" aria-label="Удалить" />
                                <img className="card__image" src={item.link} alt={item.name}/>
                            </div>
                            <div className="card__caption">
                                <h2 className="card__place-title">{item.name}</h2>
                                <div className="card__like">
                                    <button className="card__like-icon" type="button" aria-label="Нравится" />
                                    <p className="card__like-amount">{item.likes.length}</p>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </section>
        </main>
    )
}

export default Main;