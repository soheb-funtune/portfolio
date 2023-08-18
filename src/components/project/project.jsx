import React from "react";
import ProjectCard from "./project-card";

const Project = () => {
  return (
    <div className="project">
      <h2 className="heading-text">
        PRO<span>JECTS </span>
      </h2>
      <div className="project-container">
        <ProjectCard />
      </div>
    </div>
  );
};

export default Project;
