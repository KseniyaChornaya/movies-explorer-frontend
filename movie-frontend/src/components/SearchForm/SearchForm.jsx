import React from "react";
import "./SearchForm.css";
import CheckBoxFilter from "../CheckboxFilter/CheckboxFilter";

export default function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__container">
          <div className="input__container">
            <span className="search__icon"></span>
            <input
              className="search__input"
              placeholder="Фильм"
              type="text"
            ></input>
          </div>
          <button className="search__button" type="submit"></button>
        </div>
        <CheckBoxFilter />
      </form>
    </section>
  );
}
