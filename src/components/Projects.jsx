import React from "react";
import storeDockImg from "/storeDockImg.png";
import { FaShareSquare } from "react-icons/fa";

const PROJECTS = [
  {
    title: "StoreDock",
    image: storeDockImg,
    link: "https://store-dock.vercel.app/",
    techs: [
      "Next.js",
      "Prisma",
      "TypeScript",
      "PostgreSQL",
      "Stripe",
      "Better Auth",
    ],
    achievements: [
      "Built a full-stack SaaS store platform with authentication and subscription-based access",
      "Implemented secure user authentication and authorization using Better Auth",
      "Integrated Stripe subscriptions with webhook-driven premium plan upgrades",
      "Designed product and user management system using Prisma ORM and PostgreSQL",
    ],
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="title">Projects</h2>

      {PROJECTS.map((project) => (
        <div className="projects__group" key={project.title}>
          <img
            src={project.image}
            alt={project.title}
            className="projects__image"
          />

          <div className="projects__details">
            <div className="projects__header">
              <h3 className="projects__title">{project.title}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <FaShareSquare />
                Live Demo
              </a>
            </div>

            <div className="projects__techs">
              {project.techs.map((tech) => (
                <span className="projects__tech" key={tech}>
                  {tech}
                </span>
              ))}
            </div>

            <ul className="projects__achievements">
              {project.achievements.map((achievement) => (
                <li className="projects__achievement" key={achievement}>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
