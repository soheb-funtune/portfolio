import React from "react";
import ProjectCard from "./project-card";

const Project = () => {
  const projectArr = [
    {
      title: "Motor Insurance ",
      text: `This is a Motor Insurace web-side which is Developed to provide
      insurance anywhere. We provide insurance to all type of vehicles like
      (Bike, Car, Comarcial Vehicle, GCV ,Tractor etc)`,
      imgpath: `rb-uat.png`,
      link: "https://uatcar.rbstaging.in/landing-page",
    },
    {
      title: "Shopper-e-Clothing",
      text: `This is a SHOPPER webside, in Which we have different type of cloths for Men, Women and kids `,
      imgpath: `shop.PNG`,
      link: "https://graceful-biscochitos-8a415c.netlify.app/",
      github: "https://github.com/soheb-funtune/e-com-front-end",
      github2: "https://github.com/soheb-funtune/e-com-back-end",
    },
  ];
  return (
    <div className="project">
      <h2 className="heading-text">
        PRO<span>JECTS </span>
      </h2>
      <div className="project-container">
        {projectArr?.map((item, i) => (
          <ProjectCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Project;
