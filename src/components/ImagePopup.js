import React from 'react';

function ImagePopup({card, onClose}) {
    return(
        <div className={`popup popup_type_image ${card.link && 'popup_opened'}`}>
            <div className="popup__image-container">
                <img className="popup__image-item" alt={card.name} src={card.link}/>
                <h2 className="popup__title popup__title_type_image-caption">{card.name}</h2>
                <button className="popup__close-btn" type="button" onClick={onClose} aria-label="Закрыть" />
            </div>
        </div>
    )
}

export default ImagePopup;