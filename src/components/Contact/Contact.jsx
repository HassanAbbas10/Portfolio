import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-black via-black to-black"
    >
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <motion.h2
            className="text-5xl font-bold uppercase text-custom-teal font-quicksand mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Contact Me
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            I'm excited to hear about your project. Whether it's a
            collaboration, job opportunity, or just a friendly chat, feel free
            to reach out!
          </p>
        </div>

        <motion.div
          className="max-w-4xl mx-auto bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <div className="grid md:grid-cols-2">
            <div className="bg-custom-teal p-8 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-black mb-6">
                Let's Connect
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-black" size={24} />
                  <span className="text-black">
                    hassanabbas05674@example.com
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <MessageCircle className="text-black" size={24} />
                  <span className="text-black">@Orion_dev</span>
                </div>
              </div>
              <div className="mt-8 border-t border-black/20 pt-6">
                <p className="text-black/70">
                  Responsive within 24 hours. Looking forward to discussing how
                  I can help bring your ideas to life!
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 bg-gray-900 space-y-6">
              <div className="relative">
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
              </div>

              <div className="relative">
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
              </div>

              <div className="relative">
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
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center p-3 bg-custom-teal text-black font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300"
              >
                <Send className="mr-2" size={20} />
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
