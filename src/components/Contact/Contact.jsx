import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageCircle } from "lucide-react";
import BlurText from "../ui/TextAnimations/BlurText/BlurText";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.4,
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5,
      },
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };

  return (
    <motion.section
      id="contact"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-950 via-black to-gray-950"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div className="container mx-auto px-4 sm:px-6" variants={itemVariants}>
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-white font-quicksand mb-4 sm:mb-6"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <BlurText
              text=" Get In Touch"
              delay={50}
              animateBy="letters"
              direction="top"
              className="flex justify-center items-center"
            />
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed px-4"
            variants={itemVariants}
          >
            <BlurText
              text="Ready to bring your next project to life? I'm always excited to discuss new opportunities, collaborate on innovative ideas, or simply connect with fellow developers and creators."
              delay={50}
              animateBy="words"
              direction="top"
              className="text-base sm:text-lg lg:text-xl flex justify-center items-center"
            />
          </motion.p>
          <motion.div
            className="w-16 sm:w-20 lg:w-24 h-1 bg-white mx-auto mt-4 sm:mt-6 rounded-full"
            variants={itemVariants}
          />
        </div>

        <motion.div
          className="max-w-6xl mx-auto bg-black/80 backdrop-blur-sm border border-white/20 rounded-2xl sm:rounded-3xl shadow-2xl shadow-white/10 overflow-hidden"
          variants={formVariants}
          whileHover={{
            scale: 1.01,
            boxShadow: "0 30px 60px -12px rgba(255, 255, 255, 0.25)",
            borderColor: "rgba(255, 255, 255, 0.4)",
            transition: { duration: 0.3 },
          }}
        >
          <div className="grid md:grid-cols-5">
            <motion.div
              className="md:col-span-2 bg-gradient-to-br from-white to-gray-100 p-6 sm:p-8 lg:p-10 flex flex-col justify-center relative overflow-hidden"
              variants={itemVariants}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-black/5 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16" />
              <div className="absolute bottom-0 left-0 w-16 sm:w-24 h-16 sm:h-24 bg-black/5 rounded-full translate-y-8 sm:translate-y-12 -translate-x-8 sm:-translate-x-12" />

              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-6 sm:mb-8 font-quicksand">
                  Let&apos;s Create Something Amazing
                </h3>

                <div className="space-y-4 sm:space-y-6">
                  <motion.div
                    className="flex items-center space-x-3 sm:space-x-4 group"
                    variants={itemVariants}
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-2 sm:p-3 bg-black rounded-lg sm:rounded-xl group-hover:bg-gray-800 transition-colors duration-300">
                      <Mail className="text-white" size={16} />
                    </div>
                    <div>
                      <p className="text-black font-semibold text-sm sm:text-base">Email</p>
                      <span className="text-gray-600 text-xs sm:text-sm break-all">
                        hassanabbas05674@gmail.com
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-3 sm:space-x-4 group"
                    variants={itemVariants}
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-2 sm:p-3 bg-black rounded-lg sm:rounded-xl group-hover:bg-gray-800 transition-colors duration-300">
                      <MessageCircle className="text-white" size={16} />
                    </div>
                    <div>
                      <p className="text-black font-semibold text-sm sm:text-base">Discord</p>
                      <span className="text-gray-600 text-xs sm:text-sm">@Orion_dev</span>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className="mt-6 sm:mt-8 lg:mt-10 pt-6 sm:pt-8 border-t border-black/10"
                  variants={itemVariants}
                >
                  <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-black font-medium text-sm sm:text-base">
                      Available for work
                    </span>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Currently accepting freelance projects and full-time
                    opportunities. I typically respond within 24 hours and love
                    discussing innovative ideas!
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className="md:col-span-3 p-6 sm:p-8 lg:p-10 bg-black space-y-6 sm:space-y-8"
              variants={itemVariants}
            >
              <div className="mb-6 sm:mb-8">
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Send Me a Message
                </h4>
                <p className="text-gray-400 text-sm sm:text-base">
                  Fill out the form below and I&apos;ll get back to you as soon
                  as possible.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <motion.div
                  className="relative group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                    <User
                      className="text-gray-500 group-hover:text-white transition-colors duration-300"
                      size={16}
                    />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-gray-900/50 border border-white/20 rounded-lg sm:rounded-xl focus:outline-none focus:border-white focus:shadow-lg focus:shadow-white/10 text-white placeholder-gray-500 transition-all duration-300 text-sm sm:text-base"
                    required
                  />
                </motion.div>

                <motion.div
                  className="relative group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                    <Mail
                      className="text-gray-500 group-hover:text-white transition-colors duration-300"
                      size={16}
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-gray-900/50 border border-white/20 rounded-lg sm:rounded-xl focus:outline-none focus:border-white focus:shadow-lg focus:shadow-white/10 text-white placeholder-gray-500 transition-all duration-300 text-sm sm:text-base"
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                className="relative group"
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute top-3 sm:top-4 left-0 pl-3 sm:pl-4 pointer-events-none">
                  <MessageCircle
                    className="text-gray-500 group-hover:text-white transition-colors duration-300"
                    size={16}
                  />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, ideas, or just say hello..."
                  rows="5"
                  className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-gray-900/50 border border-white/20 rounded-lg sm:rounded-xl focus:outline-none focus:border-white focus:shadow-lg focus:shadow-white/10 text-white placeholder-gray-500 transition-all duration-300 resize-none text-sm sm:text-base"
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 15px 30px rgba(255, 255, 255, 0.2)",
                  backgroundColor: "#f9fafb",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="w-full flex items-center justify-center py-3 sm:py-4 px-6 sm:px-8 bg-white text-black font-bold rounded-lg sm:rounded-xl border border-white hover:bg-gray-50 transition-all duration-300 shadow-lg shadow-white/10 group text-sm sm:text-base"
              >
                <Send
                  className="mr-2 sm:mr-3 group-hover:translate-x-1 transition-transform duration-300"
                  size={16}
                />
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
