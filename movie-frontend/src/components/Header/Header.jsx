import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header";

export default function Header() {
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  const isLoggedPages =
    location.pathname === "/profile" ||
    location.pathname === "/movies" ||
    location.pathname === "/saved-movies";

  return (
    <header className={`header ${isMainPage ? "header_theme_dark" : null}`}>
      <Link to="/" className="header__logo-link" />
      {isMainPage && (
        <nav className="header__navigation">
          <ul className="header__navigation-list">
            <li className="header__navigation-item">
              <NavLink className="header__navigation-link" to="/signup">
                Регистрация
              </NavLink>
            </li>
            <li className="header__navigation-item">
              <NavLink
                className="header__navigation-link header__navigation-link_highlight"
                to="/signin"
              >
                Войти
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
      {isLoggedPages && <Navigation />}
    </header>
  );
}
