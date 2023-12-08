import React from "react";
import "./project.css";
import { motion } from "framer-motion";

const ProjectCard = ({ title, text, imgpath }) => {
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
      </div>
    </motion.div>
  );
};

export default ProjectCard;
