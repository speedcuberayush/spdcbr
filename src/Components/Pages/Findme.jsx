import React from "react";
import { Heading } from "./CommonUtils";
import "./FindMe.css";

function Findme() {
  return (
    <div className="findMe">
      <Heading first={"Let's"} second={"Connect"} />
      <p>
        Let's collaborate! My inbox is always open, and I’m excited to connect
        with creative, curious, and passionate minds. Whether you have an idea,
        a project, or just want to say hello, I welcome every message with
        enthusiasm. I love exchanging thoughts, sharing perspectives, and
        exploring opportunities that inspire growth and creativity. Every
        conversation is a chance to learn, collaborate, and create something
        meaningful together. No matter the scale, your ideas are valued, and
        I’ll make sure to respond thoughtfully. Let’s connect, share, and turn
        great ideas into amazing possibilities!
      </p>
      <a
        href="https://www.linkedin.com/in/speedcuberayush"
        target="_blank"
        rel="noopener noreferrer"
      >
        Say Hi{" "}
      </a>
    </div>
  );
}

export default Findme;
