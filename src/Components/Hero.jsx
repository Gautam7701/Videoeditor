import { motion } from "framer-motion";

export default function Hero() {
  // Variants for staggering children
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      className="relative h-screen w-full flex flex-col items-center justify-center text-center"
    >
      {/* Background image with low opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/heroimage.jpg')",
          opacity: 0.7, // adjust opacity here
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Main content with staggered animation */}
      <motion.div
        className="relative z-10 px-6 flex flex-col items-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg"
          variants={fadeUp}
        >
          LAKSHAY MAHESHWARI
        </motion.h1>

        <motion.p
          className="mt-4 text-2xl md:text-3xl text-gray-200"
          variants={fadeUp}
        >
          Creative Cinematic Editor | Crafting Stories Through Motion
        </motion.p>

        <motion.p
          className="mt-2 text-lg md:text-xl text-gray-300 max-w-xl mx-auto"
          variants={fadeUp}
        >
          Transforming visions into visually stunning narratives. Specializing in cinematic video editing, storytelling, and motion graphics.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex flex-col md:flex-row gap-4 justify-center"
          variants={fadeUp}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() =>
              document.getElementById("showreel")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 rounded-2xl bg-purple-600 text-white font-bold text-lg shadow-lg hover:bg-purple-700 transition-all"
          >
            Watch My Work
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#contact"
            className="px-8 py-4 rounded-2xl bg-white text-purple-700 font-bold text-lg shadow-lg hover:bg-gray-200 transition-all"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div
        onClick={() =>
          document.getElementById("showreel")?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full 
                   border-2 border-white flex items-center justify-center 
                   animate-bounce cursor-pointer"
      >
        <span className="text-white text-xl">⬇️</span>
      </div>
    </section>
  );
}
