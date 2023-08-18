import React, { useState } from "react";
import "./Header.css";
import Nav from "./Nav";
import { useMediaPredicate } from "react-media-hook";

const Header = () => {
  const lessthan600 = useMediaPredicate("(max-width: 600px)");
  return (
    <div className="header">
      <h3>
        <a href="#home">Sayyad Soheb</a>
      </h3>
      <Nav />
    </div>
  );
};

export default Header;
