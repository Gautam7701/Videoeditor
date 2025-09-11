import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black/90 py-12 px-8 border-t border-purple-600/30">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
      >
        {/* Brand */}
        <div className="text-white text-xl font-bold drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">
          Lakshay Maheswari
        </div>

        {/* Quick Links */}
        <div className="flex gap-6 text-gray-300">
          <a href="#home" className="hover:text-purple-400 transition">Home</a>
          <a href="#about" className="hover:text-purple-400 transition">About</a>
          <a href="#showreel" className="hover:text-purple-400 transition">Showreel</a>
          <a href="#services" className="hover:text-purple-400 transition">Services</a>
          <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
        </div>

        {/* Social Links */}
        {/* <div className="flex gap-6 text-white text-2xl">
          <a href="mailto:your.email@example.com" className="hover:text-purple-400 transition">📧</a>
          <a href="https://www.instagram.com/yourhandle" target="_blank" className="hover:text-purple-400 transition">📸</a>
          <a href="https://www.linkedin.com/in/yourhandle" target="_blank" className="hover:text-purple-400 transition">💼</a>
          <a href="https://www.youtube.com/@yourhandle" target="_blank" className="hover:text-purple-400 transition">▶️</a>
        </div> */}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-8 text-center text-gray-400 text-sm"
      >
        &copy; {new Date().getFullYear()} Lakshay Maheswari. All rights reserved.
      </motion.div>
    </footer>
  );
}
