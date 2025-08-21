import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import projects from "../utils/projects";
import {
	SiReact,
	SiTailwindcss,
	SiJavascript,
	SiNodedotjs,
	SiNextdotjs,
	SiPython,
	SiDjango,
	SiTypescript,
	SiGraphql,
	SiDocker,
	SiMongodb,
	SiPostgresql,
	SiRedux,
	SiExpress,
	SiAxios,
	SiReactrouter,
	SiCss3,
	SiStripe,
	SiAndroidstudio,
	SiFirebase,
} from "react-icons/si";

const techIcons = {
	React: SiReact,
	Tailwind: SiTailwindcss,
	JavaScript: SiJavascript,
	Node: SiNodedotjs,
	NextJS: SiNextdotjs,
	Python: SiPython,
	Django: SiDjango,
	TypeScript: SiTypescript,
	GraphQL: SiGraphql,
	Docker: SiDocker,
	MongoDB: SiMongodb,
	PostgreSQL: SiPostgresql,
	Redux: SiRedux,
	Express: SiExpress,
	Axios: SiAxios,
	ReactRouter: SiReactrouter,
	CSS: SiCss3,
	Stripe: SiStripe,
	Android: SiAndroidstudio,
	Firebase: SiFirebase,
};

const Projects = () => {
	const [activeFilter, setActiveFilter] = useState("All");

	// Get unique categories from projects
	const getUniqueCategories = () => {
		const categories = ["All"];
		projects.forEach((project) => {
			if (project.category && !categories.includes(project.category)) {
				categories.push(project.category);
			}
		});
		return categories;
	};

	const availableFilters = getUniqueCategories();

	// Filter projects based on active filter
	const filteredProjects = projects.filter((project) => {
		if (activeFilter === "All") return true;
		return project.category === activeFilter;
	});

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				duration: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 50, scale: 0.9 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 15,
				duration: 0.4,
			},
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, rotateY: -15 },
		visible: {
			opacity: 1,
			rotateY: 0,
			transition: {
				type: "spring",
				stiffness: 80,
				damping: 20,
				duration: 0.5,
			},
		},
	};

	const filterVariants = {
		hidden: { opacity: 0, x: -20 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.3,
			},
		},
	};

	return (
		<>
			<div className="bg-gradient-to-br from-gray-950 via-black to-gray-950 pt-10">
				<motion.div
					className="mx-auto text-center sm:mt-0 mt-32"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={containerVariants}
				>
					<motion.h2
						className="text-4xl font-bold uppercase text-fuchsia-50 font-quicksand"
						variants={itemVariants}
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.2 }}
					>
						Projects
					</motion.h2>

					{/* Filter Buttons */}
					<motion.div
						className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-8 mb-8 px-4"
						variants={containerVariants}
					>
						{availableFilters.map((filter) => (
							<motion.button
								key={filter}
								className={`px-3 sm:px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
									activeFilter === filter
										? "bg-custom-green text-black"
										: "bg-gray-800 text-white hover:bg-gray-700"
								}`}
								variants={filterVariants}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={() => setActiveFilter(filter)}
							>
								{filter}
							</motion.button>
						))}
					</motion.div>
				</motion.div>

				<motion.div
					className="w-full px-2 sm:px-4 py-8"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={containerVariants}
				>
					{/* Projects Grid */}
					{filteredProjects.length > 0 ? (
						<AnimatePresence mode="wait">
							<motion.div
								key={activeFilter}
								className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-8xl mx-auto"
								layout
								initial="hidden"
								animate="visible"
								exit="hidden"
								variants={containerVariants}
							>
								{filteredProjects.map((proj) => (
									<motion.div
										key={`${activeFilter}-${proj.id}`}
										className="w-full"
										variants={cardVariants}
										whileHover={{
											y: -10,
											transition: { duration: 0.3 },
										}}
										layout
										initial="hidden"
										animate="visible"
										exit="hidden"
									>
										<motion.div
											className="relative group/card hover:shadow-2xl hover:shadow-emerald-700/[0.5] bg-black border-white/[0.2] w-full h-auto rounded-xl p-3 sm:p-4 border"
											whileHover={{
												scale: 1.02,
												boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.3)",
												transition: { duration: 0.3 },
											}}
										>
											<motion.div
												className="w-full"
												whileHover={{ scale: 1.05 }}
												transition={{ duration: 0.3 }}
											>
												<img
													src={proj.picture || "/placeholder.svg"}
													className="object-cover w-full h-48 sm:h-60 rounded-xl group-hover/card:shadow-xl"
													alt="thumbnail"
												/>
											</motion.div>

											{/* Project Heading */}
											<div className="flex items-center justify-center">
												<div className="mt-3 sm:mt-4 text-lg sm:text-xl font-bold font-quicksand text-custom-green text-center">
													{proj.heading}
												</div>
											</div>

											{/* Project Description */}
											<div className="flex items-center justify-center">
												<p className="max-w-sm mt-2 text-white text-sm sm:text-md font-cormorant text-center px-2">
													{proj.description}
												</p>
											</div>

											{/* Project Status */}
											<div className="flex items-center justify-center">
												<div className="max-w-sm p-2 mt-1 text-sm text-black rounded-xl dark:text-neutral-300">
													<span
														className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
															proj.status === "Completed"
																? "bg-green-900 text-green-400"
																: "bg-yellow-900 text-yellow-400"
														}`}
													>
														{proj.status}
													</span>
												</div>
											</div>

											{/* Tech Stack Icons */}
											<div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4 px-2 sm:px-4 max-w-full">
												{proj.technologies.map((tech, index) => {
													const IconComponent = techIcons[tech];
													return IconComponent ? (
														<div
															key={index}
															className="p-1 sm:p-1.5 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 flex-shrink-0"
															title={tech}
														>
															<IconComponent className="w-4 h-4 sm:w-6 sm:h-6 text-custom-deep-purple" />
														</div>
													) : null;
												})}
											</div>

											<div className="flex items-center justify-center pt-4 sm:pt-6">
												{proj.livelink && (
													<motion.button
														className="rounded-full flex h-8 sm:h-10 animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-3 sm:px-4 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
														whileHover={{ scale: 1.05 }}
														whileTap={{ scale: 0.95 }}
														transition={{ duration: 0.2 }}
													>
														<a
															href={proj.livelink}
															target="_blank"
															rel="noopener noreferrer"
															className="text-xs sm:text-sm"
														>
															Live Link
														</a>
													</motion.button>
												)}
											</div>
										</motion.div>
									</motion.div>
								))}
							</motion.div>
						</AnimatePresence>
					) : (
						/* No projects message */
						<AnimatePresence mode="wait">
							<motion.div
								key="no-projects"
								className="text-center text-white text-xl mt-8 py-16"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.5 }}
							>
								<div className="max-w-md mx-auto">
									<h3 className="text-2xl font-bold text-gray-300 mb-4">
										No Projects Found
									</h3>
									<p className="text-gray-400">
										No projects found for &ldquo;{activeFilter}&rdquo; category.
									</p>
									<motion.button
										className="mt-6 px-6 py-2 bg-custom-green text-black rounded-full font-medium hover:bg-green-400 transition-all duration-300"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										onClick={() => setActiveFilter("All")}
									>
										Show All Projects
									</motion.button>
								</div>
							</motion.div>
						</AnimatePresence>
					)}
				</motion.div>
			</div>
		</>
	);
};

export default Projects;
