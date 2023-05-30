import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./BurgerMenu";

export default function Burger() {
  const location = useLocation();

  //устанавливаем классы
  const [menuClass, setMenuClass] = useState(
    "burger-menu burger-menu_type_hidden"
  );
  const [burgerClass, setBurgerClass] = useState("burger__toggle-button");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //переключаем меню
  const toggleMenu = () => {
    if (!isMenuOpen) {
      setMenuClass("burger-menu");
      setBurgerClass("burger__toggle-button burger__toggle-button_type_close");
    } else {
      setMenuClass("burger-menu burger-menu_type_hidden");
      setBurgerClass("burger__toggle-button");
    }
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="burger">
      <button className={burgerClass} onClick={toggleMenu}></button>
      <nav className={menuClass}>
        <ul className="burger-menu__list">
          <li className="burger-menu__item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "burger-menu__link_type_active" : "burger-menu__link"
              }
            >
              Главная
            </NavLink>
          </li>
          <li className="burger-menu__item">
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                isActive ? "burger-menu__link_type_active" : "burger-menu__link"
              }
            >
              Фильмы
            </NavLink>
          </li>
          <li className="burger-menu__item">
            <NavLink
              to="/saved-movies"
              className={({ isActive }) =>
                isActive ? "burger-menu__link_type_active" : "burger-menu__link"
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
      </nav>
    </div>
  );
}
