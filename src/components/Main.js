import React from 'react';

function Main() {
    return(
        <main className="content">
            <section className="profile content__section">
                <button className="profile__avatar-edit" type="button" aria-label="Редактировать аватар">
                    <div className="profile__avatar-overlay"></div>
                    <img className="profile__avatar-image" src="<%=require('./images/image_kusto.jpg')%>"
                         alt="Фотография пользователя"/>
                </button>
                <div className="profile__info">
                    <h1 className="profile__name">Жак Ив Кусто</h1>
                    <button className="profile__edit-button" type="button" aria-label="Редактировать профиль"></button>
                    <p className="profile__profession">Исследователь океана</p>
                </div>
                <button className="profile__add-button" type="button" aria-label="Добавить"></button>
            </section>
            <section className="elements content__section">
            </section>
        </main>
    )
}

export default Main;