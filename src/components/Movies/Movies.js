import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function Movies(props) {
  console.log(props.movies)
  return (
    <section className="movies">
      <SearchForm onSearch={props.onSearch}/>
      <Preloader isOn={props.isPreloaderOn}/>
      <MoviesCardList movies={props.movies} setLike={props.saveMovie} setDislike={props.deleteMovie}/>
      <button className={props.isShowMore ? "movies__button" : 'movies__button_disabled' } onClick={props.countClick}>Еще</button>
    </section>
  );
}

export default Movies;
