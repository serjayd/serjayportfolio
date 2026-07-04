import React from "react";
import saelogo from "/saelogo.png";
import nkclogo from "/nkclogo.png";
import { IoIosArrowDown } from "react-icons/io";

const EDUCATION = [
  {
    logo: saelogo,
    title: "BSc Web Development",
    institution: "SAE Institute London",
    period: "Sep 2025 - Present",
    units: [
      "4FSC0WE001 Web Design Fundamentals (A)",
      "4FSC0WE002 Web Development Basics (A)",
      "4FSC0WE003 Front-end Fundamentals (A)",
      "4FSC0WE004 Back-end Fundamentals (A)",
    ],
  },
  {
    logo: nkclogo,
    title: "BTEC Level 3 Information & Technology",
    institution: "North Kent College",
    period: "Sep 2023 - June 2024",
    units: [
      "R/507/6034 Using Social Media in Business (P)",
      "J/507/6032 Information Technology Systems (P)",
      "L/507/6033 Creating Systems to Manage Information (D)",
      "H/507/6037 Website Development (D)",
    ],
  },
];

const showUnits = (e) => {
  const btnUnit = e.target.parentElement.querySelector(".education__units");
  btnUnit.classList.toggle("show");
};

const Education = () => {
  return (
    <section className="education">
      <h2 className="title">Education</h2>
      {EDUCATION.map((edu) => (
        <div className="education__group" key={edu.title}>
          <img src={edu.logo} alt="Logo" className="education__logo" />
          <div>
            <h3 className="education__title">{edu.title}</h3>
            <p className="education__institution">{edu.institution}</p>
            <p className="education__period">{edu.period}</p>
            <button className="btn btn-secondary btn-units" onClick={showUnits}>
              <IoIosArrowDown /> View Units
            </button>
            <ul className="education__units">
              {edu.units.map((unit) => (
                <li className="education__unit" key={unit}>
                  {unit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Education;
