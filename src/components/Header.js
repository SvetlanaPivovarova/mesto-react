import logoHeader from '../images/Vector_logo.svg'; // Путь к изображению внутри сборки
import React from 'react';

function Header() {
    return(
        <header className="header page__content">
            <img className="header__logo" src={logoHeader} alt="Логотип сайта"/>
        </header>
    );
}

export default Header;