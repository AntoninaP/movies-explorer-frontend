import React from "react";

function NavTab() {

  return (
    <ul className="navtab">
      <li className="navtab__list">
        <button className="navtab__button">О проекте</button>
      </li>
      <li className="navtab__list">
        <button className="navtab__button">Технологии</button>
      </li>
      <li className="navtab__list">
        <button className="navtab__button">Студент</button>
      </li>
    </ul>
  );
}

export default NavTab;
