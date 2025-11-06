import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission (replace with API / Google Form)
    setTimeout(() => {
      setLoading(false);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden relative"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(0,255,255,0.08),_transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 sm:px-8 md:px-12 py-20 text-center z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          {/* === LEFT TEXT SIDE === */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-snug"
            >
              Let’s <span className="text-cyan-400">Connect</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-base sm:text-lg text-gray-300 max-w-md mx-auto md:mx-0 mb-8 leading-relaxed"
            >
              Whether you want to collaborate, discuss a project, or just say hello — 
              I’d love to hear from you! Drop me a message below.
            </motion.p>
          </motion.div>

          {/* === RIGHT FORM SIDE === */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="w-full md:w-1/2 bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-[0_0_25px_rgba(0,255,255,0.15)] text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col gap-5"
            >
              {/* Name */}
              <div>
                <label className="block text-cyan-400 font-semibold mb-2 text-sm sm:text-base">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 sm:p-4 rounded-md bg-gray-900 text-white border border-cyan-600 
                             focus:outline-none focus:border-cyan-400 transition text-sm sm:text-base"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-cyan-400 font-semibold mb-2 text-sm sm:text-base">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 sm:p-4 rounded-md bg-gray-900 text-white border border-cyan-600 
                             focus:outline-none focus:border-cyan-400 transition text-sm sm:text-base"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-cyan-400 font-semibold mb-2 text-sm sm:text-base">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full p-3 sm:p-4 rounded-md bg-gray-900 text-white border border-cyan-600 
                             focus:outline-none focus:border-cyan-400 transition text-sm sm:text-base resize-none"
                ></textarea>
              </div>

              {/* Submit button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                type="submit"
                disabled={loading}
                className="mt-4 bg-cyan-500 text-white font-bold py-3 sm:py-4 px-6 sm:px-10 rounded-full 
                           hover:bg-cyan-600 transition duration-300 shadow-lg 
                           hover:shadow-cyan-500/50 disabled:opacity-50 w-full sm:w-auto self-center md:self-start"
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
