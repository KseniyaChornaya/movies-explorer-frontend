import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MovieCardList from "../MoviesCardList/MoviesCardList";
import "./Movies.css";

export default function Movie() {
  return (
    <main className="movie">
      <SearchForm />
      <MovieCardList />
      <button className="movies__more-button" type="button">
        Ещё
      </button>
    </main>
  );
}
