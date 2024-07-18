import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/img-1.jpg";
import IMG2 from "../../assets/img-2.jpg";
import IMG3 from "../../assets/img-3.jpg";
import IMG4 from "../../assets/img-4.jpg";
import IMG5 from "../../assets/img-5.jpg";
import IMG6 from "../../assets/img-6.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5> My Recent Work</h5>
      <h2> Portfolio</h2>

      <div className="container portfolio-container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1}></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn" target="_blank">
              Github
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2}></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn" target="_blank">
              Github
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3}></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn" target="_blank">
              Github
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4}></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn" target="_blank">
              Github
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5}></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn" target="_blank">
              Github
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6}></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn" target="_blank">
              Github
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
