import { dj, bookshop, shop } from "../../assets/index";

export const words = ["I am a React Js Developer", "Specializing in Front-end"];

export const socialLinks = {
  email: "mailto:hassanabbas05764@gmail.com",
  linkedin: "https://www.linkedin.com/in/hassan-abbas-b34545263/",
  github: "https://github.com/HassanAbbas10",
  instagram: "https://www.instagram.com/",
};

export const skill = [
  { name: "JavaScript", level: 80, bg: "#F7DF1E" },
  { name: "React", level: 90, bg: "#61DAFB" },
  { name: "CSS", level: 60, bg: "#1572B6" },
  { name: "Tailwind", level: 85, bg: "#38B2AC" },
 
  { name: "Redux", level: 70, bg: "#764ABC" },
  { name: "Node", level: 70, bg: "#339933" },

  { name: "Database", level: 75, bg: "#FF4500" },
  { name: "API", level: 80, bg: "#FF5733" },
 
  { name: "Backend", level: 60, bg: "#6A5ACD" },
  { name: "Frontend", level: 92, bg: "#EE6C4D" },
];

const projects = [
  {
    id: 1,
    picture: shop,
    heading: "Dev-Shop",
    description: "ecommerce sites made with using data from the dummyjson api",
    gitrepo: "https://github.com/HassanAbbas10/DevShop.git",
    livelink: "https://dev-shop10.netlify.app/",
    status: "Completed",
    technologies: ["React", "JavaScript", "Tailwind","Axios","ReactRouter"]
  },
  {
    id: 2,
    picture: bookshop,
    heading: "Word-Stock",
    description: "BookStore made with Google Books api with search functionality",
    gitrepo: "https://github.com/HassanAbbas10/Word-Stock.git",
    livelink: "https://word-stock.netlify.app/",
    status: "Completed",
    technologies: ["React", "JavaScript", "Tailwind","Axios","ReactRouter"]
  },
  {
    id: 3,
    picture: dj,
    heading: "Domain Jourdan",
    description: "From Figma to UI using Tailwind,Functionality needs to be added",
    gitrepo: "https://github.com/HassanAbbas10/Domain-Jourdan.git",
    livelink: "https://domain-jourdan.netlify.app/",
    status: "Completed",
    technologies: ["React", "Tailwind","JavaScript","ReactRouter"]
  },
  {
    id: 4,
    picture: dj,
    heading: "Domain Jourdan",
    description: "From Figma to UI using Tailwind,Functionality needs to be added",
    gitrepo: "https://github.com/HassanAbbas10/Domain-Jourdan.git",
    livelink: "https://domain-jourdan.netlify.app/",
    status: "Completed",
    technologies: ["React", "Tailwind","JavaScript","ReactRouter"]
  },
];
export default projects;
