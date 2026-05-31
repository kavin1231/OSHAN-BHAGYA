import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations/sectionVariants";

const testimonials = [
  {
    quote:
      "We launched a fully branded RSVP flow in one afternoon and the guest experience felt premium from the first tap.",
    name: "Anika Perera",
    role: "Wedding planner",
  },
  {
    quote:
      "The live dashboard removed the guesswork. We knew counts, meal choices, and VIP needs before the weekend began.",
    name: "Dilan Fernando",
    role: "Event director",
  },
  {
    quote:
      "It looks like a luxury brand site, but it works like an operations tool. That balance is hard to find.",
    name: "Maya Silva",
    role: "Venue coordinator",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <motion.div
          className="section-heading"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.28 }}
        >
          <motion.p className="section-kicker" variants={fadeUp}>
            Client stories
          </motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            Trusted by teams that care about the details.
          </motion.h2>
          <motion.p className="section-copy" variants={fadeUp}>
            Designed for planners, hosts, and venues that want every guest
            touchpoint to feel intentional.
          </motion.p>
        </motion.div>

        <motion.div
          className="testimonial-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.name}
              className="testimonial-card glass-panel"
              variants={fadeUp}
            >
              <p className="testimonial-quote">“{testimonial.quote}”</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{testimonial.name[0]}</div>
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
