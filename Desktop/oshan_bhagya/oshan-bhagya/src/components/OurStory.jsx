import { motion } from "framer-motion";

// Use available public images for story section
const storyImages = ["/g8.png", "/g11.jpeg", "/g13.png", "/g15.png"];

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

      <div className="mx-auto mt-24 grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          <div className="relative h-[300px] overflow-hidden rounded-[40px] shadow-2xl">
            <img
              src={storyImages[0]}
              alt="Our story first moment"
              className="h-[600px] w-full object-cover object-top"
            />

            <div className="absolute inset-0 rounded-[40px] border border-yellow-500/20" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
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
      </div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto mt-28 max-w-5xl px-6"
      >
        <div className="relative overflow-hidden rounded-[40px]">
          <img
            src={storyImages[1]}
            alt="Another story moment"
            className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

          <div className="absolute bottom-10 left-10">
            <h3
              className="text-4xl"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Forever Starts Here
            </h3>

            <p className="mt-3 text-white/70">
              07 August • Pabavee Regency • Gampaha
            </p>
          </div>
        </div>
      </motion.div>

      <div className="mx-auto mt-10 grid max-w-6xl gap-5 px-6 sm:grid-cols-2 xl:grid-cols-4">
        {storyImages.slice(2).map((image, index) => (
          <motion.div
            key={image}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden rounded-[28px] border border-white/10"
          >
            <img
              src={image}
              alt={`Story moment ${index + 3}`}
              className="h-56 w-full object-cover transition duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
