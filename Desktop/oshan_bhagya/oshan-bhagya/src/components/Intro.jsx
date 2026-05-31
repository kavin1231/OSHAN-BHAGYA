import { motion } from "framer-motion";

export default function Intro({ onOpen }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black px-6 text-center text-white">
      <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[140px]" />
      <div className="absolute right-[-8rem] top-[-8rem] h-[420px] w-[420px] rounded-full bg-pink-500/10 blur-[150px]" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-3xl"
      >
        <p className="mb-5 text-xs uppercase tracking-[0.55em] text-yellow-300/80">
          Wedding Invitation
        </p>
        <h1
          className="text-5xl md:text-7xl"
          style={{ fontFamily: "Great Vibes, cursive" }}
        >
          Oshan <span className="text-yellow-300">❤️</span> Bhagya
        </h1>
        <p
          className="mt-5 text-2xl md:text-3xl text-white/85"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          A New Chapter Begins
        </p>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 tracking-wide text-white/60 md:text-base">
          A cinematic celebration of two hearts, two families, and one beautiful
          promise.
        </p>

        <button
          type="button"
          onClick={onOpen}
          className="mt-10 rounded-full border border-yellow-300/30 bg-white/5 px-8 py-3 text-sm font-medium uppercase tracking-[0.24em] text-white transition hover:scale-105 hover:border-yellow-300/60 hover:bg-white/10"
        >
          Tap to Open Invitation
        </button>
      </motion.div>
    </div>
  );
}
