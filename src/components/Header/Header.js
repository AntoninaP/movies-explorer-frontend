import React from "react";
import logo from "../../images/logo.svg";
import {Link} from 'react-router-dom';
import Navigation from "../Navigation/Navigation";

function Header(props) {

  return (
    <header className="header root__header">
      {
        (!props.loggedIn) ?
        (<>
          <Link to='/' className="header__logo">
            <img src={logo} alt="логотип"/>
          </Link>
          <div>
            <Link className="header__signup" to='signup'>Регистрация</Link>
            <Link className="header__signin" to='signin'>Войти</Link>
          </div>
        </>) :
          (<>
            <Navigation/>
          </>)
      }
    </header>
  );
}

export default Header;
