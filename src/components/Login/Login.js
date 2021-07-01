import React from "react";
import logo from "../../images/logo.svg";
import {Link} from 'react-router-dom';
import useFormWithValidation from "../FormValidator/FormValidator";

function Login(props) {

  const {values, handleChange, resetForm, errors, isValid} = useFormWithValidation()

  function handleSubmit(e) {
    e.preventDefault();
    const {email, password} = values;
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
                 value={values.email} className="form__input" required
                 placeholder="Введите E-mail" pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
                 onChange={handleChange}/>
          <span className={`${errors ? 'form__text_error' : 'form__text_error form__text_error_disabled'}`}>
            {errors.email}
          </span>
        </label>
        <label className="form__lable">
          <p className="form__text">Пароль</p>
          <input id="form__input-password" type="password" name="password"
                 value={values.password} className="form__input form__input_error"
                 placeholder="" required minLength="2" maxLength="10"
                 onChange={handleChange}/>
          <span className={`${errors ? 'form__text_error' : 'form__text_error form__text_error_disabled'}`}>
            {errors.password}
          </span>
        </label>
        <button type="submit" className={`${isValid ? 'form__submit-button' :
          'form__submit-button form__submit-button_novalidate'}`}
                disabled={!isValid}>Войти
        </button>
      </form>
      <div className="form__link-block">
        <p className="form__link-text">Еще не зарегистрированы?</p>
        <Link to="/signup" className="form__link">Регистрация</Link>
      </div>
    </section>
  );
}

export default Login;
