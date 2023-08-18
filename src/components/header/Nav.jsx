import React, { useContext, useEffect, useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FaHamburger } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import "./Header.css";
import { ThemeContext } from "../context-wrapper/context-wrapp";
import { useMediaPredicate } from "react-media-hook";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [burger, setBurger] = useState(false);
  const lessthan600 = useMediaPredicate("(max-width: 600px)");
  const { state, dispatch } = useContext(ThemeContext);
  const [checkVal, setCheckVal] = useState(state?.mode);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };
  useEffect(() => {
    console.log({ state });
    dispatch({ type: checkVal });
  }, [checkVal]);
  return !lessthan600 ? (
    <nav className="nav desktop">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <a href="#resume">Resume</a>
      <>
        <label className="mode" htmlFor="mode">
          {checkVal === "light" ? (
            <MdDarkMode className="icon" />
          ) : (
            <MdOutlineLightMode className="icon" />
          )}
        </label>
        <input
          id="mode"
          type="checkbox"
          value={checkVal}
          onChange={() =>
            checkVal === "dark" ? setCheckVal("light") : setCheckVal("dark")
          }
        />
      </>
    </nav>
  ) : (
    <motion.nav className={`nav mobile ${burger ? "" : "hideBurger"}`}>
      {burger ? (
        <>
          <div className="menu cross">
            <RxCross1 className="icon" onClick={() => setBurger(!burger)} />
            <label className="mode" htmlFor="mode">
              {checkVal === "light" ? (
                <MdDarkMode className="icon" />
              ) : (
                <MdOutlineLightMode className="icon" />
              )}
            </label>
            <input
              id="mode"
              type="checkbox"
              value={checkVal}
              onChange={() =>
                checkVal === "dark" ? setCheckVal("light") : setCheckVal("dark")
              }
            />
          </div>
          <motion.div
            animate={burger ? "open" : "closed"}
            variants={variants}
            style={{ display: burger ? "flex" : "none" }}
            className="burgerContainer"
          >
            <a onClick={() => setBurger(false)} href="#home">
              Home
            </a>
            <a onClick={() => setBurger(false)} href="#about">
              About
            </a>
            <a onClick={() => setBurger(false)} href="#skills">
              Skills
            </a>
            <a onClick={() => setBurger(false)} href="#projects">
              Projects
            </a>
            <a onClick={() => setBurger(false)} href="#contact">
              Contact
            </a>
            <a onClick={() => setBurger(false)} href="#resume">
              Resume
            </a>
          </motion.div>
        </>
      ) : (
        <AnimatePresence>
          <div className="menu">
            <FaHamburger className="icon" onClick={() => setBurger(!burger)} />
            <label className="mode" htmlFor="mode">
              {checkVal === "light" ? (
                <MdDarkMode className="icon" />
              ) : (
                <MdOutlineLightMode className="icon" />
              )}
            </label>
            <input
              id="mode"
              type="checkbox"
              value={checkVal}
              onChange={() =>
                checkVal === "dark" ? setCheckVal("light") : setCheckVal("dark")
              }
            />
          </div>
        </AnimatePresence>
      )}
    </motion.nav>
  );
};

export default Nav;
