import React from "react";
import arrow from "../../images/arrow.svg";

function Portfolio() {

  return (
    <section className="portfolio">
        <div className="portfolio__title">Портфолио</div>
        <div className="portfolio__item">
          <p className="portfolio__project">Статичный сайт</p>
          <a href="https://github.com/AntoninaP/how-to-learn" className="portfolio__link">
            <img src={arrow} alt="изображение стрелки" className="portfolio__icon"/>
          </a>
        </div>
        <div className="portfolio__item">
          <p className="portfolio__project">Адаптивный сайт</p>
          <a href="https://github.com/AntoninaP/russian-travel" className="portfolio__link">
            <img src={arrow} alt="изображение стрелки" className="portfolio__icon"/>
          </a>
        </div>
        <div className="portfolio__item">
          <p className="portfolio__project">Одностраничное приложение</p>
          <a href="https://github.com/AntoninaP/react-mesto-api-full" className="portfolio__link">
            <img src={arrow} alt="изображение стрелки" className="portfolio__icon"/>
          </a>
        </div>
    </section>
  );
}

export default Portfolio;
