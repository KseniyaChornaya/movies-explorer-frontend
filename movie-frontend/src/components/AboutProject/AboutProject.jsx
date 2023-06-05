import React from "react";
import "./AboutProject";

export default function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <div className="about-project__container">
        <h2 className="about-project__text">О проекте</h2>
        <ul className="about-project__stage">
          <li className="about-project__item">
            <h3 className="stage-project__title">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="stage-project__text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки
            </p>
          </li>
          <li className="about-project__item">
            <h3 className="stage-project__title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="stage-project__text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься
            </p>
          </li>
        </ul>
        <div className="stage-project__wrapper">
          <div className="project-time__item-green">
            <p className="project-time__weeks color-item">1 неделя</p>
            <p className="project-time__text">Back-end</p>
          </div>
          <div className="project-time__item-gray">
            <p className="project-time__weeks">4 недели</p>
            <p className="project-time__text">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}
