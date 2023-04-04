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
          <p className="footer__link">Яндекс.Практикум</p>
          <p className="footer__link">Github</p>
        </div>
      </div>
    </footer>
  );
}
