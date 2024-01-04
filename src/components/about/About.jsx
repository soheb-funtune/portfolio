import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import Tooltip from "../Tooltip/Tooltip";

const About = () => {
  return (
    <div className="about-wrapper">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Tooltip id="tooltip-about">
          <h2
            id="about"
            className="about-text"
            // href="#home"
            data-tooltip-id="tooltip-about"
            data-tooltip-html={`<h3>This is My Tooltip </h3><div>This is My Tooltip! A React JS Developer who loves solving problems and building projects. I am equipped with a variety of technologies and</div> `}
            data-tooltip-variant={"warning"}
            // data-tooltip-content={`This is My Tooltip!`}
          >
            ABOUT <span>ME</span>
          </h2>
        </Tooltip>

        <div className="container">
          <div className="image">
            <img src="/soheb2.jpg" alt="profile" />
          </div>
          <div className="content">
            <h4 className="h4">
              Hi , I am <span className="diffColor">Mohammed Soheb </span>
              from <span className="diffColor">Nanded, Maharashtra. </span>{" "}
              <br /> I have Completed my B-Tech in{" "}
              <span className="diffColor">
                Computer Science and Engineering
              </span>{" "}
              in 2023 from{" "}
              <span className="diffColor">
                Matoshri Pratishthan Group of Institute Nanded.
              </span>
              <br /> I have Completed my Diploma in{" "}
              <span className="diffColor">
                Computer Science and Engineering
              </span>{" "}
              in 2020 from{" "}
              <span className="diffColor">
                Matoshri Pratishthan Vishwabharati College Nanded.
              </span>
              <br />
              apart from Education I have Completed {` `}
              <span className="diffColor">
                11 months of Internship In React.js Developement
              </span>
            </h4>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
