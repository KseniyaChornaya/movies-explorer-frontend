import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Forms.css";

export default function Forms() {
  //   const { pathname } = useLocation();
  //   const isLoginPage = pathname === "/signin";

  return (
    <template className="form-template">
      <img className="form-template__logo" src={logo} alt="Логотип" />
      <h1 className="form-template__title">
        Рады видеть!
        {/* {isLoginPage ? "Рады видеть!" : "Добро пожаловать!"} */}
      </h1>
      <form className="form" noValidate>
        <div className="form__input-container">
          <label className="form__input-label">Имя</label>
          <input
            minLength="2"
            name="name"
            className="form__input"
            type="text"
            required
            placeholder="Виталий"
          />
          {/* <span className="form__input-error">{errors.name}</span> */}
        </div>
        <div className="form__input-container">
          <label className="form__input-label">E-mail</label>
          <input
            minLength="2"
            name="email"
            className="form__input"
            type="email"
            required
            placeholder="pochta@yandex.ru|"
          />
          {/* <span className="form__input-error">{errors.email}</span> */}
        </div>
        <div className="form__input-container">
          <label className="form__input-label">Пароль</label>
          <input
            minLength="2"
            name="password"
            className="form__input"
            type="password"
            required
            placeholder="••••••••••••••"
          />
          {/* {!isLoginPage ? (
            <span className="form__input-error">Что-то пошло не так...</span>
          ) : null} */}
        </div>
        <button className="form__submit" type="submit">
          Войти
        </button>
      </form>
      <p className="form__text">
        Еще не зарегистрированы?
        {/* {isLoginPage ? "Еще не зарегистрированы?" : "Уже зарегистрированы?"} */}
        <a className="form__link">Регистрация</a>
      </p>
    </template>
  );
}
