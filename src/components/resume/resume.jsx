import React, { useState } from "react";
import "./resume.css";
import MyDocument from "./pdf-page/pdf-page.jsx";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { motion } from "framer-motion";
import { useMediaPredicate } from "react-media-hook";

const Resume = () => {
  const [preview, setPreview] = useState(false);
  const lessthan767 = useMediaPredicate("(max-width:767px)");
  return (
    <div className="resume-container">
      <h2 id={"resume"} className="heading-text">
        Res<span>ume </span>
      </h2>
      <div className="buttons">
        {/* <PDFDownloadLink document={<MyDocument />} fileName="FORM">
          {({ loading }) =>
            loading ? <button>...Loading</button> : <button>Download</button>
          }
        </PDFDownloadLink> */}

        {/* <button onClick={() => setPreview(!preview)}>
          {preview ? "Hide Resume " : "Preview Resume"}
        </button> */}
        {/* // new resume */}
        <a href="/sayyad-resume.pdf" download>
          Updated Resume Donwload
        </a>
        <button onClick={() => window.open("/sayyad-resume.pdf", "_blank")}>
          Preview
        </button>
      </div>
      {preview ? (
        <motion.div
          style={{ display: "flex", justifyContent: "center" }}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          exit={{ x: -100, opacity: 0 }}
        >
          <PDFViewer
            style={{
              width: lessthan767 ? "100%" : "80%",
              margin: "40px auto 40px",
              height: "100vh",
              borderRadius: "20px",
            }}
          >
            <MyDocument />
          </PDFViewer>
        </motion.div>
      ) : (
        <noscript />
      )}
    </div>
  );
};

export default Resume;
