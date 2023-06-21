import React from "react";
import "./Profile.css";
import { useFormAndValidation } from "../../utils/hooks/useFormAndValidation";
import CurrentUserContext from "../../context/CurrentUserContext";
import { emailRegexp } from "../../utils/constants";

export default function Profile({ handleLogOut, handleUserInfo }) {
  const { values, handleChange, errors, isValid, setValues } =
    useFormAndValidation({});
  const currentUser = React.useContext(CurrentUserContext);

  function handleSubmit(evt) {
    evt.preventDefault();
    handleUserInfo(values.name, values.email);
  }

  React.useEffect(() => {
    setValues(currentUser);
  }, [currentUser, isValid]);

  return (
    <section className="profile">
      <h1 className="profile__title">Привет, {currentUser.name}!</h1>
      <form className="form profile__form" onSubmit={handleSubmit} noValidate>
        <div className="profile__text-container">
          <label className="profile__text">Имя</label>
          <input
            value={values.name || ""}
            onChange={handleChange}
            name="name"
            className="profile__input"
            minLength="2"
            required
          />
        </div>
        <span className="profile__error">{errors.name}</span>
        <div className="profile__line"></div>
        <div className="profile__text-container">
          <label className="profile__text">E-mail</label>
          <input
            value={values.email || ""}
            onChange={handleChange}
            name="email"
            className="profile__input"
            minLength="2"
            required
            pattern={emailRegexp}
          />
        </div>
        <span className="profile__error">{errors.name}</span>
      </form>
      <button
        className="profile__button-submit"
        type="submit"
        disabled={
          !isValid || JSON.stringify(values) === JSON.stringify(currentUser)
        }
      >
        Редактировать
      </button>
      <button className="profile__button-exit" onClick={() => handleLogOut()}>
        Выйти из аккаунта
      </button>
    </section>
  );
}
