import React from "react";
import icon from "../../images/icon.svg";

function SearchForm(props) {

  const [data, setData] = React.useState({});

  function handleSubmit(e) {
    e.preventDefault();
    props.onSearch(data.search, data.tumbler)
  }

  function handleChange(e) {
    let {name, value} = e.target;

    if (name === "tumbler") {
      value = !e.target.checked
    }

    setData({
      ...data,
      [name]: value
    })
  }

  return (

      <form className="searchform" onSubmit={handleSubmit}>
        <div className="searchform__field">
          <label className="searchform__lable">
            <input id="searchform-input" type="text" name="search"
                   value={data.search} className="searchform__input" onChange={handleChange}
                   placeholder="Фильм" required minLength="1" maxLength="30"/>
          </label>
          <button type="submit" className="searchform__button">
            <img src={icon} alt="иконка поиска" className="searchform__icon"/>
          </button>
        </div>
        <div className="searchform__shortfilms">
          <label className="searchform__tumb">
            <input type="checkbox" name="tumbler" value={data.tumbler} onChange={handleChange}/>
          </label>
          <p className="searchform__text">Короткометражки</p>
        </div>
      </form>
  );
}

export default SearchForm;
