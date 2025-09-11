import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Mouse parallax effect
  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 20; // subtle range
    const y = (e.clientY / innerHeight - 0.5) * 20;
    setOffset({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Animated background blobs */}
      <div className="absolute -top-60 -left-60 w-[600px] h-[600px] bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-[blob_7s_ease-in-out_infinite]"></div>
      <div className="absolute top-40 -right-40 w-[450px] h-[450px] bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-[blob_10s_ease-in-out_infinite]"></div>

      {/* Subtle light streaks */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[2px] h-full bg-white/5 animate-[streak_8s_linear_infinite]"></div>
        <div className="absolute w-[2px] h-full bg-white/5 left-1/4 animate-[streak_10s_linear_infinite]"></div>
      </div>

      {/* Main content */}
      <motion.div
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
        className="relative z-10 text-center px-6 transition-transform duration-150"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]"
        >
          LAKSHAY MAHESWARI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-4 text-2xl md:text-3xl text-gray-200 tracking-wider"
        >
          Cinematic Video Editor 🎬 | Storytelling in Motion
        </motion.p>

        <motion.button
  whileHover={{
    scale: 1.1,
    boxShadow: "0 0 25px rgba(168,85,247,0.9)",
  }}
  onClick={() => 
    document.getElementById("showreel")?.scrollIntoView({ behavior: "smooth" })
  }
  className="mt-8 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 text-white font-bold text-lg shadow-lg hover:scale-105 transition-all"
>
  Watch My Work
</motion.button>

      </motion.div>

      {/* Circular scroll down indicator */}
      <div
        onClick={() =>
          document.getElementById("showreel")?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full 
                   border-2 border-purple-500 flex items-center justify-center 
                   animate-bounce cursor-pointer shadow-lg shadow-purple-700/50
                   hover:scale-110 transition-transform"
      >
        <span className="text-white text-xl animate-bounce">⬇️</span>
      </div>

      {/* Add Tailwind keyframes in your tailwind.config.js for blob and streak animations */}
    </section>
  );
}
