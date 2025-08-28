import React, { useState } from "react";
import "../styles/Landing.css";
import ayushImg from "../../assets/images/ayush.png";
import IntroduceAboutme from "./IntroduceAboutme";
import { SocialBtns, TagLine } from "./CommonUtils";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";
import WorkAreas from "./WorkAreas";
import LatestProjects from "./LatestProjects";
import Findme from "./Findme";
import LatestUpdates from "./LatestUpdates";
import ChatWithMe from "./ChatWithMe";

function Part1({ toggleMode }) {
  return (
    <div className="Part1">
      <TagLine toggleMode={toggleMode} />
      <div className="ProfileImageBanner">
        <img src={ayushImg} alt="Ayush" />
      </div>
    </div>
  );
}

function Landing() {
  const [ayushAImode, setAyushAImode] = useState(false);
  const [animating, setAnimating] = useState(false);

  const toggleMode = () => {
    // Start animation
    setAnimating(true);
    // Wait for animation to finish before switching content
    setTimeout(() => {
      setAyushAImode((prev) => !prev);
      setAnimating(false);
    }, 400); // animation duration in ms
  };

  return (
    <div className={`LandingContainerBox ${ayushAImode ? "ayushAImode" : ""}`}>
      <div className="LeftPartLanding">
        <SocialBtns toggleMode={toggleMode}  />
      </div>

      <div className={`MainPartLanding ${animating ? "fade-out" : "fade-in"}`}>
        {!ayushAImode ? (
          <>
            <Part1 toggleMode={toggleMode} />
            <IntroduceAboutme />
            <WorkExperience />
            <Skills />
            <LatestProjects />
            <LatestUpdates />
            <WorkAreas />
            <Findme />
          </>
        ) : (
          <ChatWithMe toggleMode={toggleMode} />
        )}
      </div>

      <div className="RightPartLanding">
        <p>SPEEDCUBERAYUSH</p>
      </div>
    </div>
  );
}

export default Landing;
