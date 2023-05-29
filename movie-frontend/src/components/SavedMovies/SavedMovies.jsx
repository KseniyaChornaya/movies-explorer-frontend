import React from "react";
import "./SavedMovies";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function SavedMovies({ savedMovie }) {
  return (
    <main className="saved-movies">
      <SearchForm />
      <MoviesCardList />
    </main>
  );
}
