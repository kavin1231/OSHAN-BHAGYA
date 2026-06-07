import { motion } from "framer-motion";
// Use public images (placed in `public/`) so they can be replaced without rebuilding imports
const galleryImages = [
  // replaced g2 -> g10
  {
    image: "/a3.webp",
    title: "Golden Sunset",
    caption: "A warm close to the day",
  },
  // replaced g4 (tall) -> g11 (keep tall)
  {
    image: "/a4.webp",
    title: "Quiet Moments",
    caption: "Small moments, big love",
    tall: true,
  },
  // replaced g5 -> g12
  { image: "/a5.webp", title: "Laughter & Light", caption: "Where joy lives" },
  // replaced g7 -> g13
  { image: "/a6.webp", title: "Hand in Hand", caption: "Together we go" },
  // replaced g8 -> g14
  { image: "/a7.webp", title: "Whispers", caption: "Secrets between two" },
  // keep the additional new images
  { image: "/a8.webp", title: "Promise", caption: "A vow beneath the sky" },
  { image: "/a1.webp", title: "Nostalgia", caption: "A candid of us" },
  {
    image: "/a9.webp",
    title: "Forever",
    caption: "This is our always",
    tall: true,
  },
  // add a11 for Moments of Love display
  { image: "/a11.webp", title: "Cherished", caption: "A captured memory" },
];

// Ensure duplicates (by filename) are removed at render-time in case public/ changes
const uniqueGalleryImages = galleryImages.filter(
  (item, idx, arr) => arr.findIndex((a) => a.image === item.image) === idx,
);

// Show only the requested highlight images
// include a11 in the highlighted set so it shows alongside the three cards


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

      
    </section>
  );
}
