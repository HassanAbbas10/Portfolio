import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageCircle } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const sectionRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(glowRef.current, {
        y: -50, ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom", end: "bottom top", scrub: 1.2,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section ref={sectionRef} className="relative bg-black py-24 overflow-hidden">
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px]"
        style={{ background: "radial-gradient(ellipse 55% 40% at 50% 0%, rgba(17,255,153,0.07), transparent)" }}
      />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.4 }}
        >
          <p className="text-[#9DB4C0] font-monument font-light text-[10px] uppercase tracking-[0.28em] mb-4">Contact</p>
          <h2 className="font-monument text-[clamp(1.6rem,4vw,2.8rem)] font-black leading-[1.0] tracking-[-0.01em] text-[#fcfdff] mb-5 uppercase">
            Let&apos;s Work Together
          </h2>
          <p className="text-[rgba(252,253,255,0.55)] text-lg max-w-md mx-auto font-helvetica">
            Have a project in mind? Drop me a message and I&apos;ll get back to you.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto border border-white/[0.12] rounded-xl overflow-hidden grid md:grid-cols-5"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.1 }}
        >
          {/* Info panel */}
          <div className="md:col-span-2 bg-[#0a0a0c] p-8 border-b border-white/[0.08] md:border-b-0 md:border-r md:border-white/[0.08] flex flex-col justify-between">
            <div>
              <h3 className="font-helvetica font-bold text-lg text-[#fcfdff] mb-6">Get In Touch</h3>
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded bg-[#101012] border border-white/[0.1] flex-shrink-0">
                    <Mail size={14} className="text-[rgba(252,253,255,0.6)]" />
                  </div>
                  <div>
                    <p className="text-[#9DB4C0] font-monument font-light text-[9px] uppercase tracking-[0.22em] mb-0.5">Email</p>
                    <span className="text-[rgba(252,253,255,0.7)] text-sm break-all font-helvetica">hassanabbas05674@gmail.com</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded bg-[#101012] border border-white/[0.1] flex-shrink-0">
                    <MessageCircle size={14} className="text-[rgba(252,253,255,0.6)]" />
                  </div>
                  <div>
                    <p className="text-[#9DB4C0] font-monument font-light text-[9px] uppercase tracking-[0.22em] mb-0.5">Discord</p>
                    <span className="text-[rgba(252,253,255,0.7)] text-sm font-helvetica">@Orion_dev</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/[0.06]">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#11ff99] animate-pulse flex-shrink-0" />
                <span className="text-[rgba(252,253,255,0.65)] text-sm font-helvetica">Available for work</span>
              </div>
              <p className="text-[#888e90] text-xs leading-relaxed font-helvetica">
                Currently accepting freelance projects and full-time opportunities. Typically respond within 24 hours.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="md:col-span-3 bg-black p-8 space-y-5">
            <div>
              <h4 className="text-[#fcfdff] font-helvetica font-bold text-base mb-1">Send a Message</h4>
              <p className="text-[rgba(252,253,255,0.45)] text-sm font-helvetica">Fill out the form and I&apos;ll get back to you shortly.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="relative">
                <User size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[rgba(252,253,255,0.35)] pointer-events-none" />
                <input
                  type="text" name="name" value={formData.name} onChange={handleChange}
                  placeholder="Full Name" required
                  className="w-full h-10 pl-9 pr-4 bg-[#0a0a0c] border border-white/[0.12] rounded-md text-[#fcfdff] text-sm placeholder-[rgba(252,253,255,0.25)] focus:outline-none focus:border-white/40 transition-colors font-helvetica"
                />
              </div>
              <div className="relative">
                <Mail size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[rgba(252,253,255,0.35)] pointer-events-none" />
                <input
                  type="email" name="email" value={formData.email} onChange={handleChange}
                  placeholder="Email Address" required
                  className="w-full h-10 pl-9 pr-4 bg-[#0a0a0c] border border-white/[0.12] rounded-md text-[#fcfdff] text-sm placeholder-[rgba(252,253,255,0.25)] focus:outline-none focus:border-white/40 transition-colors font-helvetica"
                />
              </div>
            </div>
            <div className="relative">
              <MessageCircle size={13} className="absolute left-3.5 top-3.5 text-[rgba(252,253,255,0.35)] pointer-events-none" />
              <textarea
                name="message" value={formData.message} onChange={handleChange}
                placeholder="Tell me about your project or just say hello..."
                rows="5" required
                className="w-full pl-9 pr-4 py-3 bg-[#0a0a0c] border border-white/[0.12] rounded-md text-[#fcfdff] text-sm placeholder-[rgba(252,253,255,0.25)] focus:outline-none focus:border-white/40 transition-colors resize-none font-helvetica"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 h-9 px-5 bg-[#fcfdff] text-black font-monument font-black text-[10px] uppercase tracking-[0.18em] rounded-md hover:bg-[#e8eef8] transition-colors duration-200"
            >
              <Send size={13} />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
