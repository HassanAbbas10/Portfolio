import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "../utils/projects";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1
      }
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating
            ? 'text-yellow-400 fill-yellow-400'
            : 'text-gray-400'
        }`}
      />
    ));
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-16">
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent font-quicksand">
            What People Say
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto font-quicksand">
            Feedback from colleagues and clients I&apos;ve had the pleasure to work with
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="w-full pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div 
                  variants={itemVariants}
                  className="p-4"
                >
                  <div className="relative group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 h-full hover:bg-white/10 transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl">
                    {/* Quote Icon */}
                    <div className="absolute top-4 right-4">
                      <Quote className="text-blue-400/30" size={32} />
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Testimonial Content */}
                    <blockquote className="text-gray-300 mb-6 leading-relaxed font-quicksand">
                      &ldquo;{testimonial.content}&rdquo;
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-emerald-500/20"></div>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm font-quicksand">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-400 text-xs font-quicksand">
                          {testimonial.position}
                        </p>
                        <p className="text-blue-300 text-xs font-quicksand">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Gradient Border Effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-emerald-500/5 -z-10 blur opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          className="text-center mt-12"
        >
          <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10 max-w-xl mx-auto">
            <h3 className="text-lg font-bold text-white mb-2 font-quicksand">
              Ready to Work Together?
            </h3>
            <p className="text-gray-400 mb-4 text-sm font-quicksand">
              Let&apos;s create something amazing together. I&apos;m always excited to take on new challenges.
            </p>
            <button className="inline-block bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-5 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-emerald-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl text-sm font-quicksand">
              Get In Touch
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
