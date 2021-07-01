import React from "react";
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

function MoviesCard(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isLiked = props.movie.owner === currentUser._id;

  // console.log(props.movie.nameRU, props.movie.owner, currentUser._id)

  function handleLike(e) {
    if (isLiked) {
      props.setDislike(props.movie.movieId ? props.movie.movieId : props.movie.id)
    } else {
      props.setLike(props.movie)
    }
  }


  return (
    <div className="moviescard">
      <div className="moviescard__description">
        <div className="moviescard__text">
          <h3 className="moviescard__title">{props.movie.nameRU}</h3>
          <p className="moviescard__duration">{props.movie.duration}</p>
        </div>
        <button className={`moviescard__likebutton ${isLiked ?
          'moviescard__likebutton_active' : 'moviescard__likebutton'}`}
                onClick={handleLike}></button>
      </div>
      <img src={props.movie.image} alt="кадр из фильма" className="moviescard__picture"
           onClick={props.onPopupPreviewOpen}/>
    </div>
  );
}

export default MoviesCard;
