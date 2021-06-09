import React from "react";

function AboutProject() {

  return (
    <section className="aboutproject">
      <h3 className="section__title">О проекте</h3>
      <div className="aboutproject__content">
          <h4 className="aboutproject__text-title">Дипломный проект включал 5 этапов</h4>
          <p className="aboutproject__text">Составление плана, работу над бэкендом, вёрстку,
            добавление функциональности и финальные доработки.</p>
          <h4 className="aboutproject__text-title">На выполнение диплома ушло 5 недель</h4>
          <p className="aboutproject__text">У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className="aboutproject__time-table">
        <div className="aboutproject__backend">1 неделя</div>
        <div className="aboutproject__frontend">4 недели</div>
        <div className="aboutproject__subject">Back-end</div>
        <div className="aboutproject__subject">Front-end</div>
      </div>
    </section>
  );
}

export default AboutProject;
