import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function Movies(props) {

  const [clickCounter, changeClickCounter] = React.useState(0);

  function countClicks() {
    changeClickCounter(clickCounter + 1);
    console.log(clickCounter)
  }

  return (
    <section className="movies">
      <SearchForm onSearch={props.onSearch}/>
      <Preloader isOn={props.isPreloaderOn}/>
      <MoviesCardList movies={props.movies} setLike={props.saveMovie} setDislike={props.deleteMovie}/>
      <button className="movies__button" onClick={countClicks}>Еще</button>
    </section>
  );
}

export default Movies;
