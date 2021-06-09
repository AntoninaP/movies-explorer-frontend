import React from "react";


function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__content">
        <p className="footer__year">&#169; {new Date().getFullYear()}</p>
        <div className="footer__links">
          <a className="footer__link" href="https://praktikum.yandex.ru/">Яндекс.Практикум</a>
          <a className="footer__link" href="https://ru-ru.facebook.com/">Facebook</a>
          <a className="footer__link" href="https://github.com/">Github</a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
