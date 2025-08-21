/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import {
	FaCode,
	FaDatabase,
	FaLayerGroup,
	FaBriefcase,
	FaPenNib,
	FaCloud,
} from "react-icons/fa";
import {
	SiReact,
	SiTailwindcss,
	SiJavascript,
	SiNodedotjs,
	SiMongodb,
	SiPostgresql,
	SiRedux,
	SiApifox,
	SiCss3,
} from "react-icons/si";

const SkillCircle = ({ skill, index }) => {
	// Map skill names to appropriate icons
	const iconMap = {
		React: SiReact,
		CSS: SiCss3,
		Tailwind: SiTailwindcss,
		JavaScript: SiJavascript,
		Node: SiNodedotjs,
		API: SiApifox,
		MongoDB: SiMongodb,
		PostgreSQL: SiPostgresql,
		Redux: SiRedux,
		Database: FaDatabase,
		Cloud: FaCloud,
		Design: FaPenNib,
		Backend: FaLayerGroup,
		Frontend: FaBriefcase,
	};

	const SkillIcon = iconMap[skill.name] || FaCode;

	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{
				duration: 0.3,
				delay: index * 0.1,
			}}
			whileHover={{
				y: -10,
				transition: { duration: 0.2 },
			}}
			className=" w-36 h-36 p-2 border-t-2 flex flex-col items-center justify-center rounded-full shadow-md hover:shadow-lg hover:shadow-[rgba(255,255,255,0.3)] transition-all duration-100 bg-gradient-to-br from-gray-950 via-black to-gray-950 border-white shadow-[rgba(255,255,255,0.3)]"
		>
			<motion.div
				className="relative w-28 h-28 mb-4"
				style={{ color: skill.bg }}
				whileHover={{ scale: 1.1 }}
				transition={{ duration: 0.3 }}
			>
				<svg
					className="absolute top-0 left-0 w-full h-full"
					viewBox="0 0 36 36"
				>
					<path
						d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
						fill="none"
						stroke="currentColor"
						strokeWidth="3"
						strokeOpacity="0.3"
					/>
					<motion.path
						d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
						fill="none"
						stroke="currentColor"
						strokeWidth="3"
						initial={{ strokeDasharray: "0, 100" }}
						whileInView={{ strokeDasharray: `${skill.level}, 100` }}
						viewport={{ once: true }}
						transition={{ duration: 1.2, delay: index * 0.1 + 0.5 }}
					/>
				</svg>

				{/* Skill Icon */}
				<motion.div
					className="absolute inset-0 flex items-center justify-center"
					initial={{ scale: 0 }}
					whileInView={{ scale: 1 }}
					viewport={{ once: true }}
					transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
				>
					<SkillIcon className="w-8 h-8" />
				</motion.div>
			</motion.div>

			{/* Skill Details */}
			<motion.div
				className="text-center"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ delay: index * 0.1 + 0.3, duration: 0.3 }}
			>
				<h3 className="text-xl font-semibold text-white mb-1 font-quicksand">
					{skill.name}
				</h3>
				<motion.div
					className="text-sm text-gray-400 font-quicksand"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: index * 0.1 + 0.4, duration: 0.3 }}
				>
					{skill.level}%
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

const Skills = ({ skilles }) => {
	return (
		<section className="w-full py-16 bg-gradient-to-br from-black via-black to-black lg:mx-0 sm:mx-0 px-14 mx-auto">
			<div className="container mx-auto px-4">
				<motion.h2
					className="text-5xl font-bold text-center text-fuchsia-50 mb-12 tracking-wide uppercase font-quicksand"
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4 }}
				>
					My Skills
				</motion.h2>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
					{skilles.map((skill, index) => (
						<SkillCircle key={skill.name} skill={skill} index={index} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
