import React from "react";
import "./Portfolio";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h4 className="section-name">Портфолио</h4>
      <ul className="projects-list">
        <li className="list-item">
          <a
            className="project-link"
            href="https://github.com/KseniyaChornaya/how-to-learn"
            target="_blank"
          >
            <p className="link-text">Статичный сайт</p>
            <span className="arrow-link"></span>
          </a>
        </li>
        <li className="list-item">
          <a
            className="project-link"
            href="https://github.com/KseniyaChornaya/russian-travel"
            target="_blank"
          >
            <p className="link-text">Адаптивный сайт</p>
            <span className="arrow-link"></span>
          </a>
        </li>
        <li className="list-item">
          <a
            className="project-link"
            href="https://github.com/KseniyaChornaya/react-mesto-api-full"
            target="_blank"
          >
            <p className="link-text">Одностраничное приложение</p>
            <span className="arrow-link"></span>
          </a>
        </li>
      </ul>
    </section>
  );
}
