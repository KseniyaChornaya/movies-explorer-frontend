import React from "react";
import "./AboutMe";
import myPhoto from "../../images/student.svg";

export default function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__section">Студент</h2>
      <div className="about-me__container">
        <article className="about-me__wrapper">
          <h3 className="about-me__name">Ксения</h3>
          <h4 className="about-me__profession">Фронтенд-разработчик, 31 год</h4>
          <p className="about-me__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className="about-me__link"
            href="https://github.com/KseniyaChornaya?tab=repositories"
            target="_blank"
          >
            Github
          </a>
        </article>
        <img className="about-me__photo" src={myPhoto} alt="Мое фото" />
      </div>
    </section>
  );
}
