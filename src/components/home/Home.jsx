import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";
import { motion, AnimatePresence } from "framer-motion";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { MdEmail, MdLocationOn, MdLocationPin } from "react-icons/md";
import { BiSolidPhone } from "react-icons/bi";

const Home = () => {
  return (
    <div id={"home"} className="home-wrapper">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.3, duration: 1 }}
        className="name"
      >
        Hi, I am Sayyad Soheb
      </motion.h1>
      <h3 className="profession">
        <Typewriter
          options={{
            strings: [
              "A React js Developer",
              "A Front-End Developer",
              "A JavaScript Developer",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h3>
      <AnimatePresence>
        <motion.h3
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="profession-desc"
        >
          A Front-End Developer who loves solving problems and building
          projects. I am equipped with a variety of technologies and tools to
          help me build the best possible product.
        </motion.h3>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="social-media"
        >
          <a target="_blank" href="https://github.com/soheb-funtune">
            <BsGithub className="icon" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/soheb-sayyad-a31730225/"
          >
            <BsLinkedin className="icon" />
          </a>
          <a target="_blank" href="https://www.instagram.com/shoheb8899/">
            <BsInstagram className="icon" />
          </a>
          <a target="_blank" href="mailto:sohebs5050@gmail.com">
            <MdEmail className="icon" />
          </a>
          <a target="_blank" href="tel:+919604376207">
            <BiSolidPhone className="icon" />
          </a>
          <a target="_blank" href="https://github.com/soheb-funtune">
            <MdLocationPin className="icon" />
          </a>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Home;
