import React from 'react';

function ImagePopup() {
    return(
        <div className="popup popup_type_image">
            <div className="popup__image-container">
                <img className="popup__image-item" alt=""/>
                <h2 className="popup__title popup__title_type_image-caption"/>
                <button className="popup__close-btn" type="button" aria-label="Закрыть" />
            </div>
        </div>
    )
}

export default ImagePopup;