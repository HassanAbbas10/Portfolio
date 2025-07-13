import { motion } from "framer-motion";
import { Calendar, MapPin, Building, ExternalLink } from "lucide-react";
import { experiences } from "../utils/projects";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      rotateY: -90 
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const itemVariantsReverse = {
    hidden: { 
      opacity: 0, 
      x: 100,
      rotateY: 90 
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const nodeVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 200
      }
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden py-16">
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent font-quicksand"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Work Experience
          </motion.h2>
          <motion.p 
            className="text-base text-gray-400 max-w-2xl mx-auto font-quicksand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            My professional journey in web development, showcasing growth from intern to MERN stack developer
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <motion.div 
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-emerald-500 to-indigo-500 opacity-30"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          ></motion.div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={index % 2 === 0 ? itemVariants : itemVariantsReverse}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className={`relative flex items-center mb-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <motion.div 
                className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full border-2 border-white shadow-lg z-10"
                variants={nodeVariants}
                whileHover={{ scale: 1.3, rotate: 180 }}
                transition={{ duration: 0.2 }}
              ></motion.div>

              {/* Content Card */}
              <div className={`w-full md:w-5/12 ml-10 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-6' : 'md:ml-auto md:pl-6'
              }`}>
                <motion.div 
                  className="group relative"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Glass Card */}
                  <motion.div 
                    className="relative bg-white/5 backdrop-blur-md rounded-lg p-5 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-white/8"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                    }}
                  >
                    {/* Card Header */}
                    <motion.div 
                      className="flex items-start justify-between mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <div className="flex-1">
                        <motion.h3 
                          className="text-lg font-bold text-white mb-1 group-hover:text-blue-300 transition-colors font-quicksand"
                          whileHover={{ x: 5 }}
                        >
                          {exp.title}
                        </motion.h3>
                        <motion.div 
                          className="flex items-center gap-2 text-blue-300 mb-1"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          <Building size={14} />
                          <span className="font-medium text-sm font-quicksand">{exp.company}</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center gap-3 text-gray-400 text-xs font-quicksand"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                        >
                          <div className="flex items-center gap-1">
                            <Calendar size={12} />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={12} />
                            <span>{exp.location}</span>
                          </div>
                        </motion.div>
                      </div>
                      <motion.div
                        whileHover={{ rotate: 90, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ExternalLink className="text-gray-500 hover:text-white transition-colors cursor-pointer" size={16} />
                      </motion.div>
                    </motion.div>

                    {/* Description */}
                    <motion.p 
                      className="text-gray-300 mb-3 leading-relaxed text-sm font-quicksand"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      {exp.description}
                    </motion.p>

                    {/* Achievements */}
                    <motion.div 
                      className="mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                      <h4 className="text-sm font-semibold text-white mb-2 font-quicksand">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-start gap-2 text-gray-400"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.6 + idx * 0.1 }}
                          >
                            <div className="w-1 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-xs leading-relaxed font-quicksand">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Technologies */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                    >
                      <h4 className="text-sm font-semibold text-white mb-2 font-quicksand">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {exp.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            className="px-2 py-0.5 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 backdrop-blur-sm rounded text-xs text-blue-300 border border-blue-500/20 hover:border-blue-500/40 transition-colors font-quicksand"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.2, delay: 0.8 + idx * 0.05 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Gradient Border Effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/5 to-emerald-500/5 -z-10 blur opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
          className="text-center mt-12"
        >
          <motion.div 
            className="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10 max-w-xl mx-auto"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
            }}
            transition={{ duration: 0.2 }}
          >
            <motion.h3 
              className="text-lg font-bold text-white mb-2 font-quicksand"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              Ready to Work Together?
            </motion.h3>
            <motion.p 
              className="text-gray-400 mb-4 text-sm font-quicksand"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              I&apos;m always excited to take on new challenges and collaborate on innovative projects.
            </motion.p>
            <motion.button 
              className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-5 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-emerald-600 transition-all duration-200 shadow-lg hover:shadow-xl text-sm font-quicksand"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let&apos;s Connect
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
