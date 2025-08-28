import React from "react";
import { useEffect } from "react";
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

function Part1() {
  return (
    <div className="Part1">
      <TagLine />
      <div className="ProfileImageBanner">
        <img src={ayushImg} alt="Ayush" />
      </div>
    </div>
  );
}
function Landing() {

  return (
    <div className="LandingContainerBox">
      <div className="LeftPartLanding">
        <SocialBtns />
      </div>

      <div className="MainPartLanding">
        <Part1 />
        <IntroduceAboutme />
        <WorkExperience />
        <Skills />
        <LatestProjects />
        <LatestUpdates />
        <WorkAreas />
        <Findme />
      </div>

      <div className="RightPartLanding">
        <p>SPEEDCUBERAYUSH</p>
      </div>
    </div>
  );
}

export default Landing;
