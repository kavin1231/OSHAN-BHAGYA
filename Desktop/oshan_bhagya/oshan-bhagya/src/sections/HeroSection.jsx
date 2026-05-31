import { motion } from 'framer-motion';
import { fadeUp, scaleIn, stagger } from '../animations/sectionVariants';

const metrics = [
  { value: '1.2M+', label: 'Guest invites delivered' },
  { value: '94%', label: 'Average RSVP completion' },
  { value: '18 min', label: 'From concept to launch' },
];

export default function HeroSection() {
  return (
    <section className="hero section" id="hero">
      <div className="container hero-grid">
        <motion.div className="hero-copy" variants={stagger} initial="hidden" animate="show">
          <motion.p className="section-kicker hero-kicker" variants={fadeUp}>
            Luxury guest experiences, simplified
          </motion.p>
          <motion.h1 className="hero-title" variants={fadeUp}>
            Invite with style.
            <br />
            Track every RSVP with precision.
          </motion.h1>
          <motion.p className="hero-copy-text" variants={fadeUp}>
            Oshan Bhagya turns wedding and event invitations into a polished digital
            experience with elegant templates, live attendance tracking, and polished
            communication workflows.
          </motion.p>
          <motion.div className="hero-actions" variants={fadeUp}>
            <a className="button button-primary" href="#templates">
              Explore templates
            </a>
            <a className="button button-secondary" href="#features">
              See platform features
            </a>
          </motion.div>

          <motion.div className="hero-metrics" variants={stagger}>
            {metrics.map((metric) => (
              <motion.article key={metric.label} className="metric-card glass-panel" variants={fadeUp}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="hero-visual" variants={scaleIn} initial="hidden" animate="show">
          <div className="hero-orb hero-orb-gold" />
          <div className="hero-orb hero-orb-rose" />
          <article className="glass-panel hero-card">
            <p className="hero-card-label">Live event cockpit</p>
            <h2>Golden hour ceremony</h2>
            <div className="hero-card-list">
              <div>
                <span>Confirmed</span>
                <strong>286</strong>
              </div>
              <div>
                <span>Pending</span>
                <strong>41</strong>
              </div>
              <div>
                <span>VIP meals</span>
                <strong>64</strong>
              </div>
            </div>
            <div className="hero-card-quote">
              <p>
                “A seamless RSVP experience that feels as curated as the invitation
                itself.”
              </p>
            </div>
          </article>
        </motion.div>
      </div>
    </section>
  );
}
