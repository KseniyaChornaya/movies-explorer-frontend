import React from "react";
import "./Promo";

export default function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="text__container">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className="promo__text">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <a className="promo__link" href="#about-project">
            Узнать больше
          </a>
        </div>
        <div className="promo__logo" alt="Логотип"></div>
      </div>
    </section>
  );
}
