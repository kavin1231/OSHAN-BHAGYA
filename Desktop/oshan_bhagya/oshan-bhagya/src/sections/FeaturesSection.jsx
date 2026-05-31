import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../animations/sectionVariants';

const features = [
  {
    title: 'Elegant invite builder',
    description:
      'Compose refined invitations with a graceful visual hierarchy, rich RSVP details, and signature brand styling.',
  },
  {
    title: 'Real-time attendance view',
    description:
      'Monitor confirmations, meal choices, and family group responses in a single live dashboard.',
  },
  {
    title: 'Automated guest messaging',
    description:
      'Send reminders, updates, and day-of guidance using polished workflows that feel personal, not robotic.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="section" id="features">
      <div className="container">
        <motion.div className="section-heading" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.28 }}>
          <motion.p className="section-kicker" variants={fadeUp}>
            Core features
          </motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            Everything needed to manage elegant events end to end.
          </motion.h2>
          <motion.p className="section-copy" variants={fadeUp}>
            The platform is tuned for premium event experiences, from the first save-the-date
            to the final headcount handoff.
          </motion.p>
        </motion.div>

        <motion.div className="feature-grid" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          {features.map((feature, index) => (
            <motion.article key={feature.title} className="feature-card glass-panel" variants={fadeUp}>
              <span className="feature-index">0{index + 1}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
