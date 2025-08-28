import React from "react";
import "./WorkAreas.css";
import { Heading } from "./CommonUtils";

import AIML from "../../assets/images/skills/AIML.jpg";
import Automation from "../../assets/images/skills/automation.jpg";
import Fullstack from "../../assets/images/skills/fullstack.jpg";
import Competitive from "../../assets/images/skills/competative.jpg";

const WorkAreas = () => {
  const areas = [
    { key: "heading", title: <Heading first="Work" second="Areas" /> },
    { key: "aiml", title: "AI & ML", img: AIML },
    { key: "automation", title: "Automation & Tools", img: Automation },
    { key: "fullstack", title: "Full Stack & SaaS Platforms", img: Fullstack },
    {
      key: "storage",
      title: "Storage Solutions",
      img: "https://media.kingston.com/kingston/hero/ktc-hero-solutions-personal-storage-best-storage-options-for-creatives-lg.jpg",
    },
    { key: "competitive", title: "Competitive Programming", img: Competitive },
  ];

  return (
    <section className="WorkAreas">
      <div className="grid">
        {areas.map((area) => (
          <div key={area.key} className={`box ${area.key}`}>
            {area.img && <img src={area.img} alt={area.title} />}
            <h3>{area.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkAreas;
