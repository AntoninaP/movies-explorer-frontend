import React from "react";
import {Link} from 'react-router-dom';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import useFormWithValidation from "../FormValidator/FormValidator";


function Profile(props) {

  const {values, handleChange, resetForm, errors, isValid} = useFormWithValidation()

// Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);
  const isCurrentName = values.name === currentUser.name;
  const isCurrentEmail = values.email === currentUser.email;

  function handleSubmit(e) {
    e.preventDefault();
    const {name, email} = values;
    props.onUpdateUser({name, email});
  }

  return (
    <section className="profile">
      <h3 className="profile__title">{`Привет, ${currentUser.name}!`}</h3>
      <form onSubmit={handleSubmit} className="profile__form">
        <label className="profile__lable">
          <p className="profile__text">Имя</p>
          <input id="profile__input-name" type="text" name="name"
                 value={values.name} className="profile__input"
                 placeholder={currentUser.name} required minLength="2" maxLength="30"
                 onChange={handleChange}/>
        </label>
        <span className={`${errors ? 'profile__text_error' :
          'profile__text_error profile__text_error_disabled'}`}>
            {errors.name}
          </span>
        <label className="profile__lable">
          <p className="profile__text">E-mail</p>
          <input id="profile__input-name" type="email" name="email"
                 value={values.email} className="profile__input"
                 placeholder={currentUser.email} required minLength="2" maxLength="30"
                 onChange={handleChange}/>
        </label>
        <span className={`${errors ? 'profile__text_error' :
          'profile__text_error profile__text_error_disabled'}`}>
            {errors.name}
          </span>
        <button type="submit" className={`${isValid && isCurrentEmail && isCurrentName ? 'profile__edit-button' :
          'profile__edit-button profile__edit-button_novalidate'}`}
                disabled={!isValid} onClick={props.onPopupOpen}>Редактировать
        </button>
      </form>
      <Link to="/" className="profile__exit-link" onClick={props.onLogOut}>
        Выйти из аккаунта</Link>
    </section>
  );
}

export default Profile;
