import React from "react";
import "./Footer";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__copyright">
        <p className="footer__links footer__links_type_dark">
          &#xa9; {new Date().getFullYear()}
        </p>
        <div className="footer__link-wrapper">
          <a
            href="https://practicum.yandex.ru"
            className="footer__link"
            target="_blank"
          >
            Яндекс.Практикум
          </a>
          <a
            href="https://github.com/KseniyaChornaya?tab=repositories"
            className="footer__link"
            target="_blank"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}
