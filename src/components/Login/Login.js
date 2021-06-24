import React from "react";
import logo from "../../images/logo.svg";
import {Link} from 'react-router-dom';


function Login(props) {

  function handleChange(e) {
    const {name, value} = e.target;
    props.onEnter({
      ...props.data,
      [name]: value
    })
  }

  function handleSubmit(e) {
    const {email, password} = props.data;
    e.preventDefault();
    props.onAutorization({email, password})
  }

  return (
    <section className="form">
      <Link to='/' className="header__logo">
        <img src={logo} alt="логотип"/>
      </Link>
      <h3 className="form__title">Рады видеть!</h3>
      <form className="form__box" onSubmit={handleSubmit}>
        <label className="form__lable">
          <p className="form__text">E-mail</p>
          <input id="form__input-email" type="email" name="email"
                 value={props.data.email} className="form__input" required
                 placeholder="E-mail" pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
                 onChange={handleChange}/>
        </label>
        <label className="form__lable">
          <p className="form__text">Пароль</p>
          <input id="form__input-password" type="password" name="password"
                 value={props.data.password} className="form__input form__input_error"
                 placeholder="" required minLength="2" maxLength="10"
                 onChange={handleChange}/>
          <p className="form__text form__text_error">Что-то пошло не так</p>
        </label>
        <button type="submit" className="form__submit-button">Войти</button>
      </form>
      <div className="form__link-block">
        <p className="form__link-text">Еще не зарегистрированы?</p>
        <Link to="/signup" className="form__link">Регистрация</Link>
      </div>
    </section>
  );
}

export default Login;
