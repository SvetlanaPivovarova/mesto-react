import React, {useState} from 'react';
import Header from './Header';
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import { api } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});
    const [currentUser, setCurrentUser] = useState({});
    const [cards, setCards] = React.useState([]);

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
    }

    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true);
    }

    const closeAllPopups = () => {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard({});
    }

    const handleCardClick = (card) => {
        setSelectedCard(card);
    }

    React.useEffect(() => {
        api.getProfile()
            .then((profile) => {
                console.log(profile);
                setCurrentUser(profile);
            })
            .catch((err) => {
                console.error(err);
                throw err;
            });

    }, []);

    function handleUpdateUser({name, about}) {
        console.log({name, about});
        api.editProfile({name, about})
            .then((newUser) => {
                console.log(newUser);
                setCurrentUser(newUser);
                closeAllPopups();
            })
            .catch((err) => {
                console.error(err);
                throw err;
            });
    }

    function handleUpdateAvatar(avatar) {
        console.log(avatar);
        api.editAvatar(avatar)
            .then((newUser) => {
                console.log(newUser)
                setCurrentUser(newUser);
                closeAllPopups();
            })
            .catch((err) => {
                console.error(err);
                throw err;
            });
    }

    React.useEffect(() => {
        api.getInitialData()
            .then((initialCards) => {
                //отрисовка карточек
                setCards(initialCards);
            })
            .catch((err) => {
                console.error(err);
                throw err;
            });

    }, []);

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, !isLiked)
            .then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            });
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id)
            .then((result) => {
                setCards((state) => state.filter((c) => c._id !== card._id));
            })
    }

    function handleAddPlaceSubmit({ name, link, owner }) {
        api.createNewCard({ name, link, owner })
            .then((newCard) => {
                setCards([newCard, ...cards]);
                closeAllPopups();
            })
            .catch((err) => {
            console.error(err);
            throw err;
        });
    }

        return (
            <CurrentUserContext.Provider value={currentUser}>
                <div className="page">
                    <Header/>
                    <Main
                        onEditProfile={handleEditProfileClick}
                        onAddPlace={handleAddPlaceClick}
                        onEditAvatar={handleEditAvatarClick}
                        onCardClick={handleCardClick}
                        cards={cards}
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                    />
                    <Footer/>

                    <EditProfilePopup
                        isOpen={isEditProfilePopupOpen}
                        onClose={closeAllPopups}
                        onUpdateUser={handleUpdateUser}

                    />

                    <AddPlacePopup
                        isOpen={isAddPlacePopupOpen}
                        onClose={closeAllPopups}
                        onAddPlace={handleAddPlaceSubmit}
                    />

                    <EditAvatarPopup
                        isOpen={isEditAvatarPopupOpen}
                        onClose={closeAllPopups}
                        onUpdateAvatar={handleUpdateAvatar}
                    />

                    <ImagePopup
                        card={selectedCard}
                        onClose={closeAllPopups}
                    />

                    <div className="popup popup_type_delete-card">
                        <div className="popup__container">
                            <h2 className="popup__title popup__title_type_delete-window">Вы уверены?</h2>
                            <button className="popup__close-btn" type="button" aria-label="Закрыть"/>
                            <form className="form" name="delete-card">
                                <button type="submit" className="form__submit-btn">Да</button>
                            </form>
                        </div>
                    </div>

                </div>
            </CurrentUserContext.Provider>
        );
}

export default App;