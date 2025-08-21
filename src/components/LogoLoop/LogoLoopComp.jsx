import { useState, useEffect } from "react";
import {
	SiReact,
	SiNextdotjs,
	SiTypescript,
	SiTailwindcss,
	SiPostgresql,
	SiNodedotjs,
	SiExpress,
	SiFirebase,
	SiAmazon,
	SiGit,
	SiJavascript,
	SiMongodb,
} from "react-icons/si";
import LogoLoop from "../ui/Animations/LogoLoop/LogoLoop";

const techLogos = [
	{ node: <SiReact />, title: "React", href: "https://react.dev" },
	{ node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
	{
		node: <SiTypescript />,
		title: "TypeScript",
		href: "https://www.typescriptlang.org",
	},
	{
		node: <SiTailwindcss />,
		title: "Tailwind CSS",
		href: "https://tailwindcss.com",
	},
	{
		node: <SiPostgresql />,
		title: "PostgreSQL",
		href: "https://www.postgresql.org",
	},
	{ node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
	{ node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
	{
		node: <SiFirebase />,
		title: "Firebase",
		href: "https://firebase.google.com",
	},
	{ node: <SiAmazon />, title: "AWS", href: "https://aws.amazon.com" },
	{ node: <SiGit />, title: "Git", href: "https://git-scm.com" },
	{
		node: <SiJavascript />,
		title: "JavaScript",
		href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
	},
	{ node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
];

// Custom hook for responsive logo height
const useResponsiveLogoHeight = () => {
	const [logoHeight, setLogoHeight] = useState(65);
  const [divHeight,setDivHeight] = useState(100)
	useEffect(() => {
		const updateLogoHeight = () => {
			if (window.innerWidth < 640) {
				setLogoHeight(40);
        setDivHeight(50) // mobile: small logos
			} else if (window.innerWidth < 1024) {
				setLogoHeight(55);
        setDivHeight(70)
         // tablet: medium logos
			} else {
				setLogoHeight(65);
        setDivHeight(100) // desktop: large logos
			}
		};

		// Set initial height
		updateLogoHeight();
		
		// Add event listener
		window.addEventListener('resize', updateLogoHeight);
		
		// Cleanup
		return () => window.removeEventListener('resize', updateLogoHeight);
	}, []);

	return logoHeight;
};

const LogoLoopComp = () => {
	const logoHeight = useResponsiveLogoHeight();
  const divHeight = useResponsiveLogoHeight();

	return (
		<section className=" sm:my-4 lg:my-6">
			<div
				style={{ height: {divHeight}, position: "relative", overflow: "hidden" }}
			>
				<LogoLoop
					logos={techLogos}
					className="text-white"
					speed={120}
					direction="right"
					logoHeight={logoHeight}
					gap={60}
					pauseOnHover
					scaleOnHover
					fadeOut
					fadeOutColor="slate"
					ariaLabel="Technology partners"
				/>
			</div>
		</section>
	);
};

export default LogoLoopComp;