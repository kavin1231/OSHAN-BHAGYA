import { motion } from "framer-motion";

export default function Story() {
  return (
    <section className="bg-black px-6 py-28 text-center text-white">
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        className="text-3xl text-yellow-400 md:text-5xl"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
      >
        Our Story
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12 }}
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto mt-6 max-w-2xl text-white/65"
      >
        From strangers to soulmates, every frame led us here. This is not just a
        wedding, it is a cinematic journey of love.
      </motion.p>
    </section>
  );
}
