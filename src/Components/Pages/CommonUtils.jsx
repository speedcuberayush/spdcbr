import React, { useRef } from "react";
import "./CommonUtils.css";
import { Stack, IconButton, Box, Tooltip } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";
import { Instagram, Psychology } from "@mui/icons-material";

// ---------- Tooltip ----------
function VirtualTooltip({ title, children }) {
  const positionRef = useRef({ x: 0, y: 0 });
  const popperRef = useRef(null);
  const areaRef = useRef(null);

  const handleMouseMove = (e) => {
    positionRef.current = { x: e.clientX, y: e.clientY };
    popperRef.current?.update();
  };

  return (
    <Tooltip
      title={title}
      placement="right"
      arrow
      slotProps={{
        popper: {
          popperRef,
          anchorEl: {
            getBoundingClientRect: () => {
              const rect = areaRef.current?.getBoundingClientRect();
              return new DOMRect(
                positionRef.current.x,
                rect ? rect.bottom : 0,
                0,
                0
              );
            },
          },
        },
      }}
    >
      <Box
        ref={areaRef}
        onMouseMove={handleMouseMove}
        sx={{ display: "inline-flex" }}
      >
        {children}
      </Box>
    </Tooltip>
  );
}

// ---------- Social Buttons ----------
const socialLinks = [
  {
    title: "Resume",
    href: "https://drive.google.com/file/d/1MmThB58Ewpj-y3TjMoy8Df5D_2GcP7zD/view?usp=sharing",
    icon: <ArticleIcon />,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/speedcuberayush",
    icon: <LinkedInIcon />,
  },
  {
    title: "GitHub",
    href: "https://github.com/speedcuberayush",
    icon: <GitHubIcon />,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/speedcuberayush/",
    icon: <Instagram />,
  },
  {
    title: "Chat with my Clone",
    href: "",
    icon: <Psychology />,
  },
];

function SocialBtns({ toggleMode }) {
  return (
    <Stack
      direction="column"
      sx={{
        alignItems: "center",
        justifyContent: { xs: "flex-start", lg: "flex-end" },
        height: { xs: "auto", lg: "500px" },
      }}
    >
      {socialLinks.map(({ title, href, icon }) => {
        const isChatButton = title === "Chat with my Clone";

        return (
          <VirtualTooltip key={title} title={title}>
            <IconButton
              className="icon-glow"
              aria-label={title}
              sx={{ color: "white" }}
              component="a"
              href={isChatButton ? undefined : href} // prevent navigation for chat
              target={isChatButton ? undefined : "_blank"}
              rel={isChatButton ? undefined : "noopener noreferrer"}
              onClick={isChatButton ? toggleMode : undefined} // toggle mode for chat
            >
              {icon}
            </IconButton>
          </VirtualTooltip>
        );
      })}
    </Stack>
  );
}

// ---------- Heading ----------
const Heading = ({ first, second }) => (
  // <div className="Headingmain">
  <div className="StylishHeading">
    <h1 className="upperHeading">{first}</h1>
    <h2 className="lowerHeading">{second}</h2>
  </div>
  // </div>
);

// ---------- Star SVG ----------
const Star = ({ num }) => (
  <div className={`star-${num}`}>
    <svg viewBox="0 0 784.11 815.53" xmlns="http://www.w3.org/2000/svg">
      <path
        className="fil0"
        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78
           207.96,29.37 371.12,197.68 392.05,407.74
           20.93,-210.06 184.09,-378.37 392.05,-407.74
           -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
      />
    </svg>
  </div>
);

// ---------- TagLine ----------

function TagLine({ toggleMode }) {
  return (
    <div className="taglineSection">
      <span className="tagline">
        <h1>
          Ayush
          <br />
          Kumar
          <span className="neonAnimation">Mishra</span>
        </h1>
        <span className="description">
          <p>AI, Full-Stack Developer</p>
        </span>
      </span>

      <div className="typewriter description">
        <p>Engineering Smart, Scalable Platforms</p>
        <p>From Generative AI to Digital Twins — I Make Ideas Think</p>
        <p>Crafting Scalable SaaS & Digital Twins That Think</p>
      </div>
      <>
        <button className="chatwithMyclone ayushAImode" onClick={toggleMode}>
          Chat with my Clone
          <div className="star-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              version="1.1"
              style={{
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                imageRendering: "optimizeQuality",
                fillRule: "evenodd",
                clipRule: "evenodd",
              }}
              viewBox="0 0 784.11 815.53"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs />
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer" />
                <path
                  className="fil0"
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                />
              </g>
            </svg>
          </div>
          <div className="star-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              version="1.1"
              style={{
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                imageRendering: "optimizeQuality",
                fillRule: "evenodd",
                clipRule: "evenodd",
              }}
              viewBox="0 0 784.11 815.53"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs />
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer" />
                <path
                  className="fil0"
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                />
              </g>
            </svg>
          </div>
          <div className="star-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              version="1.1"
              style={{
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                imageRendering: "optimizeQuality",
                fillRule: "evenodd",
                clipRule: "evenodd",
              }}
              viewBox="0 0 784.11 815.53"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs />
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer" />
                <path
                  className="fil0"
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                />
              </g>
            </svg>
          </div>
          <div className="star-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              version="1.1"
              style={{
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                imageRendering: "optimizeQuality",
                fillRule: "evenodd",
                clipRule: "evenodd",
              }}
              viewBox="0 0 784.11 815.53"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs />
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer" />
                <path
                  className="fil0"
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                />
              </g>
            </svg>
          </div>
          <div className="star-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              version="1.1"
              style={{
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                imageRendering: "optimizeQuality",
                fillRule: "evenodd",
                clipRule: "evenodd",
              }}
              viewBox="0 0 784.11 815.53"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs />
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer" />
                <path
                  className="fil0"
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                />
              </g>
            </svg>
          </div>
          <div className="star-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              version="1.1"
              style={{
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                imageRendering: "optimizeQuality",
                fillRule: "evenodd",
                clipRule: "evenodd",
              }}
              viewBox="0 0 784.11 815.53"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs />
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer" />
                <path
                  className="fil0"
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                />
              </g>
            </svg>
          </div>
        </button>
      </>
    </div>
  );
}

function CommonUtils() {
  return <div>CommonUtils</div>;
}

export { Heading, SocialBtns, TagLine, CommonUtils };
