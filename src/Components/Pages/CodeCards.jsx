import React, { useState, useEffect } from "react";
import "./CodeCards.css";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Collapse from "@mui/material/Collapse";

const certificates = [
  "Algorithms I & II – Princeton University (Coursera)",
  "Self Paced DSA – GeeksforGeeks",
  "The Full Stack Developer – Meta",
  "Operating Systems & Distributed Systems – MITx (edX)",
  "Generative AI with Large Language Models – AWS & DeepLearning.AI",
  "Database Management Systems – Stanford University (Coursera)",
  "Computer Networks – Georgia Tech (Coursera)",
  "Software Design & Architecture – University of Alberta (Coursera)",
  "Principles of UI/UX – Meta",
  "Front End Developer – Meta",
  "React Basics – Meta",
  "Advanced React – Meta",
  "Web Security Fundamentals – Google Cloud",
  "Developing AI with Python – IBM",
  "Computer Vision & Image Processing – IBM",
  "Deep Learning Specialization – DeepLearning.AI",
  "Natural Language Processing (NLP) with Attention Models – DeepLearning.AI",
  "Reinforcement Learning – University of Alberta",
  "Applied AI with TensorFlow – IBM",
  "AI for Everyone – Andrew Ng (Coursera)",
];

function CertificateCard() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="cert-card">
      <div className="cert-header">
        <h2 className="cert-title">Certificates</h2>
        <Tooltip title={expanded ? "Show Less" : "Show More"}>
          <IconButton
            onClick={() => setExpanded(!expanded)}
            sx={{
              color: "#0096ff",
              transition: "transform 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(0,150,255,0.1)",
                transform: "scale(1.1)",
              },
            }}
          >
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </Tooltip>
      </div>

      {/* Top 5 always visible */}
      <div className="cert-list">
        {certificates.slice(0, 5).map((cert, index) => (
          <span key={index} className="cert-item">
            {cert}
          </span>
        ))}
      </div>

      {/* Collapsible extra items */}
      <Collapse in={expanded} timeout={500}>
        <div className="cert-list">
          {certificates.slice(5).map((cert, index) => (
            <span key={index + 5} className="cert-item">
              {cert}
            </span>
          ))}
        </div>
      </Collapse>
    </div>
  );
}

const achievements = [
  "GATE 2024, 2025 - Computer Science and Information Technology",
  "Chandigarh University – Academic Performer",
  "Code Forces – Candidate Master",
  "Geeks for Geeks (GFG) – Top Contributor & Scholar Author",
  "ICPC – Regional Contest Participant",
  "Smart India Hackathon – National Finalist",
];

function AchievementsCard() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="ach-card">
      <div className="ach-header">
        <h2 className="ach-title">Achievements & Recognitions</h2>
        <Tooltip title={expanded ? "Show Less" : "Show More"}>
          <IconButton
            onClick={() => setExpanded(!expanded)}
            sx={{
              color: "#f5c542",
              transition: "transform 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(245,197,66,0.1)",
                transform: "scale(1.1)",
              },
            }}
          >
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </Tooltip>
      </div>

      {/* Always visible top 3 */}
      <div className="ach-list">
        {achievements.slice(0, 3).map((ach, index) => (
          <span key={index} className="ach-item">
            {ach}
          </span>
        ))}
      </div>

      {/* Expandable rest */}
      <Collapse in={expanded} timeout={500}>
        <div className="ach-list">
          {achievements.slice(3).map((ach, index) => (
            <span key={index + 3} className="ach-item">
              {ach}
            </span>
          ))}
        </div>
      </Collapse>
    </div>
  );
}

// Reusable Card Component
function CodeCard({ title, logo, stats }) {
  return (
    <div className="code-card">
      <div className="code-title">{title}</div>
      <div className="code-body">
        <img src={logo} alt={title} className="code-logo" />
        <div className="code-details">
          {stats.map((item, index) => (
            <p key={index} className="code-line">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function CodeCards() {
  const [leetStats, setLeetStats] = useState([
    "Loading...",
    "Please wait...",
    "Fetching stats...",
  ]);

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        const response = await fetch(
          "https://leetcode-stats-api.herokuapp.com/speedcuberayush"
        );
        const data = await response.json();

        setLeetStats([
          `Global Rank: ${data.ranking}`,
          `Total Problems Solved: ${data.totalSolved}`,
          `LEVEL : GAURDIAN (TOP 0.69%)`,
        ]);
      } catch (error) {
        console.error("Error fetching LeetCode stats:", error);
        setLeetStats([
          "Global Rank: 0",
          "Total Problems Solved: 0",
          "LEVEL : GAURDIAN (TOP 0.69%)",
        ]);
      }
    };

    fetchLeetCodeStats();
  }, []);

  return (
    <div className="code-cards-container">
      {/* LeetCode Card */}
      <a
        href="https://leetcode.com/u/speedcuberayush/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit", display: "block" }}
      >
        <CodeCard
          title="LeetCode"
          logo="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
          stats={leetStats}
        />
      </a>

      {/* GeeksForGeeks Card */}
      <a
        href="https://www.geeksforgeeks.org/user/speedcuberayush/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit", display: "block" }}
      >
        <CodeCard
          title="GeeksForGeeks"
          logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/GeeksForGeeks_logo.png/1280px-GeeksForGeeks_logo.png"
          stats={[
            "Global Rank: 2",
            "Total Problems Solved: 3807",
            "CODING SCORE: 10202",
            "LEVEL: SCHOLAR (3.8k Points)",
          ]}
        />
      </a>
    </div>
  );
}

export { CodeCards, CertificateCard, AchievementsCard };
