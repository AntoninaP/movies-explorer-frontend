import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function SavedMovies(props) {

  return (
    <section className="savedmovies">
      <SearchForm onSearch={props.onSearch}/>
      <Preloader isOn={props.isPreloaderOn}/>
      <MoviesCardList movies={props.movies} setLike={props.saveMovie} setDislike={props.deleteMovie} fromSaved={true}/>
    </section>
  );
}

export default SavedMovies;
