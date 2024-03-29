import React from "react";
import "./Profile.css";
// import { useFormAndValidation } from "../../hooks/useFormAndValidation.js";
// import { CurrentUserContext } from "../../context/CurrentUserContext";
import { UrlRegExp } from "../../utils/constans";

export default function Profile() {
  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form className="form profile__form" noValidate>
        <div className="profile__text-container">
          <label className="profile__text">Имя</label>
          <label className="profile__text">Виталий</label>
          {/* <input
            // value={values.name || ""}
            // onChange={handleChange}
            name="name"
            className="profile__input"
            minLength="2"
            required
          /> */}
        </div>
        {/* <span className="profile__error">VVV</span> */}
        <div className="profile__line"></div>
        <div className="profile__text-container">
          <label className="profile__text">E-mail</label>
          <label className="profile__text">pochta@yandex.ru</label>
          {/* <input
            // value={values.email || ""}
            // onChange={handleChange}
            name="email"
            className="profile__input"
            minLength="2"
            required
            pattern={UrlRegExp}
          /> */}
        </div>
        {/* <span className="profile__error">VVVV</span> */}
      </form>
      <button className="profile__button-submit" type="submit">
        Редактировать
      </button>
      <button className="profile__button-exit">Выйти из аккаунта</button>
    </section>
  );
}
