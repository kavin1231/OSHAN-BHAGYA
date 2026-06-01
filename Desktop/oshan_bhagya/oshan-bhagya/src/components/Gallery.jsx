import { motion } from "framer-motion";
// Use public images (placed in `public/`) so they can be replaced without rebuilding imports
const galleryImages = [
  // replaced g2 -> g10
  {
    image: "/a3.jpeg",
    title: "Golden Sunset",
    caption: "A warm close to the day",
  },
  // replaced g4 (tall) -> g11 (keep tall)
  {
    image: "/a4.jpeg",
    title: "Quiet Moments",
    caption: "Small moments, big love",
    tall: true,
  },
  // replaced g5 -> g12
  { image: "/a5.jpeg", title: "Laughter & Light", caption: "Where joy lives" },
  // replaced g7 -> g13
  { image: "/a6.png", title: "Hand in Hand", caption: "Together we go" },
  // replaced g8 -> g14
  { image: "/a7.png", title: "Whispers", caption: "Secrets between two" },
  // keep the additional new images
  { image: "/a8.png", title: "Promise", caption: "A vow beneath the sky" },
  { image: "/a1.png", title: "Nostalgia", caption: "A candid of us" },
  {
    image: "/a9.png",
    title: "Forever",
    caption: "This is our always",
    tall: true,
  },
];

// Ensure duplicates (by filename) are removed at render-time in case public/ changes
const uniqueGalleryImages = galleryImages.filter(
  (item, idx, arr) => arr.findIndex((a) => a.image === item.image) === idx,
);

// Show only the requested highlight images
const displayGalleryImages = uniqueGalleryImages.filter((item) =>
  ["/a3.jpeg", "/a8.png", "/a9.png"].includes(item.image),
);

export default function Gallery() {
  return (
    <section id="gallery" className="bg-black py-24 text-center text-white">
      <p className="text-xs uppercase tracking-[0.4em] text-yellow-300/80">
        Moments of Love
      </p>
      <h2
        className="mt-3 text-4xl md:text-6xl"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
      >
        Every frame tells our story
      </h2>

      <div className="mx-auto mt-12 grid max-w-7xl gap-5 px-6 md:grid-cols-2 xl:grid-cols-4">
        {displayGalleryImages.map((item, index) => (
          <motion.figure
            key={item.image}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.06 }}
            className={`group relative overflow-hidden rounded-[30px] border border-yellow-300/15 bg-white/5 shadow-[0_18px_80px_rgba(0,0,0,0.35)] ${item.tall ? "xl:row-span-2 xl:min-h-[640px]" : "xl:min-h-[300px]"}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className={`h-full w-full object-cover transition duration-700 group-hover:scale-110 ${item.tall ? "min-h-[640px]" : "min-h-[300px]"}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <figcaption className="absolute bottom-5 left-5 right-5 text-left">
              <p className="text-xs uppercase tracking-[0.35em] text-yellow-300/80">
                {item.title}
              </p>
              <p
                className="mt-2 text-2xl text-white"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {item.caption}
              </p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
