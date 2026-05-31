import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function EnvelopeIntro({ onOpen }) {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);

    setTimeout(() => {
      onOpen();
    }, 2500);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        exit={{ opacity: 0 }}
      >
        <div className="relative">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="relative h-[220px] w-[340px] overflow-hidden rounded-lg bg-gradient-to-br from-yellow-100 to-yellow-50 shadow-2xl"
          >
            <motion.div
              animate={opened ? { y: -180 } : {}}
              transition={{ duration: 1.2 }}
              className="absolute bottom-0 left-1/2 flex h-[190px] w-[280px] -translate-x-1/2 flex-col items-center justify-center rounded-t-lg bg-white text-center shadow-lg"
            >
              <h2 className="text-3xl font-serif text-black">Oshan & Bhagya</h2>
              <p className="mt-2 text-gray-500">Save The Date</p>
            </motion.div>

            <motion.div
              animate={opened ? { rotateX: 180 } : {}}
              transition={{ duration: 1 }}
              style={{ transformOrigin: "top" }}
              className="absolute left-0 top-0 h-[120px] w-full bg-gradient-to-b from-yellow-300 to-yellow-200 clip-path-triangle"
            />
          </motion.div>

          {!opened ? (
            <button
              type="button"
              onClick={handleOpen}
              className="mt-10 w-full rounded-full bg-yellow-500 py-3 font-semibold text-black transition hover:scale-105"
            >
              Open Invitation 💌
            </button>
          ) : null}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
