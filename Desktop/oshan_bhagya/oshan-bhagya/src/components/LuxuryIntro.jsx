import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

export default function LuxuryIntro({ onOpen }) {
  const [closing, setClosing] = useState(false);

  const particles = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        left: `${8 + ((i * 7) % 84)}%`,
        top: `${10 + ((i * 13) % 78)}%`,
        duration: 6 + (i % 5),
        delay: (i % 6) * 0.45,
      })),
    [],
  );

  const handleOpen = () => {
    if (closing) return;
    setClosing(true);

    setTimeout(() => {
      onOpen();
    }, 800);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
      >
        <img
          src="/a3.jpeg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-20 blur-sm"
        />

        <div className="absolute h-[680px] w-[680px] rounded-full bg-yellow-500/12 blur-[190px]" />

        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute h-1.5 w-1.5 rounded-full bg-yellow-300/60"
            style={{ left: particle.left, top: particle.top }}
            animate={{ opacity: [0.2, 0.95, 0.2], y: [0, -20, 0] }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            closing ? { opacity: 0, scale: 1.1 } : { opacity: 1, scale: 1 }
          }
          transition={{
            duration: closing ? 0.8 : 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative w-full max-w-2xl rounded-[40px] border border-yellow-500/20 bg-white/5 p-12 text-center shadow-[0_0_80px_rgba(255,215,0,0.08)] backdrop-blur-2xl"
        >
          <p className="text-sm uppercase tracking-[8px] text-yellow-400">
            Wedding Invitation
          </p>

          <h1 className="font-wedding-script mt-8 text-6xl text-white md:text-7xl">
            Oshan
          </h1>

          <div className="my-4 text-3xl text-yellow-400">&</div>

          <h1 className="font-wedding-script text-6xl text-white md:text-7xl">
            Bhagya
          </h1>

          <div className="mx-auto mt-8 h-[1px] w-24 bg-yellow-400" />

          <p className="mt-8 leading-8 text-white/60">
            Together with their families
            <br />
            request the honour of your presence
            <br />
            as they celebrate their wedding day.
          </p>

          <button
            type="button"
            onClick={handleOpen}
            className="mt-10 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 px-10 py-4 font-semibold text-black transition hover:scale-105"
          >
            Open Invitation
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
