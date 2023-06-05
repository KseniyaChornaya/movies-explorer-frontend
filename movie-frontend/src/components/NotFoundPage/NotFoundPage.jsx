import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFoundPage";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <div className="error-page__container">
        <h4 className="error-page__title">404</h4>
        <p className="error-page__text">Страница не найдена</p>
      </div>
      <div
        className="error-page__button"
        onClick={() => {
          navigate(-1);
        }}
      >
        Назад
      </div>
    </div>
  );
}
