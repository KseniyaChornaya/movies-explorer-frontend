import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./BurgerMenu";

export default function Burger() {
  const location = useLocation();

  //устанавливаем классы
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //переключаем меню
  const toggleMenu = () => {
    if (!isMenuOpen) {
      setMenuClass("menu visible");
      setBurgerClass("burger-bar clicked");
    } else {
      setMenuClass("menu hidden");
      setBurgerClass("burger-bar unclicked");
    }

    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="burger">
        <div className="burger__menu" onClick={toggleMenu}>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
        </div>
      </nav>
      <div className={menuClass}>
        <ul className="burger-menu__list">
          <li className="burger-menu__item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "burger-menu__link_active" : "burger-menu__link"
              }
            >
              Главная
            </NavLink>
          </li>
          <li className="burger-menu__item">
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                isActive ? "burger-menu__link_active" : "burger-menu__link"
              }
            >
              Фильмы
            </NavLink>
          </li>
          <li className="burger-menu__item">
            <NavLink
              to="/saved-movies"
              className={({ isActive }) =>
                isActive ? "burger-menu__link_active" : "burger-menu__link"
              }
            >
              Сохраненные фильмы
            </NavLink>
          </li>
        </ul>
        <NavLink
          className="burger-menu__link burger-menu__link-account"
          to="/profile"
        >
          Аккаунт
        </NavLink>
      </div>
    </>
  );
}
