import React from "react";
import pic1 from "../../images/pic1.jpg";
import save9d from "../../images/save9d.svg";

function MoviesCard() {

  return (
    <div className="moviescard">
      <div className="moviescard__description">
        <div className="moviescard__text">
          <h3 className="moviescard__title">33 слова о дизайне</h3>
          <p className="moviescard__duration">1ч 47м</p>
        </div>
        <img src={save9d} alt="иконка сохранения фильма"
             className="moviescard__icon"/>
      </div>
      <img src={pic1} alt="кадр из фильма" className="moviescard__picture"/>
    </div>
  );
}

export default MoviesCard;
