import React from "react";
import "./about.css";
import ME from "../../assets/me.png";
import { LuAward } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-imag">
            <img src={ME} alt="about image"></img>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <LuAward className="about__icon" />
              <h5>Experience</h5>
              <small>+3 Years</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>+200 Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>+20 Completed</small>
            </article>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            quisquam quod ea officiis, voluptas labore obcaecati ullam
            molestias! Nam, quibusdam corrupti. Quis laudantium, aperiam atque
            sit ut molestias repudiandae maiores?
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
