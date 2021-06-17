import React from "react";
import logo from "../../images/logo.svg";
import {Link} from 'react-router-dom';


function Login() {

  return (
    <section className="form">
      <Link to='/' className="header__logo">
        <img src={logo} alt="логотип"/>
      </Link>
      <h3 className="form__title">Рады видеть!</h3>
      <form className="form__box">
        <label className="form__lable">
          <p className="form__text">E-mail</p>
          <input id="form__input-email" type="email" name="form__input-email"
                 value='' className="form__input"
                 placeholder="E-mail" pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"/>
        </label>
        <label className="form__lable">
          <p className="form__text">Пароль</p>
          <input id="form__input-password" type="password" name="form__input-password"
                 value='' className="form__input form__input_error"
                 placeholder=""/>
          <p className="form__text form__text_error">Что-то пошло не так</p>
        </label>
      </form>
      <button type="submit" className="form__submit-button">Войти</button>
      <div className="form__link-block">
        <p className="form__link-text">Еще не зарегистрированы?</p>
        <Link to="/signup" className="form__link">Регистрация</Link>
      </div>
    </section>
  );
}

export default Login;
