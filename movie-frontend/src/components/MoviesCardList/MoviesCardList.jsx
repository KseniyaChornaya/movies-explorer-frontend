import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import moviesList from "../../utils/constants";
import { useLocation } from "react-router-dom";
export default function MovieCardList() {
  const { pathname } = useLocation();
  const isMoviesPage = pathname === "/movies";

  return (
    <section className="moviesList">
      <ul className="moviesList__container">
        {moviesList.map((item) => {
          return (
            <MoviesCard key={item.id} item={item} isMoviesPage={isMoviesPage} />
          );
        })}
      </ul>
    </section>
  );
}
