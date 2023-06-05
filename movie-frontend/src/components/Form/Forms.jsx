import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo1.svg";
import "./Forms.css";

export default function Forms() {
  const { pathname } = useLocation();
  const isLoginPage = pathname === "/signin";

  return (
    <template className="form-template">
      <Link to="/">
        <img className="form-template__logo" src={logo} alt="Логотип" />
      </Link>
      <h1 className="form-template__title">
        {isLoginPage ? "Рады видеть!" : "Добро пожаловать!"}
      </h1>
      <form className="form" noValidate>
        <div className="form__input-container">
          <label className="form__input-label">Имя</label>
          <input
            minLength="2"
            name="name"
            className="form__input"
            type="text"
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
            placeholder="pochta@yandex.ru|"
          />
          {/* <span className="form__input-error">{errors.email}</span> */}
        </div>
        {!isLoginPage ? (
          <div className="form__input-container">
            <label className="form__input-label">Пароль</label>
            <input
              minLength="2"
              name="password"
              className="form__input form__input_type_error"
              type="password"
              placeholder="••••••••••••••"
            />
            <span className="form__input-error">Что-то пошло не так...</span>
          </div>
        ) : null}
      </form>
      {isLoginPage ? (
        <>
          <button className="form__submit" type="submit">
            Войти
          </button>
          <p className="form__text">
            Еще не зарегистрированы?
            <Link to="/signup" className="form__link">
              Регистрация
            </Link>
          </p>
        </>
      ) : (
        <>
          <button className="form__submit" type="submit">
            Зарегистрироваться{" "}
          </button>
          <p className="form__text">
            Уже зарегистрированы?
            <Link to="/signin" className="form__link">
              Войти
            </Link>
          </p>
        </>
      )}
    </template>
  );
}
