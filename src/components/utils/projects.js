import {dj,bookshop,shop} from '../../assets/index'

export const words =[
"I am a React Js Developer",
"Specializing in Front-end"
]

export const socialLinks = {
    email: "mailto:hassanabbas05764@gmail.com",
    linkedin: "https://www.linkedin.com/in/hassan-abbas-b34545263/",
    github: "https://github.com/HassanAbbas10",
    instagram: "https://www.instagram.com/",
}
  
export const skill = [
    { name: 'JavaScript', level: 80 ,bg:"bg-red-500"},
    { name: 'React', level: 80 ,bg:"bg-purple-500"},
    { name: 'CSS', level: 60 ,bg:"bg-custom-teal"},
    { name: 'Tailwind CSS', level: 75 ,bg:"bg-custom-green"},
    { name: 'Api Integration', level: 60 ,bg:"bg-custom-orange"},
  ];

const projects = [
    {
        id:1,
        picture:shop,
        heading:"Dev-Shop",
        description:"ecommerce sites made with using data from the dummyjson api",
        gitrepo:"https://github.com/HassanAbbas10/DevShop.git",
        livelink:"https://dev-shop10.netlify.app/",
        status:"Completed",
    },
    {
        id:2,
        picture:bookshop,
        heading:"Word-Stock",
        description:"BookStore made with Google Books api with search functionality",
        gitrepo:"https://github.com/HassanAbbas10/Word-Stock.git",
        livelink:"https://word-stock.netlify.app/",
        status:"Completed",
    },
    {
        id:3,
        picture:dj,
        heading:"Domain Jourdan",
        description:"From Figma to UI using Tailwind,Functionality needs to be added",
        gitrepo:"https://github.com/HassanAbbas10/Domain-Jourdan.git",
        livelink:"https://domain-jourdan.netlify.app/",
        status:"Development"
    },
]
export default projects