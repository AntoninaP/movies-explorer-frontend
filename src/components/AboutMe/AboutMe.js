import React from "react";
import myphoto from "../../images/myphoto.jpg";
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {

  return (
    <section className="aboutme">
      <h3 className="section__title">Студент</h3>
      <div className="aboutme__box">
        <img src={myphoto} alt="фото Поляковой Антонины" className="aboutme__photo"/>
        <div className="aboutme__content">
          <h2 className="aboutme__title">Антонина</h2>
          <h4 className="aboutme__subtitle">Фронтенд-разработчик</h4>
          <p className="aboutme__text">Я родилась и живу в Санкт-Петербурге, закончила Технологический Институт.
            С 2005 года работала в сфере строительства. Изучаю веб-разработку, планирую сменить профессию.
            Увлекаюсь различными видами спорта.</p>
          <div className="aboutme__links">
            <a className="aboutme__link" href="https://ru-ru.facebook.com">Facebook</a>
            <a className="aboutme__link" href="https://github.com/AntoninaP">Github</a>
          </div>
        </div>
      </div>
      <Portfolio/>
    </section>
  );
}

export default AboutMe;
