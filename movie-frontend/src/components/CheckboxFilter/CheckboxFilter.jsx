import React from "react";

export default function CheckBoxFilter() {
  return (
    <label className="filter">
      <input type="checkbox" id="switch" className="filter__button" />
      <span className="filter__movie"></span>
      Короткометражки
    </label>
  );
}
