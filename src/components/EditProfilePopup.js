import React from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, isOpen]);

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateUser({
            name,
            about: description,
        });
    }

    return(
            <PopupWithForm
                name={"profile"}
                title="Редактировать профиль"
                submit="Сохранить"
                onSubmit={handleSubmit}
                isOpen={isOpen? 'popup_opened' : ''}
                isClose={onClose}
            >
                <input
                    type="text"
                    placeholder="Имя"
                    name="user"
                    id="name"
                    value={name || ''}
                    onChange={handleChangeName}
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
                    value={description || ''}
                    onChange={handleChangeDescription}
                    className="form__text form__text_type_about"
                    required
                    minLength="2"
                    maxLength="200"
                />
                <span id="about-error" className="form__error"/>
            </PopupWithForm>
    )
}

export default EditProfilePopup;