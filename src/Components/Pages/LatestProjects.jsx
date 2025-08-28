import React from "react";
import "./LatestProjects.css";
import { Heading } from "./CommonUtils";
import { IconButton, Tooltip } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";
function ProjectCard({ image, title, tech, links, description }) {
  const iconMap = {
    Demo: <LaunchIcon />,
    GitHub: <GitHubIcon />,
    "Case Study": <DescriptionIcon />,
  };

  return (
    <div className="ProjectSection">
      {/* Left Part */}
      <div className="ProjectLeft">
        <div className="projectImage">
          <img src={image} alt={title} />
          <div className="overlay">
            <h1 className="projectTitle">{title}</h1>
          </div>
        </div>
        <div className="projectTech">
          {tech.split("•").map((t, i) => (
            <span key={i}>{t.trim()}</span>
          ))}
        </div>
      </div>

      {/* Right Part */}
      <div className="ProjectRight">
        <div className="ProjectLinks">
          {links?.map((link, index) => (
            <Tooltip key={index} title={link.label} arrow>
              <IconButton
                component="a"
                href={link.href}
                target="_blank"
                rel="noreferrer"
                sx={{ color: "white" }}
              >
                {iconMap[link.label]}
              </IconButton>
            </Tooltip>
          ))}
        </div>
        <div className="ProjectDescription">{description}</div>
      </div>
    </div>
  );
}

function LatestProjects() {
  return (
    <div className="LatestProjects">
      <Heading first="Latest" second="Projects" />

      {/* Newton AI */}
      <ProjectCard
        image="src/assets/images/projects/newtonAI.jpg"
        title="Newton AI"
        tech="Python • Next.js • MERN • OpenAI • FFmpeg • TensorFlow • Flask • Tailwind"
        description="An intelligent AI platform designed to provide automated reasoning, problem-solving, and learning capabilities for complex use-cases. Built with cutting-edge deep learning and scalable APIs."
        links={[
          { label: "Demo", href: "#" },
          { label: "GitHub", href: "#" },
          { label: "Case Study", href: "#" },
        ]}
      />

      {/* Hector Connect  */}
      <ProjectCard
        image="src/assets/images/projects/hector.jpg"
        title="Hector – Smart Campus. Simplified."
        tech="Next.js • MERN • React Native • Redux • Tailwind • MUI • Firebase • WebSockets • Dialogflow • Mapbox • Docker"
        description="A unified smart campus platform (2024–2025) featuring interactive indoor navigation with real-time tracking, one-tap access to blocks, shops, and labs, a central hub for IMS, events, library management, utilities, and placement support. Integrated CU coin gamification and an AI assistant for seamless student engagement."
        links={[
          { label: "Demo", href: "#" },
          { label: "GitHub", href: "#" },
          { label: "Case Study", href: "#" },
        ]}
      />

      {/* Wolf Automate  */}
      <ProjectCard
        image="src/assets/images/projects/wolf.jpg"
        title="Unleash Automation with WOLF"
        tech="Python • OpenAI • TensorFlow • FastAPI • Selenium • Docker"
        description="WOLF is an AI-powered automation suite that integrates intelligent reasoning with system, browser, and network workflows. Built on Python and deep learning frameworks, it leverages OpenAI models, scalable APIs, and automation libraries to deliver seamless, adaptive, and enterprise-grade automation."
        links={[
          { label: "Demo", href: "#" },
          { label: "GitHub", href: "#" },
          { label: "Case Study", href: "#" },
        ]}
      />

      {/* CodeCanvas */}
      <ProjectCard
        image="src/assets/images/projects/codecanvas.png"
        title="CodeCanvas"
        tech="Python • Manim • OpenAI"
        description="An interactive platform that simplifies Data Structures and Algorithms through engaging animations, making learning more visual, intuitive, and effective."
        links={[
          { label: "Demo", href: "#" },
          { label: "GitHub", href: "#" },
          { label: "Case Study", href: "#" },
        ]}
      />
    </div>
  );
}

export default LatestProjects;
