export const words = ["I am a React Js Developer", "Specializing in Front-end"];

export const socialLinks = {
	email: "mailto:hassanabbas05764@gmail.com",
	linkedin: "https://www.linkedin.com/in/hassana-dev/",
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
		id: "dueradar",
		picture: "/projects/dueradar.png",
		heading: "DueRadar",
		description:
			"Keep assignments, applications, renewals, and everyday deadlines in view with preparation dates and email reminders.",
		livelink: "https://dueradar.cc/",
		status: "Live",
		category: "Productivity app",
		technologies: ["Next.js"],
		featured: true,
	},
	{
		id: "bundleback",
		picture: "/projects/bundleback.png",
		heading: "BundleBack",
		description:
			"Track resale bundles from purchase to break-even, accounting for sales, fees, postage, refunds, and extra costs.",
		livelink: "https://bundle-back.vercel.app/",
		status: "Live",
		category: "Reseller web app",
		technologies: ["Next.js", "Polar"],
		featured: true,
	},
	{
		id: "alchemy",
		picture: "/projects/alchemy.png",
		heading: "The Alchemy of Perfume",
		description:
			"A fragrance storefront with an editorial design, scent collections, discovery sets, and a story-led shopping experience.",
		livelink: "https://alchemy-theta-murex.vercel.app/",
		status: "Live",
		category: "Fragrance storefront",
		technologies: ["Next.js"],
		featured: true,
	},
	{
		id: 1,
		picture: "/projects/dev-shop.webp",
		heading: "Dev-Shop",
		description: "An e-commerce storefront built with React, with product data from the DummyJSON API.",
		gitrepo: "https://github.com/HassanAbbas10/DevShop.git",
		livelink: "https://dev-shop10.netlify.app/",
		status: "Completed",
		category: "WEB",
		technologies: ["React", "JavaScript", "Tailwind", "Axios", "ReactRouter"],
	},
	{
		id: 2,
		picture: "/projects/word-stock.webp",
		heading: "Word-Stock",
		description:
			"A searchable bookstore powered by the Google Books API. Find your next read in a clean, simple interface.",
		gitrepo: "https://github.com/HassanAbbas10/Word-Stock.git",
		livelink: "https://word-stock.netlify.app/",
		status: "Completed",
		category: "WEB",
		technologies: ["React", "JavaScript", "Tailwind", "Axios", "ReactRouter"],
	},
	{
		id: 3,
		picture: "/projects/domain.webp",
		heading: "Domain Jourdan",
		description:
			"A responsive interface translated from Figma into React and Tailwind CSS, with a focus on the visual details.",
		gitrepo: "https://github.com/HassanAbbas10/Domain-Jourdan.git",
		livelink: "https://domain-jourdan.netlify.app/",
		status: "Completed",
		category: "WEB",
		technologies: ["React", "Tailwind", "JavaScript", "ReactRouter"],
	},

	{
		id: 5,
		picture: "/projects/paradise.webp",
		heading: "Prize Paradise",
		description: "A faithful recreation of the Prize Paradise interface, built with React and Tailwind CSS.",
		livelink: "https://uk-paradise.netlify.app/",
		status: "Completed",
		category: "WEB",
		technologies: ["ReactRouter", "Tailwind", "React", "JavaScript"],
	},
	{
		id: 6,
		picture: "/projects/eventify.webp",
		heading: "Eventify",
		description:
			"An event ticketing platform with Stripe payments and a React admin dashboard for managing events.",
		status: "Completed",
		category: "Mobile",
		technologies: [
			"React",
			"CSS",
			"Stripe",
			"Axios",
			"Android",
			"Tailwind",
			"Node",
			"Firebase",
		],
	},
	{
		id: 7,
		picture: "/projects/slideshare.webp",
		heading: "Slideshare",
		description: "A fresh take on the SlideShare interface, exploring a cleaner layout and responsive browsing experience.",
		livelink: "https://slideshare10.netlify.app/",
		status: "Completed",
		category: "WEB",
		technologies: ["ReactRouter", "Tailwind", "React", "JavaScript"],
	},
	{
		id: 8,
		picture: "/projects/exclusive.webp",
		heading: "Exclusive Store",
		description: "A responsive e-commerce frontend with a clean storefront, built in React and Tailwind CSS.",
		livelink: "https://exclusive-task10.netlify.app/",
		status: "Completed",
		category: "WEB",
		technologies: ["ReactRouter", "Tailwind", "React", "JavaScript"],
	},
	{
		id: 9,
		picture: "/projects/fullstack-ecommerce.webp",
		heading: "Full Stack Ecommerce Dashboard",
		description:
			"A full-stack e-commerce admin dashboard, bringing together React, Node.js, Express, and MongoDB.",
		livelink: "none",
		status: "In Progress",
		category: "Fullstack",
		technologies: ["React", "Node", "Express", "MongoDB", "Tailwind", "Axios"],
	},
];

