import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// Use images from public/ (served at root) so user-provided files are used directly
import Hearts from "./Hearts";

const slides = [
  { image: "/g10.jpeg", position: "center 24%" },
  { image: "/g11.jpeg", position: "center 35%" },
  { image: "/g12.jpeg", position: "center 18%" },
  { image: "/g13.png", position: "center 28%" },
  { image: "/g14.png", position: "center 22%" },
  { image: "/g15.png", position: "center 30%" },
  { image: "/g16.png", position: "center 26%" },
  { image: "/g8.png", position: "center 24%" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((previous) => (previous + 1) % slides.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex h-screen overflow-hidden bg-black"
    >
      <motion.img
        key={slides[index].image}
        src={slides[index].image}
        alt="Wedding couple"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1.15 }}
        transition={{ duration: 6, ease: "linear" }}
        className="absolute h-full w-full object-cover opacity-65"
        style={{ objectPosition: slides[index].position }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/45 to-black" />
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-yellow-500/10 to-transparent blur-3xl" />
      <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-yellow-500/10 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-[160px]" />

      <Hearts />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <p className="mb-4 text-xs uppercase tracking-[0.45em] text-yellow-300/90">
          Wedding Invitation
        </p>
        <h1
          className="text-6xl leading-tight text-white md:text-8xl"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Oshan <span className="text-yellow-300">❤️</span> Bhagya
        </h1>
        <p
          className="mt-4 text-lg text-white/70 md:text-xl"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Two souls. One destiny. A cinematic love story.
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-xl text-yellow-300"
        >
          Friday, 7th August 2026
        </motion.div>
        <p className="mt-2 text-white/70">Pabavee Regency, Gampaha</p>

        <button
          type="button"
          onClick={() => {
            document.getElementById("invitation")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="mt-8 rounded-full border border-yellow-300/30 bg-yellow-500 px-8 py-3 font-semibold text-black shadow-[0_0_40px_rgba(212,175,55,0.25)] transition hover:scale-110"
        >
          Open Details
        </button>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, dotIndex) => (
          <button
            key={dotIndex}
            type="button"
            onClick={() => setIndex(dotIndex)}
            className={`h-2.5 rounded-full transition-all ${dotIndex === index ? "w-10 bg-yellow-300" : "w-2.5 bg-white/40"}`}
            aria-label={`Go to slide ${dotIndex + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
