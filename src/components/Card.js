import React from 'react';

function Card({item}) {
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
    }

    export default Card;