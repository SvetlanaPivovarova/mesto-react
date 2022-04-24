import React from 'react';

function PopupWithForm({name, title, submit, isOpen, children}) {
    return(
        <div className={`popup popup_type_${name} ${isOpen}`}>
            <div className="popup__container">
                <h2 className="popup__title popup__title_type_delete-window">{title}</h2>
                <button className="popup__close-btn" type="button" aria-label="Закрыть" />
                <form className="form" name="delete-card">
                    {children}
                    <button type="submit" className="form__submit-btn">{submit}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;