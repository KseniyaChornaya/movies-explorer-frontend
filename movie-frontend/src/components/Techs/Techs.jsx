import React from "react";
import "./Techs";

export default function Techs() {
  return (
    <section className="techs">
      <h2 className="techs-project">Технологии</h2>
      <div className="techs-wrapper">
        <h3 className="techs__title">7 технологий</h3>
        <p className="techs__text">
          На курсе мы освоили технологии, которые применили в дипломном проекте
        </p>
        <ul className="techs__list">
          <li className="techs__list-item">HTML</li>
          <li className="techs__list-item">CSS</li>
          <li className="techs__list-item">JS</li>
          <li className="techs__list-item">React</li>
          <li className="techs__list-item">Git</li>
          <li className="techs__list-item">Express.js</li>
          <li className="techs__list-item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}
