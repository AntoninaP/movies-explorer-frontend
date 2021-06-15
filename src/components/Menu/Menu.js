import React from "react";
import {Link} from "react-router-dom";
import profile_ico from "../../images/profile_ico.svg";


function Menu() {

  return (
    <section className="menu">
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
      </div>
    </section>
  );
}

export default Menu;
