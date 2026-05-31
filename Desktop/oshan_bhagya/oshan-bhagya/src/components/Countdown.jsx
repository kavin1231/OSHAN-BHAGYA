import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const targetDate = new Date("2026-08-07T10:00:00").getTime();

function getTimeLeft() {
  const now = new Date().getTime();
  const diff = Math.max(targetDate - now, 0);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const items = [
    ["Days", timeLeft.days],
    ["Hours", timeLeft.hours],
    ["Minutes", timeLeft.minutes],
    ["Seconds", timeLeft.seconds],
  ];

  return (
    <section
      id="countdown"
      className="bg-black px-6 py-24 text-center text-white"
    >
      <p className="text-xs uppercase tracking-[0.35em] text-yellow-300/90">
        Wedding Countdown
      </p>
      <h2 className="mt-3 text-3xl font-bold text-yellow-300 md:text-4xl">
        Counting down to forever
      </h2>

      <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(([label, value], index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="rounded-[28px] border border-yellow-300/15 bg-white/10 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          >
            <div className="text-4xl font-bold text-white md:text-5xl">
              {value}
            </div>
            <p className="mt-2 text-sm uppercase tracking-[0.28em] text-white/60">
              {label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
