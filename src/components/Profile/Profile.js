import React from "react";
import {Link} from 'react-router-dom';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

function Profile(props) {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  function handleChangeName(e) {
    console.log(e.target.value)
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

// Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);

// После загрузки текущего пользователя из API
// его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    console.log(currentUser.name);
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name: name,
      email: email,
    });
  }

  return (
    <section className="profile">
      <h3 className="profile__title">{`Привет, ${currentUser.name}!`}</h3>
      <form onSubmit={handleSubmit} className="profile__form">
        <label className="profile__lable">
          <p className="profile__text">Имя</p>
          <input id="profile__input-name" type="text" name="name"
                 value={name} className="profile__input"
                 placeholder={currentUser.name} required minLength="2" maxLength="30"
                 onChange={handleChangeName}/>
        </label>
        <label className="profile__lable">
          <p className="profile__text">E-mail</p>
          <input id="profile__input-name" type="email" name="email"
                 value={email} className="profile__input"
                 placeholder={currentUser.email} required minLength="2" maxLength="30"
                 onChange={handleChangeEmail}/>
          {/*<span className="searchform__input-error">*/}
          {/*</span>*/}
        </label>
        <button type="submit" className="profile__edit-button">Редактировать</button>
      </form>
      <Link to="/" className="profile__exit-link" onClick={props.onLogOut}>
        Выйти из аккаунта</Link>
    </section>
  );
}

export default Profile;
