import React from "react";
import author from "/personal.jpg";

import { FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">
      <img src={author} alt="Author Image" className="hero__image" />
      <div className="hero__details">
        <h1 className="hero__name">Serjay Antsibor</h1>
        <h2 className="hero__title">Front-End Developer</h2>
        <h3 className="hero__location">📍 London, United Kingdom</h3>
      </div>
      <ul className="hero__cta">
        <li>
          <a
            href="https://github.com/serjayd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hero__icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/serjayantsibor/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hero__icon" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Hero;
