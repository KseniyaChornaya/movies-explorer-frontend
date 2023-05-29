import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import moviesList from "../../utils/constans";
import { useLocation } from "react-router-dom";
export default function MovieCardList() {
  const { pathname } = useLocation();
  const isMoviesPage = pathname === "/movies";

  return (
    <section className="moviesList">
      <ul className="moviesList__container">
        {moviesList.map((item) => {
          return (
            <MoviesCard
              key={item.id}
              item={item}
              isMoviesPage={isMoviesPage}
              //   handleSaveMovie={handleSaveMovie}
              //   key={isMoviesPage ? item.id : item.movieId}
              //   item={item}
              //   isMoviesPage={isMoviesPage}
              //   handleDeleteMovie={handleDeleteMovie}
              //   savedMovies={savedMovies}
              //   movies={movies}
            />
          );
        })}
      </ul>
    </section>
  );
}
