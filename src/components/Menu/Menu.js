import React from "react";
import {Link, NavLink} from "react-router-dom";
import profile_ico from "../../images/profile_ico.svg";
import close_ico from "../../images/close_ico.svg"

function Menu(props) {

  return (
    <section className="menu">
      {/*className={`'menu' ${props.isMenuOpen ? 'menu_opened' : ''}`}>*/}
      <img src={close_ico} alt="иконка закрытия попапа" className="menu__close-button"
      onClick={props.onClose}/>
      <nav className="navigation__links navigation__links_popup">
        <NavLink activeClassName="navigation__link_active"
                 className="navigation__link navigation__link_popup"
                 to='/'>Главная</NavLink>
        <NavLink activeClassName="navigation__link_active"
                 className="navigation__link navigation__link_popup"
                 to='movies'>Фильмы</NavLink>
        <NavLink activeClassName="navigation__link_active"
                 className="navigation__link navigation__link_popup"
                 to='saved-movies'>
          Сохраненные фильмы</NavLink>
      </nav>
      <div className="navigation__menu-group">
        <Link to='/profile' className="navigation__profile-block navigation__profile-block_popup">
          <p className="navigation__account">Аккаунт</p>
          <img src={profile_ico} alt="кнопка профайла пользователя"
               className="navigation__account-ico"/>
        </Link>
      </div>
    </section>
  );
}

export default Menu;
