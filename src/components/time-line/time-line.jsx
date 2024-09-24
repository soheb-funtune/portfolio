import React from "react";

import "./time-line.css";
import Card from "./card";
const TimeLine = () => {
  const timeLineArray = [
    {
      profession: "Full time Developer",
      role: "React js Developer",
      from: "Fyntune Solution Private Limited.",
      duration: "jan 2023 - Aug 2024",
    },
    {
      profession: "Developer",
      role: "Internship in React js",
      from: "pickUp Bizz Software.",
      duration: "feb 2022 - jan 2023",
    },
    {
      profession: "Student",
      role: "B-tech in Computer Science and Engineering",
      from: "Matoshri Pratishthan Group of Institute Nanded.",
      duration: "june 2020 - june 2023",
    },
    {
      profession: "Student",
      role: "Diploma in Computer Science",
      from: "Matoshri Pratishthan Vishwabharti Polytechnic.",
      duration: "june 2017 - june 2020",
    },
  ];
  return (
    <div className="time-line">
      <h2 className="heading-text">
        Time <span>Line</span>
      </h2>
      {timeLineArray?.map((item) => (
        <Card key={item?.duration} {...item} />
      ))}
    </div>
  );
};

export default TimeLine;
