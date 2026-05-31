import { motion } from "framer-motion";

const hearts = [
  { left: "8%", size: 20, duration: 12, delay: 0 },
  { left: "18%", size: 16, duration: 14, delay: 1.4 },
  { left: "34%", size: 22, duration: 11, delay: 0.6 },
  { left: "48%", size: 14, duration: 13, delay: 2 },
  { left: "64%", size: 18, duration: 15, delay: 1 },
  { left: "78%", size: 24, duration: 12.5, delay: 2.2 },
  { left: "88%", size: 16, duration: 14.5, delay: 0.4 },
];

export default function Hearts() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart, index) => (
        <motion.span
          key={index}
          aria-hidden="true"
          className="absolute text-rose-400/70 drop-shadow-[0_0_16px_rgba(255,77,109,0.35)]"
          style={{
            left: heart.left,
            bottom: "-12%",
            fontSize: `${heart.size}px`,
          }}
          initial={{ opacity: 0, y: 0, scale: 0.7 }}
          animate={{
            opacity: [0, 0.7, 0.35, 0],
            y: ["0%", "-120%", "-220%"],
            x: [0, index % 2 === 0 ? 18 : -18, 0],
            scale: [0.7, 1, 0.95],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            repeatDelay: 0.5,
            ease: "easeInOut",
          }}
        >
          ❤
        </motion.span>
      ))}
    </div>
  );
}
