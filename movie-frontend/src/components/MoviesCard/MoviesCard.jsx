import React from "react";
import "./MoviesCard.css";

export default function MoviesCard() {
  return (
    <li className="movie__card">
      <img className="movie__image" alt="Картинка" />
      <div className="info__container">
        <div className="movie__describe">
          <h2 className="movie__title"></h2>
          <p className="movie__duration"></p>
        </div>
        <button type="button" className="movie__save-button "></button>
      </div>
    </li>
  );
}
