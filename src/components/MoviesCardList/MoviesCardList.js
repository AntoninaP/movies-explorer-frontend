import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {

  return (
    <section className="moviescardlist">
      {/*props.movies.map((movie, i) => (*/}
      {/*<MoviesCard key={movie._id} movies={movies}*/}
      {/*/>*/}
      <MoviesCard />
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
    </section>
  );
}

export default MoviesCardList;
