import React from "react";
import "./CarouselMarquee.css";
import {
  DiHtml5,
  DiCss3,
  DiReact,
  DiJavascript,
  DiGithub
} from "react-icons/di";
import { SiFirebase, SiBootstrap, SiBulma } from "react-icons/si";

const CarouselMarquee = () => {
  const techs = [
    { name: "HTML", icon: <DiHtml5 size={60} color="#E44D26" /> },
    { name: "CSS", icon: <DiCss3 size={60} color="#1572B6" /> },
    { name: "JavaScript", icon: <DiJavascript size={60} color="#F7DF1E" /> },
    { name: "React", icon: <DiReact size={60} color="#61DAFB" /> },
    { name: "GitHub", icon: <DiGithub size={60} color="white" /> },
    { name: "Firebase", icon: <SiFirebase size={60} color="#FFCA28" /> },
    { name: "Bootstrap", icon: <SiBootstrap size={60} color="#7952B3" /> },
    { name: "Bulma", icon: <SiBulma size={60} color="#00D1B2" /> }
  ];

  return (
    <div className="carousel-marquee">
      <div className="marquee-content">
        {techs.map((tech) => (
          <div key={tech.name} className="tech-item">
            {tech.icon}
            <span>{tech.name}</span>
          </div>
        ))}
      
        {techs.map((tech) => (
          <div key={tech.name + "2"} className="tech-item">
            {tech.icon}
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export { CarouselMarquee };
