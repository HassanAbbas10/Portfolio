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
// Work Experience Data
export const experiences = [
  {
    id: 1,
    title: "MERN Stack Developer",
    company: "Virtual Soft SMC",
    location: "Rahim Yar Khan, Punjab",
    duration: "MAY 2025 – Present",
    description: "Currently Working on building a full Stack e commerce platform with admin dashboard for the Products Handling",
    achievements: [
      "Building comprehensive e-commerce platform from scratch",
      "Developing admin dashboard for efficient product management",
      "Implementing full-stack architecture with modern technologies",
      "Ensuring scalable and maintainable code structure"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "Tailwind"]
  },
  {
    id: 2,
    title: "React Js Developer",
    company: "Virtual Soft SMC",
    location: "Rahim Yar Khan, Punjab",
    duration: "FEB 2025 – May 2025",
    description: "Built responsive admin dashboard for broadcast app using React JS with Firebase backend for authentication and real-time data.",
    achievements: [
      "Developed responsive admin dashboard for broadcast application",
      "Integrated Firebase for authentication and real-time data management",
      "Implemented real-time data synchronization features",
      "Optimized dashboard performance for better user experience"
    ],
    technologies: ["React", "Firebase", "JavaScript", "CSS", "Authentication"]
  },
  {
    id: 3,
    title: "React JS Junior Developer",
    company: "Agentech",
    location: "Rahim Yar Khan, Punjab",
    duration: "OCT 2024 – FEB 2025",
    description: "Independently enhanced React project functionalities and design changes, improving user experience",
    achievements: [
      "Enhanced existing React project functionalities independently",
      "Implemented design improvements for better user experience",
      "Optimized component performance and code efficiency",
      "Collaborated with team to deliver high-quality solutions"
    ],
    technologies: ["React", "JavaScript", "CSS", "UI/UX", "Frontend"]
  },
  {
    id: 4,
    title: "React JS Seasonal Developer",
    company: "Chingu",
    location: "Remote",
    duration: "JULY 2024 – AUG 2024",
    description: "Developed custom 404 page and dynamic map interface for food restaurant website, collaborating internationally via Scrum/Jira.",
    achievements: [
      "Developed custom 404 page with engaging user experience",
      "Created dynamic map interface for restaurant location services",
      "Collaborated internationally using Scrum methodology",
      "Managed project tasks efficiently through Jira"
    ],
    technologies: ["React", "JavaScript", "Maps API", "Scrum", "Jira"]
  },
  {
    id: 5,
    title: "React JS Intern",
    company: "Agentech",
    location: "Rahim Yar Khan, Punjab",
    duration: "JUN 2024 – OCT 2024",
    description: "Transformed Figma designs to pixel-perfect, responsive React apps with optimized performance and user-focused features.",
    achievements: [
      "Converted Figma designs to pixel-perfect React applications",
      "Ensured responsive design across all device types",
      "Optimized application performance for better loading times",
      "Focused on user-centric feature development"
    ],
    technologies: ["React", "Figma", "JavaScript", "CSS", "Responsive Design"]
  }
];

// Testimonials Data
export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Project Manager",
    company: "Virtual Soft SMC",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content: "Hassan delivered exceptional work on our e-commerce platform. His attention to detail and technical skills made him an invaluable team member.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Tech Lead",
    company: "Agentech",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "Working with Hassan was a pleasure. He consistently delivered high-quality React components and exceeded our expectations.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "UI/UX Designer",
    company: "Chingu",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "Hassan's ability to transform Figma designs into pixel-perfect React applications is outstanding. Highly recommended!",
    rating: 5
  },
  {
    id: 4,
    name: "David Park",
    position: "Senior Developer",
    company: "Tech Innovations",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "Hassan brings fresh perspectives and solid technical skills. His work ethic and learning ability are impressive.",
    rating: 4
  }
];

export default projects;
