import { motion } from "framer-motion";

// Use available public images for story section
const storyImages = [
  "/a4.jpeg",
  "/a6.jpeg",
  "/a8.jpeg",
  "/a9.jpeg",
  "/a10.jpeg",
  "/a12.jpeg",
];

export default function OurStory() {
  return (
    <section className="relative overflow-hidden bg-black py-32 text-white">
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-[160px]" />
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-yellow-500/10 blur-[160px]" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="px-6 text-center"
      >
        <p className="text-sm uppercase tracking-[6px] text-yellow-400">
          Our Story
        </p>

        <h2
          className="mt-4 text-5xl font-bold md:text-7xl"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          A Love Written
          <br />
          By Destiny
        </h2>

        <div className="mx-auto mt-8 h-px w-28 bg-yellow-400" />
      </motion.div>

      <div className="mx-auto mt-24 grid max-w-6xl items-start gap-12 px-6 lg:grid-cols-[1.05fr_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[32px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-lg"
        >
          <p className="text-lg leading-9 text-white/70">
            Every love story is beautiful, but ours is our favorite.
            <br />
            <br />
            From the moment our paths crossed, life became brighter, softer, and
            filled with meaning. What started as a simple connection slowly
            became a bond built with laughter, trust, and endless memories.
            <br />
            <br />
            Through every smile, every adventure, and every challenge, we found
            home in each other.
            <br />
            <br />
            Now, with full hearts and endless love, we invite you to celebrate
            the beginning of our forever journey.
          </p>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-xl italic text-yellow-400">
              “And suddenly, all the love songs were about you.”
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          {storyImages.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[22px] border border-yellow-500/20 bg-white/[0.04] p-2 shadow-lg"
            >
              <img
                src={image}
                alt={`Story moment ${index + 1}`}
                className="h-40 w-full rounded-[14px] bg-black/30 object-contain p-1 sm:h-48"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
