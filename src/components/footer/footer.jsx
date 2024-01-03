import React from "react";
import "./footer.css";
import { AiTwotoneHeart } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { MdEmail, MdLocationOn, MdLocationPin } from "react-icons/md";
import { BiSolidPhone, BiUpArrowCircle } from "react-icons/bi";

const Footer = () => {
  const handleGoUp = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div id="contact" className="footer-container">
      <h3 className="logoh3">
        <a href="#header">Sayyad Soheb</a>
      </h3>
      <div className="inner">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <h6 className="contact-text">
            Contact No : {` `} <span> {` `} 9604376207</span>
          </h6>
          <h6 className="contact-text">
            Email : {` `} <span>{` `} sohebs5050@gmail.com</span>
          </h6>
          <h6 className="contact-text">
            Address : {` `}{" "}
            <span>
              {` `} Khupsarwadi, Vishnuputi, Nanded, Maharashtra, India.
            </span>
          </h6>
        </motion.div>
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
      <motion.h3
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        className="copy-write"
      >
        Made with{" "}
        <AiTwotoneHeart
          style={{ color: "red", margin: "0px 10px", fontSize: "30px" }}
        />{" "}
        By Mohammad Soheb
      </motion.h3>
      <div className="up-arrow">
        <BiUpArrowCircle onClick={() => handleGoUp()} className="icon" />
      </div>
    </div>
  );
};

export default Footer;
