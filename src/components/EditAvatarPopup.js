import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    const avatarRef = React.useRef();

    React.useEffect(() => {
        avatarRef.current.value = "";
    }, [isOpen]);

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
    }

    return(
        <PopupWithForm
                name={"avatar"}
                title="Обновить аватар"
                submit="Сохранить"
                isOpen={isOpen ? 'popup_opened' : ''}
                isClose={onClose}
                onSubmit={handleSubmit}
            >
                <input
                    ref={avatarRef}

                    type="url"
                    placeholder="Ссылка на новый аватар"
                    name="avatar"
                    className="form__text form__text_type_place-link"
                    required
                />
                <span id="avatar-error" className="form__error"/>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;