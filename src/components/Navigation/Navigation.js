import React from "react";
import {Link, NavLink} from "react-router-dom";
import profile_ico from "../../images/profile_ico.svg";
import logo from "../../images/logo.svg";
import burger_menu_ico from "../../images/burger_menu_ico.svg";


function Navigation(props) {

  return (
    <section className="navigation">
      <Link to='/' className="header__logo"><img src={logo} alt="логотип"/></Link>
      <nav className="navigation__links">
        <NavLink activeClassName="navigation__link_active"
                 className="navigation__link navigation__link_hidden"
                 to='/'>Главная</NavLink>
        <NavLink activeClassName="navigation__link_active"
                 className="navigation__link"
                 to='movies'>Фильмы</NavLink>
        <NavLink activeClassName="navigation__link_active"
                 className="navigation__link"
                 to='saved-movies'>
          Сохраненные фильмы</NavLink>
      </nav>
      <div className="navigation__menu-group">
        <Link to='/profile' className="navigation__profile-block">
          <p className="navigation__account">Аккаунт</p>
          <img src={profile_ico} alt="кнопка профайла пользователя" className="navigation__account-ico"/>
        </Link>
        <img src={burger_menu_ico} alt="иконка меню" className="navigation__burger-ico"
        onClick={props.isMenuOpen}/>
      </div>
    </section>
  );
}

export default Navigation;
