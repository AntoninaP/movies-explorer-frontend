import React from "react";
import icon from "../../images/icon.svg";

function SearchForm() {

  return (

      <form className="searchform">
        <div className="searchform__field">
          <label className="searchform__lable">
            <input id="searchform-input" type="text" name="searchform-input"
                   value='' className="searchform__input"
                   placeholder="Фильм" required minLength="2" maxLength="30"/>
          </label>
          <button type="submit" className="searchform__button">
            <img src={icon} alt="иконка поиска" className="searchform__icon"/>
          </button>
        </div>
        <div className="searchform__shortfilms">
          <label className="searchform__tumb">
            <input type="checkbox" name="tumbler"/>
          </label>
          <p className="searchform__text">Короткометражки</p>
        </div>
      </form>
  );
}

export default SearchForm;
