import { motion } from "framer-motion";
import { Calendar, MapPin, Building, ExternalLink } from "lucide-react";
import { memo } from "react";
import { experiences } from "../utils/projects";

const Experience = memo(() => {
	// Simplified, performance-optimized animations
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.05,
				delayChildren: 0.1,
				ease: "easeOut",
			},
		},
	};

	const itemVariants = {
		hidden: {
			opacity: 0,
			x: -30,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.4,
				ease: "easeOut",
			},
		},
	};

	const itemVariantsReverse = {
		hidden: {
			opacity: 0,
			x: 30,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.4,
				ease: "easeOut",
			},
		},
	};

	const nodeVariants = {
		hidden: { scale: 0 },
		visible: {
			scale: 1,
			transition: {
				duration: 0.3,
				ease: "easeOut",
			},
		},
	};

	return (
		<div className="relative min-h-screen py-16 overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-950">
			<div className="relative z-10 max-w-6xl px-4 py-8 mx-auto">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.3, ease: "easeOut" }}
					className="mb-12 text-center"
				>
					<motion.h2
						className="mb-4 text-3xl font-bold text-transparent text-white md:text-4xl bg-gradient-to-r from-gray-950 via-black to-gray-950 bg-clip-text font-quicksand"
						initial={{ scale: 0.9, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.3, delay: 0.1 }}
					>
						Work Experience
					</motion.h2>
					<motion.p
						className="max-w-2xl mx-auto text-base text-gray-400 font-quicksand"
						initial={{ opacity: 0, y: 15 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.3, delay: 0.2 }}
					>
						My professional journey in web development, showcasing growth from
						intern to Software Engineer
					</motion.p>
				</motion.div>

				{/* Timeline Container */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="relative max-w-4xl mx-auto"
				>
					{/* Timeline line - responsive positioning */}
					<div
						className="absolute top-0 bottom-0 w-0.5 bg-white opacity-35 left-4 md:left-1/2 md:-ml-px"
					></div>

					{experiences.map((exp, index) => (
						<motion.div
							key={exp.id}
							variants={index % 2 === 0 ? itemVariants : itemVariantsReverse}
							className="relative mb-12 last:mb-0"
						>
							{/* Timeline node - responsive positioning */}
							<motion.div
								className="absolute z-10 w-4 h-4 border-2 border-white rounded-full shadow-lg bg-custom-green left-2 md:left-1/2 md:-ml-2"
								style={{
									top: "1rem",
								}}
								variants={nodeVariants}
								whileHover={{ scale: 1.3 }}
								transition={{ duration: 0.2 }}
							></motion.div>

							{/* Content container - responsive layout */}
							<div
								className={`pl-12 md:pl-0 md:flex ${index % 2 === 0 ? "md:justify-start md:pr-8" : "md:justify-end md:pl-8"}`}
							>
								<div className="w-full md:w-96">
									<motion.div
										className="relative group"
										whileHover={{ y: -3 }}
										transition={{ duration: 0.2 }}
									>
										<motion.div
											className="relative p-6 transition-all duration-300 border shadow-xl bg-white/5 backdrop-blur-md rounded-xl border-white/10 hover:shadow-2xl hover:bg-white/8"
											whileHover={{
												scale: 1.02,
												boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
											}}
										>
											<motion.div
												className="flex items-start justify-between mb-4"
												initial={{ opacity: 0, y: 10 }}
												whileInView={{ opacity: 1, y: 0 }}
												viewport={{ once: true }}
												transition={{ duration: 0.3, delay: 0.1 }}
											>
												<div className="flex-1">
													<motion.h3
														className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-blue-300 font-quicksand"
														whileHover={{ x: 3 }}
													>
														{exp.title}
													</motion.h3>
													<motion.div
														className="flex items-center gap-2 mb-2 text-blue-300"
														initial={{ opacity: 0, x: -15 }}
														whileInView={{ opacity: 1, x: 0 }}
														viewport={{ once: true }}
														transition={{ duration: 0.3, delay: 0.15 }}
													>
														<Building size={16} />
														<span className="font-medium font-quicksand">
															{exp.company}
														</span>
													</motion.div>
													<motion.div
														className="flex items-center gap-4 text-sm text-gray-400 font-quicksand"
														initial={{ opacity: 0, x: -15 }}
														whileInView={{ opacity: 1, x: 0 }}
														viewport={{ once: true }}
														transition={{ duration: 0.3, delay: 0.2 }}
													>
														<div className="flex items-center gap-1">
															<Calendar size={14} />
															<span>{exp.duration}</span>
														</div>
														<div className="flex items-center gap-1">
															<MapPin size={14} />
															<span>{exp.location}</span>
														</div>
													</motion.div>
												</div>
												<motion.div
													whileHover={{ rotate: 45, scale: 1.1 }}
													transition={{ duration: 0.2 }}
												>
													<ExternalLink
														className="text-gray-500 transition-colors cursor-pointer hover:text-white"
														size={18}
													/>
												</motion.div>
											</motion.div>
											<motion.p
												className="mb-4 leading-relaxed text-gray-300 font-quicksand"
												initial={{ opacity: 0, y: 10 }}
												whileInView={{ opacity: 1, y: 0 }}
												viewport={{ once: true }}
												transition={{ duration: 0.3, delay: 0.25 }}
											>
												{exp.description}
											</motion.p>
											<motion.div
												className="mb-4"
												initial={{ opacity: 0, y: 10 }}
												whileInView={{ opacity: 1, y: 0 }}
												viewport={{ once: true }}
												transition={{ duration: 0.3, delay: 0.3 }}
											>
												<h4 className="mb-3 font-semibold text-white font-quicksand">
													Key Achievements:
												</h4>
												<ul className="space-y-2">
													{exp.achievements.map((achievement, idx) => (
														<motion.li
															key={idx}
															className="flex items-start gap-3 text-gray-300"
															initial={{ opacity: 0, x: -15 }}
															whileInView={{ opacity: 1, x: 0 }}
															viewport={{ once: true }}
															transition={{
																duration: 0.3,
																delay: 0.35 + idx * 0.05,
															}}
														>
															<div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
															<span className="text-sm leading-relaxed font-quicksand">
																{achievement}
															</span>
														</motion.li>
													))}
												</ul>
											</motion.div>
											<motion.div
												initial={{ opacity: 0, y: 10 }}
												whileInView={{ opacity: 1, y: 0 }}
												viewport={{ once: true }}
												transition={{ duration: 0.3, delay: 0.4 }}
											>
												<h4 className="mb-3 font-semibold text-white font-quicksand">
													Technologies:
												</h4>
												<div className="flex flex-wrap gap-2">
													{exp.technologies.map((tech, idx) => (
														<motion.span
															key={idx}
															className="px-3 py-1 text-sm text-blue-300 transition-colors border rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm border-blue-500/30 hover:border-blue-400/50 font-quicksand"
															initial={{ opacity: 0, scale: 0.8 }}
															whileInView={{ opacity: 1, scale: 1 }}
															viewport={{ once: true }}
															transition={{
																duration: 0.2,
																delay: 0.45 + idx * 0.03,
															}}
															whileHover={{ scale: 1.05 }}
														>
															{tech}
														</motion.span>
													))}
												</div>
											</motion.div>
											<div className="absolute inset-0 transition-opacity duration-300 opacity-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-600/10 -z-10 blur group-hover:opacity-100"></div>
										</motion.div>
									</motion.div>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</div>
	);
});

Experience.displayName = "Experience";

export default Experience;
