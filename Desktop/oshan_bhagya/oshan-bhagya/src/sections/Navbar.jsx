import { motion } from "framer-motion";
import { fadeUp } from "../animations/sectionVariants";

const links = [
  { label: "Features", href: "#features" },
  { label: "Templates", href: "#templates" },
  { label: "Pricing", href: "#pricing" },
  { label: "Stories", href: "#testimonials" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <motion.div
        className="navbar glass-panel container"
        variants={fadeUp}
        initial="hidden"
        animate="show"
      >
        <a className="nav-brand" href="#hero" aria-label="Oshan Bhagya home">
          <span className="nav-brand-mark">OB</span>
          <span className="nav-brand-copy">
            <strong>Oshan Bhagya</strong>
            <span>RSVP orchestration for curated celebrations</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="button button-primary nav-cta" href="#pricing">
          Start planning
        </a>
      </motion.div>
    </header>
  );
}
