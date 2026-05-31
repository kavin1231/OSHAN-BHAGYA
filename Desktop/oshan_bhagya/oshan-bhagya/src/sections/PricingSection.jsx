import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../animations/sectionVariants';

const plans = [
  {
    name: 'Essentials',
    price: '$29',
    description: 'For intimate celebrations that need a refined RSVP flow.',
    items: ['3 templates', 'Guest list tracking', 'Basic reminders'],
  },
  {
    name: 'Signature',
    price: '$79',
    description: 'For event planners who want polished automation and analytics.',
    featured: true,
    items: ['Unlimited templates', 'Live dashboard', 'Personalized messaging'],
  },
  {
    name: 'Concierge',
    price: 'Custom',
    description: 'For multi-day or high-touch events with bespoke needs.',
    items: ['White-glove setup', 'Custom branding', 'Priority support'],
  },
];

export default function PricingSection() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <motion.div className="section-heading" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.28 }}>
          <motion.p className="section-kicker" variants={fadeUp}>
            Pricing
          </motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            Flexible plans for celebrations of every size.
          </motion.h2>
          <motion.p className="section-copy" variants={fadeUp}>
            Start with a focused RSVP toolkit or move into a fully managed concierge setup
            when the event calls for it.
          </motion.p>
        </motion.div>

        <motion.div className="pricing-grid" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          {plans.map((plan) => (
            <motion.article
              key={plan.name}
              className={`price-card glass-panel${plan.featured ? ' price-card-featured' : ''}`}
              variants={fadeUp}
            >
              {plan.featured ? <span className="price-badge">Most popular</span> : null}
              <h3>{plan.name}</h3>
              <p className="price-value">{plan.price}</p>
              <p className="price-description">{plan.description}</p>
              <ul>
                {plan.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a className={`button ${plan.featured ? 'button-primary' : 'button-secondary'}`} href="#hero">
                Choose plan
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
