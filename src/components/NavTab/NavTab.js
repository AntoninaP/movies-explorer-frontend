import React from "react";

function NavTab() {

  return (
    <ul className="navtab">
      <li className="navtab__list">
        <a href="#project" className="navtab__link">О проекте</a>
      </li>
      <li className="navtab__list">
        <a href="#techs" className="navtab__link">Технологии</a>
      </li>
      <li className="navtab__list">
        <a href="#student" className="navtab__link">Студент</a>
      </li>
    </ul>
  );
}

export default NavTab;
