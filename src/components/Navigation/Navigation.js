import React from "react";
import {Link} from "react-router-dom";
import profile_ico from "../../images/profile_ico.svg";
import logo from "../../images/logo.svg";
import burger_menu_ico from "../../images/burger_menu_ico.svg";


function Navigation() {

  return (
    <section className="navigation">
      <Link to='/' className="header__logo"><img src={logo} alt="логотип"/></Link>
      <div className="navigation__links">
        <Link className="navigation__main-link" to='/'>Главная</Link>
        <Link className="navigation__movies-link" to='movies'>Фильмы</Link>
        <Link className="navigation__saved-movies-link" to='saved-movies'>
          Сохраненные фильмы</Link>
      </div>
      <div className="navigation__menu-group">
        <Link to='/profile' className="navigation__profile-block">
          <p className="navigation__account">Аккаунт</p>
          <img src={profile_ico} alt="кнопка профайла пользователя" className="navigation__account-ico"/>
        </Link>
        <img src={burger_menu_ico} alt="иконка меню" className="navigation__burger-ico"/>
      </div>
    </section>
  );
}

export default Navigation;
