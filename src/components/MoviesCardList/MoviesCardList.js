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
              <MoviesCard movie={movie} key={movie.id}
                          onPopupPreviewOpen={handlePopupPreviewClick}
              />
              <PopupPreview isOpen={isPopupPreviewOpen}
              onClose={handlePopupPreviewButtonClick}/>
            </>
          ))
      }
      }
    </section>
  );
}

export default MoviesCardList;

{/*props.movies.map((movie, i) => (*/
}
{/*<MoviesCard key={movie._id} movies={movies}*/
}
{/*/>*/
}
