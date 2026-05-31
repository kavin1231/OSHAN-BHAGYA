import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../animations/sectionVariants';

const templates = [
  {
    title: 'Classic ivory suite',
    tag: 'Formal wedding',
    note: 'Soft typography, generous spacing, and understated gold accents.',
  },
  {
    title: 'Midnight garden suite',
    tag: 'Evening celebration',
    note: 'A dramatic dark composition with rose-gold highlights and cinematic contrast.',
  },
  {
    title: 'Heritage monogram suite',
    tag: 'Destination event',
    note: 'A monogram-led layout that feels bespoke, ceremonial, and easy to personalize.',
  },
];

export default function TemplatesSection() {
  return (
    <section className="section" id="templates">
      <div className="container">
        <motion.div className="section-heading" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.28 }}>
          <motion.p className="section-kicker" variants={fadeUp}>
            Template library
          </motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            Designs that feel hand-finished, not templated.
          </motion.h2>
          <motion.p className="section-copy" variants={fadeUp}>
            Each template balances ceremony and clarity so guests know exactly where to look
            and how to respond.
          </motion.p>
        </motion.div>

        <motion.div className="template-grid" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }}>
          {templates.map((template) => (
            <motion.article key={template.title} className="template-card glass-panel" variants={fadeUp}>
              <div className="template-preview">
                <span className="template-monogram">OB</span>
                <div className="template-lines">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="template-copy">
                <span className="template-tag">{template.tag}</span>
                <h3>{template.title}</h3>
                <p>{template.note}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
