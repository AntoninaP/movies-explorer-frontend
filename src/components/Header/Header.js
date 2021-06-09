import React from "react";
import logo from "../../images/logo.svg";


function Header() {

  return (
    <header className="header root__header">
      <img src={logo} alt="логотип" className="header__logo"/>
      <div className="header__button-group">
        <button className="header__button-reg">Регистрация</button>
        <button className="header__button-login">Войти</button>
      </div>
    </header>
  );
}

export default Header;
