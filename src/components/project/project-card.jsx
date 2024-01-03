import React from "react";
import "./project.css";
import { motion } from "framer-motion";

const ProjectCard = ({ title, text, imgpath, link, github, github2 }) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="project-card"
    >
      <img src={`./${imgpath}`} alt="project" />
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="desc">{text}</p>
        {github && (
          <a className="links" href={github} target="_blank">
            Front-end Source Code
          </a>
        )}
        {github2 && (
          <a className="links" href={github2} target="_blank">
            Back-end Source Code
          </a>
        )}
        {link && (
          <a className="links" href={link} target="_blank">
            Actual Website Link
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
