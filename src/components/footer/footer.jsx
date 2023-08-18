import React from "react";
import "./footer.css";
import { AiTwotoneHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="innter-container">
        <>
          <h5 className="heading-text">
            Contact No : <span>9604376207</span>
          </h5>
          <h4 className="heading-text">
            Email : <span>sohebs5050@gmail.com</span>
          </h4>
        </>
      </div>
      <h2>
        Made with <AiTwotoneHeart /> By Mohammad Soheb
      </h2>
    </div>
  );
};

export default Footer;
