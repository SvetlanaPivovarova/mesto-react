import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({isOpen, onClose}) {
    return(
        <>
            <PopupWithForm
                name={"profile"}
                title="Редактировать профиль"
                submit="Сохранить"
                isOpen={isOpen? 'popup_opened' : ''}
                isClose={onClose}
            >
                <input
                    type="text"
                    placeholder="Имя"
                    name="user"
                    id="name"
                    className="form__text form__text_type_name"
                    required
                    minLength="2"
                    maxLength="40"
                />
                <span id="user-error" className="form__error"/>
                <input
                    type="text"
                    placeholder="О себе"
                    name="about"
                    className="form__text form__text_type_about"
                    required
                    minLength="2"
                    maxLength="200"
                />
                <span id="about-error" className="form__error"/>
            </PopupWithForm>
        </>
    )
}

export default EditProfilePopup;