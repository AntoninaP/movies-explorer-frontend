import React from "react";
import {Link, NavLink} from "react-router-dom";
import profile_ico from "../../images/profile_ico.svg";
import close_ico from "../../images/close_ico.svg"

function Menu(props) {

  return (
    <section
      className={`menu ${props.isOpen ? 'menu_opened' : ''}`}
    >
      <img src={close_ico} alt="иконка закрытия попапа"
           className={`menu__close-button ${props.isOpen ? 'menu__close-button_visible' : ''}`}
           onClick={props.onClose}/>
      <nav className="navigation__links navigation__links_popup">
        <NavLink activeClassName="navigation__link_active"
                 className="navigation__link navigation__link_popup"
                 to='/' onClick={props.onClose}>Главная</NavLink>
        <NavLink activeClassName="navigation__link_active"
                 className="navigation__link navigation__link_popup"
                 to='movies' onClick={props.onClose}>Фильмы</NavLink>
        <NavLink activeClassName="navigation__link_active"
                 className="navigation__link navigation__link_popup"
                 to='saved-movies' onClick={props.onClose}>
          Сохраненные фильмы</NavLink>
      </nav>
      <div className="navigation__menu-group">
        <Link to='/profile' className="navigation__profile-block navigation__profile-block_popup"
              onClick={props.onClose}>
          <p className="navigation__account">Аккаунт</p>
          <img src={profile_ico} alt="кнопка профайла пользователя"
               className="navigation__account-ico"/>
        </Link>
      </div>
    </section>
  );
}

export default Menu;
