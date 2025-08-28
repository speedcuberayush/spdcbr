import React from "react";
import "./WorkExperience.css";
import { Heading } from "./CommonUtils";

const experiences = [
  {
    company: "Sandisk",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/SanDisk_2024_logo.svg/2560px-SanDisk_2024_logo.svg.png",
    role: "INTERN, System Design Verification Engineering",
    duration: "Sep 2024 - Jun 2025 · 10 mos",
    location: "Bengaluru, Karnataka, India · On-site",
    points: [
      "Developed and executed test scripts for NVMe & USB storage protocols to ensure compliance and performance validation.",
      "Developed a custom replay engine for diverse workloads, ensuring accurate replication to protocol sequence, timing, and data patterns. Reduced manual effort significantly.",
      "Designed a protocol-agnostic parser to normalize and interpret trace data across multiple sources, enabling unified analysis.",
      "Developed a high-performance visual analytics tool capable of handling large-scale trace, enabling deep insights into firmware behavior and protocol interactions.",
    ],
    skills: [
      "NVMe",
      "SCSI",
      "Python",
      "C++",
      "Firmware",
      "NAND Flash",
      "Verification and Validation (V&V)",
      "Operating Systems",
    ],
  },
  {
    company: "GeeksforGeeks",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/GeeksForGeeks_logo.png/1280px-GeeksForGeeks_logo.png",
    role: "SCHOLAR, Content Creator",
    duration: "May 2022 - Apr 2024 · 2 yrs",
    // location: "Remote",
    points: [
      "Authored Computer Science articles on Data Structures, Algorithms, and System Design, achieving 1K+ article points and earning the Scholar Badge.",
      "Developed original, high-quality DSA problems covering advanced algorithmic concepts to challenge learners at multiple proficiency levels.",
      "Contributed educational content (problems + editorial solutions) that improved community learning and engagement.",
      "Strengthened expertise in Algorithm Design, Competitive Programming, and Technical Writing.",
    ],
    skills: [
      "Technical Writing",
      "Algorithm Design",
      "Knowledge Sharing",
      "Presentations",
      "Data Structures",
    ],
  },
];
const education = [
  {
    company: "Chandigarh University(CU)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Chandigarh_University_Seal.png",
    role: "B.E : Computer Science Engineering",
    duration: "Oct 2021 - Jun 2025",
    // location: "Mohali, Punjab, India",
    location: "CGPA : 8.89/10",
    // points: [
    //   "Developed and executed test scripts for NVMe & USB storage protocols to ensure compliance and performance validation.",
    //   "Developed a custom replay engine for diverse workloads, ensuring accurate replication to protocol sequence, timing, and data patterns. Reduced manual effort significantly.",
    //   "Designed a protocol-agnostic parser to normalize and interpret trace data across multiple sources, enabling unified analysis.",
    //   "Developed a high-performance visual analytics tool capable of handling large-scale trace, enabling deep insights into firmware behavior and protocol interactions.",
    // ],
  },
  {
    company: "Kendriya Vidhyalaya Sangathan",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/KVS_SVG_logo.svg/1200px-KVS_SVG_logo.svg.png",
    role: "Central Board of Secondary Education (CBSE)",
    duration: "2008 - 2020",
    // location: "Remote",
    // points: [
    //   "Authored Computer Science articles on Data Structures, Algorithms, and System Design, achieving 1K+ article points and earning the Scholar Badge.",
    //   "Developed original, high-quality DSA problems covering advanced algorithmic concepts to challenge learners at multiple proficiency levels.",
    //   "Contributed educational content (problems + editorial solutions) that improved community learning and engagement.",
    //   "Strengthened expertise in Algorithm Design, Competitive Programming, and Technical Writing.",
    // ],
  },
];

function WorkExperience() {
  return (
    <div className="WorkExperience">
      <Heading first="Work" second="Experience" />
      <div className="experienceContainer">
        {experiences.map((exp, index) => (
          <div className="experienceCard" key={index}>
            <div className="expHeader">
              <img src={exp.logo} alt={exp.company} />
              <div className="expInfo">
                <h3>{exp.role}</h3>
                <p className="company">{exp.company}</p>
                <p className="duration">{exp.duration}</p>
                <p className="location">{exp.location}</p>
              </div>
            </div>
            <ul className="expPoints">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="expSkills">
              {exp.skills.map((skill, i) => (
                <span key={i} className="skillTag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <br />
      <Heading first="My" second="Education" />
      <div className="experienceContainer">
        {education.map((exp, index) => (
          <div className="experienceCard" key={index}>
            <div className="expHeader">
              <img src={exp.logo} alt={exp.company} />
              <div className="expInfo">
                <h3>{exp.role}</h3>
                <p className="company">{exp.company}</p>
                <p className="duration">{exp.duration}</p>
                <p className="location">{exp.location}</p>
              </div>
            </div>
            <ul className="expPoints">
              {exp.points &&
                exp.points.length > 0 &&
                exp.points.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
            {/* <div className="expSkills">
              {exp.skills.map((skill, i) => (
                <span key={i} className="skillTag">
                  {skill}
                </span>
              ))}
            </div> */}
            <div className="expSkills">
              {exp.skills &&
                exp.skills.length > 0 &&
                exp.skills.map((skill, i) => (
                  <span key={i} className="skillTag">
                    {skill}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
