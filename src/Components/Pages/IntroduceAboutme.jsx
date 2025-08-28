import React from "react";
import "./IntroduceAboutme.css";
import { Heading } from "./CommonUtils";

function IntroduceAboutme() {
  return (
    <div className="IntroduceAboutme">
      <Heading first="My" second="Introduction" />
      <p>
        I’m Ayush — a developer who{" "}
        <span className="glowingType">
          creates systems, experiences, and ideas
        </span>{" "}
        that come alive on screen. I believe development is more than building
        what works; it’s about{" "}
        <span className="glowingType">
          making things better, faster, and cooler
        </span>{" "}
        than before. Every project is my playground, where I experiment, break,
        and rebuild until it feels right. Technology for me isn’t just a career,
        it’s <span className="glowingType">my language of expression</span>.
      </p>

      <p>
        Professionally, I’ve contributed as a{" "}
        <span className="glowingType">
          System Design Verification Intern at SanDisk India
        </span>
        , where I crafted{" "}
        <span className="glowingType">
          test automation scripts, replay engines, protocol-agnostic parsers,
          and high-performance analytics tools
        </span>{" "}
        —streamlining complex workflows, uncovering hidden insights, and turning
        hours of manual effort into minutes. Beyond corporate experience, I’ve{" "}
        <span className="glowingType">
          developed multiple SaaS products, authored technical blogs and
          documentation, and contributed to GeeksforGeeks
        </span>
        , making complex concepts accessible and actionable. My journey revolves
        around{" "}
        <span className="glowingType">
          creating impactful systems, simplifying complexity, and delivering
          real-world solutions
        </span>
        .
      </p>

      <p>
        Beyond my professional work, I’ve immersed myself in the world of{" "}
        <span className="glowingType">competitive programming</span>, where
        every challenge became an opportunity to sharpen my problem-solving
        skills and push the limits of my thinking. Through countless contests
        and algorithmic battles, I’ve learned to{" "}
        <span className="glowingType">
          think faster, code cleaner, and approach problems with resilience and
          creativity
        </span>
        . These experiences have not only strengthened my technical abilities
        but also instilled a mindset of{" "}
        <span className="glowingType">
          perseverance, strategic thinking, and continuous learning
        </span>
        , shaping the way I tackle complex projects in both personal and
        professional arenas.
      </p>

      <p>
        But I’m not defined by code alone — I thrive at the intersection of{" "}
        <span className="glowingType">
          creativity, curiosity, and adventure
        </span>
        . I spend my time sketching intricate designs, crafting lyrics through
        rap, penning thoughts and stories, and pushing my limits in outdoor
        sports, finding inspiration in every form of expression. On campus, I’ve
        embraced leadership as{" "}
        <span className="glowingType">Head of the Developer Club</span>, where I
        organized engaging events, mentored peers, and built a vibrant ecosystem
        of learning and innovation. These experiences taught me how to blend{" "}
        <span className="glowingType">
          technical skills with creativity, collaboration, and initiative
        </span>
        , shaping me into a well-rounded problem solver and creator.
      </p>

      <p>
        At the end of the day, I’m simply a{" "}
        <span className="glowingType">builder at heart</span> — constantly
        learning, experimenting, and leveling up.
      </p>
    </div>
  );
}

export default IntroduceAboutme;
