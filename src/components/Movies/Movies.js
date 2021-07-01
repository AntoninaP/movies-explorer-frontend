import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies(props) {

  return (
    <section className="movies">
      <SearchForm onSearch={props.onSearch} onPreloaderOn={props.onPreloaderOn}/>

      <MoviesCardList movies={props.movies} setLike={props.saveMovie} setDislike={props.deleteMovie}/>
      <button className="movies__button">Еще</button>
    </section>
  );
}

export default Movies;
