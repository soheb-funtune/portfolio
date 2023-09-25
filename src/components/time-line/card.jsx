import React from "react";
import "./time-line.css";
import { TfiHandPointRight } from "react-icons/tfi";
import { motion } from "framer-motion";

const Card = ({ profession, role, from, duration }) => {
  return (
    <div style={{ display: "flex", gap: "5px" }}>
      <div className="side-icon">
        <TfiHandPointRight className="icon" />
      </div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="card"
      >
        <div className="actual-card">
          <p className="staticHead">{profession}</p>
          <p>{role}</p>
          <p>{from}</p>
          <p className="staticHead">{duration}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
