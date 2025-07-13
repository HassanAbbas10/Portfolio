import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageCircle } from "lucide-react";

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
        duration: 0.3
      }
    }
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
        duration: 0.4
      }
    }
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
        duration: 0.5
      }
    }
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
      className="py-20 bg-gradient-to-br from-black via-black to-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div
        className="container mx-auto px-4"
        variants={itemVariants}
      >
        <div className="text-center mb-12">
          <motion.h2
            className="text-5xl font-bold uppercase text-custom-teal font-quicksand mb-4"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Contact Me
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto text-lg"
            variants={itemVariants}
          >
            I&apos;m excited to hear about your project. Whether it&apos;s a
            collaboration, job opportunity, or just a friendly chat, feel free
            to reach out!
          </motion.p>
        </div>

        <motion.div
          className="max-w-4xl mx-auto bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
          variants={formVariants}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 25px 50px -12px rgba(20, 184, 166, 0.3)",
            transition: { duration: 0.3 }
          }}
        >
          <div className="grid md:grid-cols-2">
            <motion.div 
              className="bg-custom-teal p-8 flex flex-col justify-center"
              variants={itemVariants}
            >
              <h3 className="text-3xl font-bold text-black mb-6">
                Let&apos;s Connect
              </h3>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center space-x-4"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="text-black" size={24} />
                  <span className="text-black">
                    hassanabbas05674@example.com
                  </span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-4"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <MessageCircle className="text-black" size={24} />
                  <span className="text-black">@Orion_dev</span>
                </motion.div>
              </div>
              <motion.div 
                className="mt-8 border-t border-black/20 pt-6"
                variants={itemVariants}
              >
                <p className="text-black/70">
                  Responsive within 24 hours. Looking forward to discussing how
                  I can help bring your ideas to life!
                </p>
              </motion.div>
            </motion.div>

            <motion.form 
              onSubmit={handleSubmit} 
              className="p-8 bg-gray-900 space-y-6"
              variants={itemVariants}
            >
              <motion.div 
                className="relative"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="text-gray-400" size={20} />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full pl-10 p-3 bg-gray-800 border-2 border-gray-700 rounded-lg focus:outline-none focus:border-custom-teal text-white"
                  required
                />
              </motion.div>

              <motion.div 
                className="relative"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="text-gray-400" size={20} />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full pl-10 p-3 bg-gray-800 border-2 border-gray-700 rounded-lg focus:outline-none focus:border-custom-teal text-white"
                  required
                />
              </motion.div>

              <motion.div 
                className="relative"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute inset-y-0 left-0 pl-3 pt-3 pointer-events-none">
                  <MessageCircle className="text-gray-400" size={20} />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  className="w-full pl-10 p-3 bg-gray-800 border-2 border-gray-700 rounded-lg focus:outline-none focus:border-custom-teal text-white"
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="w-full flex items-center justify-center p-3 bg-custom-teal text-black font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300"
              >
                <Send className="mr-2" size={20} />
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
