import React from "react";
import logo from "../../images/logo.svg";
import {Route, Link, Switch} from 'react-router-dom';
import Navigation from "../Navigation/Navigation";
import Menu from "../Menu/Menu";


function Header(props) {

  return (
    <header className="header root__header">
      <Switch>
        <Route exact path="/">
          <Link to='/' className="header__logo">
            <img src={logo} alt="логотип"/>
          </Link>
          <div>
            <Link className="header__signup" to='signup'>Регистрация</Link>
            <Link className="header__signin" to='signin'>Войти</Link>
          </div>
        </Route>
        <Route path="/movies">
          <Navigation/>
        </Route>
        <Route path="/saved-movies">
          <Navigation/>
        </Route>
        <Route path="/profile">
          <Navigation/>
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
