import React from "react";
import { NavLink } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [isBurger, setIsBurger] = useState(false);
  const showBurgerMenu = () => {
    if (window.innerWidth < 780) {
      setIsBurger(true);
    } else {
      setIsBurger(false);
    }
  };

  useEffect(() => {
    showBurgerMenu();
    window.addEventListener("resize", showBurgerMenu);

    return () => {
      window.removeEventListener("resize", showBurgerMenu);
    };
  }, []);

  return (
    <>
      {isBurger ? (
        <BurgerMenu />
      ) : (
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  isActive ? "navigation__link_active" : "navigation__link"
                }
              >
                Фильмы
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink
                to="/saved-movies"
                className={({ isActive }) =>
                  isActive ? "navigation__link_active" : "navigation__link"
                }
              >
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
          <NavLink to="/profile" className="navigation__link-account">
            Аккаунт
          </NavLink>
        </nav>
      )}
    </>
  );
}
