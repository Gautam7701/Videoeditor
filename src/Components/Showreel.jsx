

import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import { useState } from "react";

const projects = [
  { thumb: "/1stvideo.jpg", title: "Linkedin website promotion", link: "https://youtu.be/DXsDcdH_v58?si=rfNbXsqwfBhK-ZgH" },
  { thumb: "/2ndvideo.jpg", title: "Kho kho world cup anchoring reel", link: "https://youtube.com/shorts/hrqrPzpgxT4?si=8NxmxCe0qrOEDgCr" },
  { thumb: "/4thvideo.jpg", title: "Vera diwali gifting promotion reel", link: "https://youtube.com/shorts/-EbCZffsfNc?si=_zexDDzFfmMU7oYM" },
  { thumb: "/3rdvideo.jpg", title: "Darc build exhibition reel", link: "https://youtube.com/shorts/EvyG4x89jYw?si=4tcS8rVJIcnKoWB8" },
  { thumb: "/5thvideo.jpg", title: "Vera Corporate gifting reel", link: "https://youtube.com/shorts/tbgsUHzjDBw?si=6v1ClI5YNxQdsgUb" },
  { thumb: "/6thvideo.jpg", title: "Pragati maidan textile exhibition 2025", link: "https://youtube.com/shorts/Iwy-exSv7EQ?si=7_utEF46hM5lIuOP" }
];

export default function Showreel() {
  const [activeVideo, setActiveVideo] = useState("");

  const handleSelectProject = (videoLink) => setActiveVideo(videoLink);
  const handleBack = () => setActiveVideo("");

  return (
    <section id="showreel" className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black text-white px-6 py-16">
      
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold mb-12 drop-shadow-[0_0_15px_rgba(168,85,247,0.9)]"
      >
        My Showreel 🎞️
      </motion.h2>

      {/* Video Player */}
      <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl mb-16 border-2 border-purple-600">
        {activeVideo ? (
          <div className="relative">
            <ReactPlayer
              url={activeVideo}
              width="100%"
              height="480px"
              controls
              playing
            />
            <button
              onClick={handleBack}
              className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.8)] transition-all"
            >
              ← Back
            </button>
          </div>
        ) : (
          <div className="w-full h-[480px] bg-gray-900 flex items-center justify-center rounded-2xl">
            <p className="text-white font-bold">Click on any video below to play ⬇️</p>
          </div>
        )}
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl px-4">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, type: "spring", stiffness: 80 }}
            whileHover={{ scale: 1.05, rotate: -1 }}
            className="relative group overflow-hidden rounded-2xl shadow-xl cursor-pointer border-2 border-purple-600"
          >
            <img
              src={p.thumb}
              alt={p.title}
              className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                            flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 backdrop-blur-sm">
              <h3 className="text-white text-lg font-bold mb-2">{p.title}</h3>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 text-white rounded-full shadow-lg hover:shadow-[0_0_15px_rgba(168,85,247,0.8)] transition-all"
              >
                ▶ Play
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
