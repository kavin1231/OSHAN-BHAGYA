import { motion } from "framer-motion";

export default function FooterQuote() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
      className="bg-black px-6 py-24 text-center text-white"
    >
      <p className="text-xs uppercase tracking-[0.45em] text-yellow-300/75">
        Forever
      </p>
      <h2
        className="mt-4 text-4xl md:text-5xl"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
      >
        Together is a beautiful place to be.
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-white/60">
        And so the adventure begins.
      </p>
    </motion.section>
  );
}