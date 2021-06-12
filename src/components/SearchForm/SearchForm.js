import React from "react";
import icon from "../../images/icon.svg";
import smalltumb from "../../images/smalltumb.svg";


function SearchForm() {

  return (
    <div className="searchform">
      <form className="searchform__field">
        <label>
        <input id="searchform-input" type="text" name="searchform-input"
               value='' className="searchform__input"
               placeholder="Фильм" required minLength="2" maxLength="30"/>
        {/*<span className="searchform__input-error">*/}
        {/*</span>*/}
      </label>
        <button type="submit" className="searchform__button">
          <img src={icon} alt="иконка поиска" className="searchform__icon"/>
        </button>
      </form>
      <div className="searchform__shortfilms">
        <img src={smalltumb} alt="тумблер в положении вкл" className="searchform__tumb"/>
        <p className="searchform__text">Короткометражки</p>
      </div>
    </div>
  );
}

export default SearchForm;
