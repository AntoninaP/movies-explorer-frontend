import React from "react";
import {useHistory} from "react-router-dom";


function PageNotFound() {
  const history = useHistory();

  return (
    <section className="page-not-found">
      <h3 className="page-not-found__title">404</h3>
      <p className="page-not-found__subtitle">Страница не найдена</p>
      <button className="page-not-found__button" onClick={() => history.goBack()}>
        Назад
      </button>
    </section>
  );
}

export default PageNotFound;
