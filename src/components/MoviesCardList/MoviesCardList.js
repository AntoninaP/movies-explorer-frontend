import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import PopupPreview from "../PopupPreview/PopupPreview";

function MoviesCardList(props) {
//попап просмотра трейлера фильма
  const [isPopupPreviewOpen, setPopupPreviewOpen] = React.useState(false);

  function handlePopupPreviewClick() {
    setPopupPreviewOpen(true);
  }

  function handlePopupPreviewButtonClick() {
    setPopupPreviewOpen(false);
  }

  return (
    <section className="moviescardlist">
      {
        props.movies.map((movie) =>
          (
            <>
              <MoviesCard movie={movie} key={movie.movieId ? movie.movieId : movie.id}
                          onPopupPreviewOpen={handlePopupPreviewClick}
                          setLike={props.setLike} setDislike={props.setDislike}
                          fromSaved={props.fromSaved}

              />
              <PopupPreview movie={movie}
                            isOpen={isPopupPreviewOpen}
                            onClose={handlePopupPreviewButtonClick}/>
            </>
          ))
      }
    </section>
  );
}

export default MoviesCardList;

