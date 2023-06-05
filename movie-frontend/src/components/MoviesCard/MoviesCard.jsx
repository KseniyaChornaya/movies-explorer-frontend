import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

export default function MoviesCard({ item, isMoviesPage }) {
  const [savedMovie, setSavedMovie] = useState(false);

  const onButtonSaveClick = () => {
    setSavedMovie((prev) => !prev);
  };

  return (
    <li className="movie__card">
      <img className="movie__image" src={item.image} alt={`${item.nameRU}.`} />
      <div className="info__container">
        <div className="movie__describe">
          <h2 className="movie__title"> {item.nameRU}</h2>
          <p className="movie__duration"> {item.duration}</p>
        </div>
        {isMoviesPage ? (
          savedMovie ? (
            <button
              className="movie__save-button movie__save-button_type_active"
              type="button"
              onClick={onButtonSaveClick}
            />
          ) : (
            <button
              className="movie__save-button"
              type="button"
              onClick={onButtonSaveClick}
            ></button>
          )
        ) : (
          <button
            className="movie__save-button movie__button_type_delete"
            type="button"
          />
        )}
      </div>
    </li>
  );
}
