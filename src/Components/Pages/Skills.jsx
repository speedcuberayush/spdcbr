import React from "react";
import "./Skills.css";
import { Heading } from "./CommonUtils";

const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        label: "C++",
        img: "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/cpp-2.png",
      },
      {
        label: "Python",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        label: "JavaScript",
        img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      },
      {
        label: "SQL",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
    ],
  },
  {
    title: "Frameworks, Libraries",
    items: [
      {
        label: "Next.js",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        label: "MERN",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bebC_d4eWwJ-x9ntqDuT94TvOgumSBVWHg&s",
      },
      {
        label: "Prisma",
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/prisma/prisma-original.svg",
      },
      {
        label: "Redux",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      },
      { label: "Socket.io", img: "https://socket.io/images/logo-dark.svg" },
      {
        label: "React Native",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      { label: "MUI", img: "https://mui.com/static/logo.png" },
      {
        label: "Tailwind",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png",
      },
    ],
  },
  {
    title: "Storage Protocols & OS",
    items: [
      {
        label: "NVMe",
        img: "https://static.thenounproject.com/png/5354722-200.png",
        style: { filter: "invert(1)" },
      },
      {
        label: "SCSI SSD",
        img: "https://uxwing.com/wp-content/themes/uxwing/download/computers-mobile-hardware/ssd-storage-icon.png",
        style: { filter: "invert(1)" },
      },
      {
        label: "USB",
        img: "https://static.thenounproject.com/png/1356273-200.png",
        style: { filter: "invert(1)" },
      },

      {
        label: "NAND FLASH",
        img: "https://flashdba.com/wp-content/uploads/2014/06/flash-chip.png",
      },
      {
        label: "Firmware",
        img: "https://cdn-icons-png.flaticon.com/512/6864/6864396.png",
        style: { filter: "invert(1)" },
      },
      {
        label: "HOST Behaviour",
        img: "https://cdn-icons-png.flaticon.com/512/6303/6303588.png",
      },
      {
        label: "Networking",
        img: "https://cdn-icons-png.flaticon.com/512/957/957980.png",
        style: { filter: "invert(1)" },
      },
    ],
  },
  {
    title: "Tools, Technologies",
    items: [
      {
        label: "Git",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        label: "Docker",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        label: "Postman",
        img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      },
      {
        label: "MongoDB",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        label: "REST APIs",
        img: "https://cdn-icons-png.flaticon.com/512/10329/10329422.png",
      },
      {
        label: "Firebase",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
      {
        label: "AWS",
        img: "https://cdn.iconscout.com/icon/free/png-256/free-aws-1869025-1583149.png",
      },
      {
        label: "Linux",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      },
    ],
  },
  {
    title: "AI/ML",
    items: [
      {
        label: "scikit-learn",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
      },
      {
        label: "TensorFlow",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      },
      {
        label: "Keras",
        img: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
      },
      {
        label: "Hugging Face",
        img: "https://huggingface.co/front/assets/huggingface_logo.svg",
      },
      {
        label: "LangChain",
        img: "https://avatars.githubusercontent.com/u/130669594?s=200&v=4",
      },
      {
        label: "OpenCV",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg",
      },
    ],
  },

  {
    title: "Multimedia, Design Tools",
    items: [
      {
        label: "Premiere Pro",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/2101px-Adobe_Premiere_Pro_CC_icon.svg.png",
      },
      {
        label: "After Effects",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/2101px-Adobe_After_Effects_CC_icon.svg.png",
      },
      {
        label: "Photoshop",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1051px-Adobe_Photoshop_CC_icon.svg.png",
      },
      {
        label: "Figma",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      {
        label: "Canva",
        img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/canva-icon.png",
      },
      {
        label: "Audacity",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Audacity_Logo.svg/2048px-Audacity_Logo.svg.png",
      },
    ],
  },
];

function Skills() {
  return (
    <div className="Skills">
      <Heading first="personal" second="Skills" />
      <div className="skills-box">
        {skills.map((category, idx) => (
          <div className="skill-category-inline" key={idx}>
            <span className="category-title">{category.title}</span>
            <div className="skill-items-inline">
              {category.items.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <img src={skill.img} style={skill.style} alt={skill.label} />
                  <span>{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