export const companies = {
	"Developer Tag": {
		logo: "/companies/developer-tag.webp",
		linkedin: "https://www.linkedin.com/company/developertag/",
	},
	"Void Soft Technologies": {
		// Logo source: https://digitaldgk.com/our-journey/ (Void Soft Technologies).
		logo: "/companies/void-soft.webp",
	},
	Agentech: {
		logo: "/companies/agentech.webp",
		linkedin: "https://www.linkedin.com/company/agen-tech/",
	},
};

export const experiences = [
	{
		id: 0,
		title: "Associate Software Engineer",
		company: "Developer Tag",
		location: "Lahore, Pakistan",
		duration: "OCT 2025 – Present",
		description:
			"Engineering AI-powered platforms and enterprise security systems, leveraging modern full-stack technologies and multi-AI orchestration pipelines.",
		achievements: [
			"Engineered AimDiscovery, an AI-powered e-commerce discovery platform with 10+ product analysis modules and real-time trend tracking across 3+ data sources (X/Twitter, Amazon, Google Trends)",
			"Integrated Grok AI for intelligent market analysis across 5+ global market regions",
			"Contributed to the frontend of an enterprise-scale security platform serving 5+ client organizations across 8+ distinct portals for multiple user roles",
		],
		technologies: [
			"Next.js",
			"React",
			"NestJS",
			"PostgreSQL",
			"Drizzle ORM",
			"Grok AI",
			"Meshy AI",
			"Stripe",
			"TypeScript",
		],
	},
	{
		id: 1,
		title: "Full Stack Software Engineer",
		company: "Void Soft Technologies",
		location: "Pakistan",
		duration: "JUN 2025 – SEP 2025",
		description:
			"Built a scalable e-commerce platform with an admin dashboard, systematized business workflows, and boosted web application performance.",
		achievements: [
			"Built a scalable e-commerce platform with an admin dashboard managing 20+ products, cutting manual processing effort by 15%",
			"Reduced inventory processing time by 10% and systematized key business workflow processes",
			"Boosted performance scores by 20% across two web applications",
		],
		technologies: [
			"React",
			"Node.js",
			"MongoDB",
			"Express",
			"JavaScript",
			"Tailwind",
		],
	},
	{
		id: 2,
		title: "React Js Developer",
		company: "Void Soft Technologies",
		location: "Rahim Yar Khan, Punjab",
		duration: "FEB 2025 – May 2025",
		description:
			"Built responsive admin dashboard for broadcast app using React JS with Firebase backend for authentication and real-time data.",
		achievements: [
			"Developed responsive admin dashboard for broadcast application",
			"Integrated Firebase for authentication and real-time data management",
			"Implemented real-time data synchronization features",
			"Optimized dashboard performance for better user experience",
		],
		technologies: ["React", "Firebase", "JavaScript", "CSS", "Authentication"],
	},
	{
		id: 3,
		title: "React JS Junior Developer",
		company: "Agentech",
		location: "Rahim Yar Khan, Punjab",
		duration: "OCT 2024 – FEB 2025",
		description:
			"Independently enhanced React project functionalities and design changes, improving user experience",
		achievements: [
			"Enhanced existing React project functionalities independently",
			"Implemented design improvements for better user experience",
			"Optimized component performance and code efficiency",
			"Collaborated with team to deliver high-quality solutions",
		],
		technologies: ["React", "JavaScript", "CSS", "UI/UX", "Frontend"],
	},

	{
		id: 4,
		title: "React JS Intern",
		company: "Agentech",
		location: "Rahim Yar Khan, Punjab",
		duration: "JUN 2024 – OCT 2024",
		description:
			"Transformed Figma designs to pixel-perfect, responsive React apps with optimized performance and user-focused features.",
		achievements: [
			"Converted Figma designs to pixel-perfect React applications",
			"Ensured responsive design across all device types",
			"Optimized application performance for better loading times",
			"Focused on user-centric feature development",
		],
		technologies: ["React", "Figma", "JavaScript", "CSS", "Responsive Design"],
	},
];

// Testimonials Data
export const testimonials = [
	{
		id: 1,
		name: "Sarah Johnson",
		position: "Project Manager",
		company: "Void Soft Technologies",
		image:
			"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
		content:
			"Hassan delivered exceptional work on our e-commerce platform. His attention to detail and technical skills made him an invaluable team member.",
		rating: 5,
	},
	{
		id: 2,
		name: "Michael Chen",
		position: "Tech Lead",
		company: "Agentech",
		image:
			"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
		content:
			"Working with Hassan was a pleasure. He consistently delivered high-quality React components and exceeded our expectations.",
		rating: 5,
	},
	{
		id: 3,
		name: "Emily Rodriguez",
		position: "UI/UX Designer",
		company: "Chingu",
		image:
			"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
		content:
			"Hassan's ability to transform Figma designs into pixel-perfect React applications is outstanding. Highly recommended!",
		rating: 5,
	},
	{
		id: 4,
		name: "David Park",
		position: "Senior Developer",
		company: "Tech Innovations",
		image:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
		content:
			"Hassan brings fresh perspectives and solid technical skills. His work ethic and learning ability are impressive.",
		rating: 4,
	},
];

export default projects;
