import React from "react";
import logo from "../../images/logo.svg";
import {Link} from 'react-router-dom';


function Register(props) {

  const [data, setData] = React.useState({
    name: '',
    email: '',
    password: ''
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
    const {name, email, password} = data;
    props.onRegister({name, email, password})
  }

  function handleChange(e) {
    const {name, value} = e.target;
    setData({
      ...data,
      [name]: value
    })
  }

  return (
    <section className="form">
      <Link to='/' className="header__logo">
        <img src={logo} alt="логотип"/>
      </Link>
      <h3 className="form__title">Добро пожаловать!</h3>
      <form className="form__box" onSubmit={handleSubmit}>
        <label className="form__lable">
          <p className="form__text">Имя</p>
          <input id="form__input-name" type="text" name="name"
                 value={data.name} className="form__input" placeholder="Антонина"
                 required minLength="2" maxLength="30" onChange={handleChange}/>
        </label>
        <label className="form__lable">
          <p className="form__text">E-mail</p>
          <input id="form__input-email" type="email" name="email"
                 value={data.email} className="form__input" required placeholder="E-mail"
                 pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})" onChange={handleChange}/>
        </label>
        <label className="form__lable">
          <p className="form__text">Пароль</p>
          <input id="form__input-password" type="password" name="password"
                 value={data.password} className="form__input form__input_error"
                 required placeholder="" onChange={handleChange}/>
          <p className="form__text form__text_error">Что-то пошло не так</p>
        </label>
      </form>
      <button type="submit" className="form__submit-button">Зарегистрироваться</button>
      <div className="form__link-block">
        <p className="form__link-text">Уже зарегистрированы?</p>
        <Link to="/signin" className="form__link">Войти</Link>
      </div>
    </section>
  );
}

export default Register;

