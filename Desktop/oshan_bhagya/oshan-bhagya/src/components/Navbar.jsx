import { motion } from "framer-motion";

const links = [
  { label: "Home", href: "#hero" },
  { label: "Details", href: "#details" },
  { label: "Gallery", href: "#gallery" },
  { label: "RSVP", href: "#rsvp" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="text-lg font-semibold uppercase tracking-[0.28em] text-white md:text-xl"
        >
          Oshan & Bhagya Weddings
        </a>

        <div className="hidden gap-8 text-sm text-white/70 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              className="transition hover:text-white"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Save the Date button removed per request */}
      </div>
    </motion.nav>
  );
}
