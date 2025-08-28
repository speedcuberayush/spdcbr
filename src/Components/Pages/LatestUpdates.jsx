import React, { useState, useEffect } from "react";
import { Heading } from "./CommonUtils";
import "./LatestUpdates.css";
import NewsCard from "./News";
import { AchievementsCard, CertificateCard, CodeCards } from "./CodeCards";

function LatestUpdates() {
  const [stats, setStats] = useState({ totalSolved: 0, ranking: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(
          "https://leetcode-stats-api.herokuapp.com/speedcuberayush"
        );
        const data = await response.json();
        setStats({ totalSolved: data.totalSolved, ranking: data.ranking });
      } catch (error) {
        console.error("Error fetching LeetCode stats:", error);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="LatestUpdates">
      <Heading first="Latest" second="Updates" />

      {/* Slider */}
      <div className="slider-container">
        <div className="slider-track">
          <div className="slider-item">LOOKING FOR FULL TIME SDE ROLES</div>
          <div className="slider-item">OPEN TO COLLABORATION & RESEARCH</div>
          <div className="slider-item">BUILDING WOLF AUTOMATION</div>
          <div className="slider-item">BUILDING CODE CANVAS</div>
          <div className="slider-item">CRAFTING NEWTON AI</div>
          <div className="slider-item">EXPLORING SYSTEM DESIGN & ARCHITECTURE</div>
          <div className="slider-item">PASSIONATE ABOUT SCALABLE TECH</div>
          <div className="slider-item">LOVE SOLVING HARD PROBLEMS</div>
          <div className="slider-item">SHARING KNOWLEDGE THROUGH TECH BLOGS</div>
          <div className="slider-item">PREPARING FOR COMPETITIVE CODING CHALLENGES</div>
          <div className="slider-item">KEEN INTEREST IN AI + AUTOMATION</div>
        </div>
      </div>

      {/* News Cards and Empty Right Part */}
      <div className="mainUpdates">
        {/* Left - News Cards */}
        <div className="LeftPart">
          <NewsCard
            date="01.07.2025"
            description={[
              "Completed 10 Months Internship from SANDISK",
              "System Design Verification Engineering",
            ]}
          />
          <NewsCard
            date="30.05.2025"
            description={[
              "COMPLETED B.E CSE FROM CHANDIGARH UNIVERSITY",
              "CGPA : 8.89 / 10",
            ]}
          />
          <NewsCard
            date="19.03.2025"
            description={["GATE CS/IT QUALIFIED ", "AIR : 981 "]}
          />
        </div>

        {/* Right - Empty Div */}
        <div className="RightPart">
          {/* <CodeCards /> */}
          <CodeCards />
          <AchievementsCard />
          <CertificateCard />
        </div>
      </div>
    </div>
  );
}

export default LatestUpdates;
