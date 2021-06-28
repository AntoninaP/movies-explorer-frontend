import React from "react";
import PopupPreview from "../PopupPreview/PopupPreview";

function MoviesCard(props) {

  const img = 'https://api.nomoreparties.co'+props.movie.image.url;

  return (
    <div className="moviescard">
      <div className="moviescard__description">
        <div className="moviescard__text">
          <h3 className="moviescard__title">{props.movie.nameRU}</h3>
          <p className="moviescard__duration">{props.movie.duration}</p>
        </div>
        <button className="moviescard__savebutton"></button>
      </div>
      <img src={img} alt="кадр из фильма" className="moviescard__picture"
      onClick={props.onPopupPreviewOpen}/>
    </div>
  );
}

export default MoviesCard;
