import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-purple-950 to-black px-8 py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-white mb-12 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]"
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-200 mb-12 text-center max-w-2xl text-xl"
      >
        Have a project in mind or just want to say hi? Reach out, and let's create something amazing together.
      </motion.p>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-2xl grid gap-6"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="p-4 rounded-xl bg-purple-900/20 backdrop-blur-md border-2 border-purple-600/50 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-4 rounded-xl bg-purple-900/20 backdrop-blur-md border-2 border-purple-600/50 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          placeholder="Your Message"
          rows="6"
          className="p-4 rounded-xl bg-purple-900/20 backdrop-blur-md border-2 border-purple-600/50 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 bg-purple-600 rounded-xl text-white font-bold shadow-lg hover:bg-purple-700 transition"
        >
          Send Message 🚀
        </motion.button>
      </motion.form>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex gap-8 mt-12"
      >
        <a
          href="mailto:your.email@example.com"
          className="text-white text-2xl hover:text-purple-400 transition"
        >
          📧
        </a>
        <a
          href="https://www.instagram.com/yourhandle"
          target="_blank"
          className="text-white text-2xl hover:text-purple-400 transition"
        >
          📸
        </a>
        <a
          href="https://www.linkedin.com/in/yourhandle"
          target="_blank"
          className="text-white text-2xl hover:text-purple-400 transition"
        >
          💼
        </a>
        <a
          href="https://www.youtube.com/@yourhandle"
          target="_blank"
          className="text-white text-2xl hover:text-purple-400 transition"
        >
          ▶️
        </a>
      </motion.div>
    </section>
  );
}
