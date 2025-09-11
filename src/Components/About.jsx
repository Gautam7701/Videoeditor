import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-purple-950 to-black px-8"
    >
      <div className="max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image / Editor vibe */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="/editor-profile.png" // replace with your photo
            alt="Lakshay"
            className="rounded-2xl shadow-2xl border-4 border-purple-600/40"
          />
          <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-purple-600 blur-3xl opacity-50 rounded-full"></div>
        </motion.div>

        {/* Right: About text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-200 space-y-6"
        >
          <h2 className="text-5xl font-extrabold text-white drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]">
            About Me
          </h2>
          <p className="text-lg leading-relaxed">
            I’m <span className="text-purple-400 font-bold">Lakshay Maheswari</span>, 
            a passionate cinematic video editor. I transform raw footage into 
            stories that move audiences — from music videos and commercials to 
            social media reels and short films.
          </p>
          <p className="text-lg leading-relaxed">
            With an eye for detail and a love for motion, I blend 
            <span className="text-pink-400 font-semibold"> storytelling </span> 
            with <span className="text-purple-400 font-semibold">visual rhythm</span> 
            to create edits that are bold, modern, and unforgettable.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-purple-600 rounded-xl text-white font-bold shadow-lg hover:bg-purple-700 transition"
          >
            Let’s Work Together 🚀
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
