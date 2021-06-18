import React from "react";
import logo from "../../images/logo.svg";
import {Link} from 'react-router-dom';

function Header() {

  return (
    <header className="header root__header">
      <Link to='/' className="header__logo">
        <img src={logo} alt="логотип"/>
      </Link>
      <div>
        <Link className="header__signup" to='signup'>Регистрация</Link>
        <Link className="header__signin" to='signin'>Войти</Link>
      </div>
    </header>
  );
}

export default Header;
