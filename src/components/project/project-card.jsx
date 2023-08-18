import React from "react";
import "./project.css";
import { motion } from "framer-motion";

const ProjectCard = () => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="project-card"
    >
      <img src={"./rb-uat.png"} alt="project" />
      <div className="content">
        <h3 className="title">Motor Insurance</h3>
        <p className="desc">
          This is a Motor Insurace web-side which is Developed to provide
          insurance anywhere.
          <br /> We provide insurance to all type of vehicles like (Bike, Car,
          Comarcial Vehicle, GCV ,Tractor etc)
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
