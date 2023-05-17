import {
  FaBriefcase,
  FaCode,
  FaEnvelopeOpen,
  FaFolderOpen,
  FaGraduationCap,
  FaHome,
  FaUser,
} from "react-icons/fa";
import { FiExternalLink, FiFileText, FiUser } from "react-icons/fi";

import Work1 from "./assets/project-1.png";
import Work2 from "./assets/project-2.png";
import Work3 from "./assets/project-3.png";
import Work4 from "./assets/project-4.jpeg";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";

import Theme4 from "./assets/blue.png";
import Theme3 from "./assets/blueviolet.png";
import Theme5 from "./assets/goldenrod.png";
import Theme9 from "./assets/green.png";
import Theme6 from "./assets/magenta.png";
import Theme8 from "./assets/orange.png";
import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme10 from "./assets/yellow.png";
import Theme7 from "./assets/yellowgreen.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/myportfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "UmaShankar",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Chauhan",
  },

  {
    id: 3,
    title: "Age : ",
    description: "24 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "India",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Gurugram, Haryana",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "8755198035",
  },

  {
    id: 8,
    title: "Langages : ",
    description: "English, Hindi",
  },

  // {
  //   id: 9,
  //   title: "LinkedIn : ",
  //   description: "linkedin.com/in/UmashankarChauhan9",
  // },
  // linkedin.com/in/UmashankarChauhan9
  // umashankarchauhan9@gmail.com
  {
    id: 9,
    title: "Email : ",
    description: "umashankarchauhan9@gmail.com",
  },
];

export const stats = [
  {
    id: 1,
    no: "2+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "10+",
    title: "Completed <br /> Projects",
  },

  // {
  //   id: 3,
  //   no: "2+",
  //   title: "Happy <br /> Customers",
  // },

  // {
  //   id: 4,
  //   no: "53+",
  //   title: " Awards <br /> Won",
  // },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2022 - PRESENT",
    title: "Front End Web Developer <span> Self </span>",
    desc: "As a front-end web developer, I started by taking online courses to learn HTML, CSS, and JavaScript. I gained expertise in designing user interfaces and using front-end frameworks like React and Bootstrap. I have experience optimizing website performance and ensuring accessibility. Collaboration and staying up-to-date with the latest trends are important to me.",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2021 - 2022",
    title: "Design Engineer <span> Membrane Group India Pvt Ltd </span>",
    desc: "Membrane Group is India’s leading manufacturer and distributor for Water & Waste Water Treatment Plants and Components<br/> Tasks <br/>-Preparing 3D fabrication drawing for Tank & silo.<br/>-structure part. Preparing 3D Fabrication of Elevator, Conveyor and Sweep auger.<br/>-Preparing installation drawing of 3D Part and MHE.",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2020 - 2021",
    title: "Junior Design Engineer <span> Rostfrei Steels Pvt Ltd </span>",
    desc: "Manufacturer & Supplier For Storage Tanks, Storage Silos & Material Handling Equipments.<br/> Tasks<br/>-Preparing P&ID using AutoCAD.<br/>-Preparing 3D Model of WTP, WWTP ,ETP & STP Plants.<br/>-Preparing Equipments General Arrangement Drawings using Solidworks.<br/>-Preparing 3D Fabrication of RO, EDI, UF Skids, UASB Tank, MBR Frame.",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2020",
    title: "Engineering Degree <span> Gla University </span>",
    desc: "As a mechanical engineer specialized in machine design, product development, and manufacturing processes. I am proficient in using CAD software including SolidWorks and AutoCAD, which allows me to create detailed designs and models. As a qualified GATE (Graduate Aptitude Test in Engineering) candidate, I have demonstrated my proficiency in mechanical engineering concepts and principles.",
  },

  // {
  //   id: 5,
  //   category: "education",
  //   icon: <FaGraduationCap />,
  //   year: "2012",
  //   title: "Master Degree <span> KIEV University </span>",
  //   desc: "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt",
  // },

  // {
  //   id: 6,
  //   category: "education",
  //   icon: <FaGraduationCap />,
  //   year: "2009",
  //   title: "Bachelor Degree <span> Tunis High School </span>",
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore",
  // },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "90",
  },
  {
    id: 2,
    title: "Css",
    percentage: "60",
  },

  {
    id: 3,
    title: "Bootstrap",
    percentage: "70",
  },

  {
    id: 4,
    title: "Javascript",
    percentage: "80",
  },

  {
    id: 5,
    title: "Jquery",
    percentage: "40",
  },

  {
    id: 6,
    title: "React",
    percentage: "85",
  },

  {
    id: 7,
    title: "Route",
    percentage: "60",
  },

  {
    id: 8,
    title: "Redux",
    percentage: "70",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Dice Game",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Game",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Nope",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Javascript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: `<a href="https://umashankarchauhan.github.io/Dice_Game/">Dice_Game</a>`,
      },
      // <a href="https://umashankarchauhan.github.io/Omnifood/">www.Omnifood.com</a>
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Omnifood",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Food Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Nope",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML/CSS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: `<a href="https://umashankarchauhan.github.io/Omnifood/">www.Omnifood.com</a>`,
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Movie Search",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "nope",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "ReactJS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: `<a href="https://umashankarchauhan.github.io/Movie-App/">www.Movies.com</a>`,
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Website",
    details: [
      {
        icon: <FiFileText />,
        title: "Project :",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Landing Page",
    details: [
      {
        title: "Project : ",
        desc: "Website",
      },
      {
        title: "Client : ",
        desc: "Dribble",
      },
      {
        title: "Language : ",
        desc: "React JS, Node JS",
      },
      {
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dibble.com",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
