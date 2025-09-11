import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import { useState } from "react";

const projects = [
  { thumb: "/1stvideo.jpg", title: "Linkedin website promotion", link: "https://www.youtube.com/watch?v=HGeTsuf78zY" },
  { thumb: "/2ndvideo.jpg", title: "Kho kho world cup anchoring reel", link: "https://www.youtube.com/shorts/4eyE-c_-ZeQ" },
  { thumb: "/4thvideo.jpg", title: "Vera diwali gifting promotion reel", link: "https://www.youtube.com/shorts/LZ6blBTU8Ko" },
  { thumb: "/3rdvideo.jpg", title: "Darc build exhibition reel", link: "https://www.youtube.com/shorts/tLp-MgnP6JY" },
  { thumb: "/5thvideo.jpg", title: "Vera Corporate gifting reel", link: "https://youtube.com/shorts/9qm08HMSJ9o" },
  { thumb: "/6thvideo.jpg", title: "Pragati maidan textile exibition 2025", link: "https://www.youtube.com/shorts/p2u1Ot3j3rc" }
];


export default function Showreel() {
  const [activeVideo, setActiveVideo] = useState(""); // string, not null

  const handleSelectProject = (videoLink) => {
    setActiveVideo(videoLink); // directly play selected video
  };

  const handleBack = () => setActiveVideo("");

  return (
    <section id = "showreel" className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black text-white px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold mb-12 drop-shadow-[0_0_10px_rgba(255,0,255,0.8)]"
      >
        My Showreel 🎞️
      </motion.h2>

      {/* Video Player */}
      <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl mb-16">
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
              className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg"
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
      className="relative group overflow-hidden rounded-2xl shadow-xl cursor-pointer"
    >
      <img
        src={p.thumb}
        alt={p.title}
        className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                      flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 backdrop-blur-sm">
        <h3 className="text-white text-lg font-bold mb-2">{p.title}</h3>
        {/* Open video in new tab */}
        <a
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-purple-600 text-white rounded-full shadow-lg"
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
