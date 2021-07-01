import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies(props) {

  return (
    <section className="savedmovies">
      <SearchForm/>
      <MoviesCardList movies={props.movies} setLike={props.saveMovie} setDislike={props.deleteMovie} fromSaved={true}/>
    </section>
  );
}

export default SavedMovies;
