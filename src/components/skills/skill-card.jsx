import React from "react";
import "./skills.css";
import { motion } from "framer-motion";

const SkillCard = ({ LogoIcon, title }) => {
  return (
    <div className="skill-card-hover">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="skill-card"
      >
        <icon>
          <LogoIcon className="skill-icon" />
        </icon>
        <h3 className="skill-title">{title}</h3>
      </motion.div>
    </div>
  );
};

export default SkillCard;
