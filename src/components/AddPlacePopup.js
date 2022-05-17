import React from "react";
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function AddPlacePopup({ isOpen, onClose, onAddPlace}) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState("");
    const [link, setLink] = React.useState("");

    React.useEffect(() => {
        setName("");
        setLink("");
    }, [isOpen]);

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeLink(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
        onAddPlace({
            name,
            link,
            owner: currentUser
        });
    }

    return(
            <PopupWithForm
                name={"card"}
                title="Новое место"
                submit="Создать"
                isOpen={isOpen ? 'popup_opened' : ''}
                isClose={onClose}
                onSubmit={handleSubmit}
            >
                <input
                    value={name}
                    onChange={handleChangeName}
                    type="text"
                    placeholder="Название"
                    name="name"
                    className="form__text form__text_type_place-title"
                    required
                    minLength="2"
                    maxLength="30"
                />
                <span id="name-error" className="form__error"/>
                <input
                    value={link}
                    onChange={handleChangeLink}
                    type="url"
                    placeholder="Ссылка на картинку"
                    name="link"
                    className="form__text form__text_type_place-link"
                    required
                />
                <span id="link-error" className="form__error"/>
            </PopupWithForm>
    )
}

export default AddPlacePopup;