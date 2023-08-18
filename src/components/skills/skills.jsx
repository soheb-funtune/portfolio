import React from "react";
import "./skills.css";
import {
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoNetlify,
} from "react-icons/bi";
import { DiCss3 } from "react-icons/di";
import { IoLogoHtml5 } from "react-icons/io";
import { RiBootstrapFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiRedux, SiMui } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";
import SkillCard from "./skill-card";

const Skills = () => {
  const skillArray = [
    { LogoIcon: IoLogoHtml5, title: "HTML" },
    { LogoIcon: DiCss3, title: "CSS" },
    { LogoIcon: BiLogoJavascript, title: "JavaScript" },
    { LogoIcon: FaReact, title: "React js" },
    { LogoIcon: SiRedux, title: "Redux" },
    { LogoIcon: AiFillGithub, title: "Github" },
    { LogoIcon: RiBootstrapFill, title: "Bootstrap" },
    { LogoIcon: SiMui, title: "Material UI" },
    { LogoIcon: BiLogoTailwindCss, title: "Tailwild CSS" },
    { LogoIcon: TbBrandNextjs, title: "Next.js" },
  ];
  return (
    <div id="skills">
      <h2 className="heading-text">
        Ski<span>lls </span>
      </h2>
      <div className="skil-container">
        {skillArray?.map((item) => (
          <SkillCard key={item?.title} {...item} />
        ))}{" "}
      </div>
    </div>
  );
};

export default Skills;
