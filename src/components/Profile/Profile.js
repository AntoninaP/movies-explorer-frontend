import React from "react";


function Profile() {

  return (
    <section className="profile">
      <h3 className="profile__title">Привет, Антонина!</h3>
      <form className="profile__form">
        <label className="profile__lable">
          <p className="profile__text">Имя</p>
          <input id="profile__input-name" type="text" name="profile__input-name"
                 value='' className="profile__input"
                 placeholder="Антонина" required minLength="2" maxLength="30"/>
          {/*<span className="searchform__input-error">*/}
          {/*</span>*/}
        </label>
        <label className="profile__lable">
          <p className="profile__text">E-mail</p>
          <input id="profile__input-name" type="text" name="profile__input-name"
                 value='' className="profile__input"
                 placeholder="antonina_f@bk.ru" required minLength="2" maxLength="30"/>
          {/*<span className="searchform__input-error">*/}
          {/*</span>*/}
        </label>
      </form>
      <button type="submit" className="profile__edit-button">Редактировать</button>
      <button className="profile__exit-button">Выйти из аккаунта</button>
    </section>
  );
}

export default Profile;
