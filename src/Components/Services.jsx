import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Music Videos",
      description:
        "Cinematic edits that sync perfectly with the rhythm and mood of your tracks.",
      icon: "🎵",
    },
    {
      title: "Commercials",
      description:
        "Professional ad edits that grab attention and leave a lasting impact.",
      icon: "📺",
    },
    {
      title: "Social Media Reels",
      description:
        "Engaging, scroll-stopping short videos tailored for Instagram, TikTok, and YouTube Shorts.",
      icon: "🎬",
    },
    {
      title: "Short Films",
      description:
        "Story-driven edits with cinematic flair, perfect for festivals and online streaming.",
      icon: "🎥",
    },
  ];

  return (
    <section
      id="services"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-purple-950 to-black px-8 py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-white mb-16 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]"
      >
        My Services
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl w-full">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-purple-900/20 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center text-center shadow-lg border-2 border-purple-600/50 hover:scale-105 transition"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
            <p className="text-gray-200 text-base leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
