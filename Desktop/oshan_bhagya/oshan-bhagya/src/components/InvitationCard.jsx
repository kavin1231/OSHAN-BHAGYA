import { motion } from "framer-motion";

export default function InvitationCard({
  bride = "Bhagya",
  groom = "Oshan",
  date = "7th August",
  time = "10:00 AM",
  venue = "Pabavee Regency, Gampaha",
  note = "Ceremony starts at 10:00 AM",
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="mx-auto my-8 max-w-5xl rounded-[32px] border border-yellow-500/20 bg-white/10 p-6 text-white shadow-2xl backdrop-blur-xl md:p-8"
    >
      <div className="absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-br from-yellow-500/10 via-transparent to-pink-500/10 blur-2xl" />

      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-yellow-300/80">
          Save the Date
        </p>
        <h3
          className="mt-3 text-4xl md:text-6xl"
          style={{ fontFamily: "Great Vibes, cursive" }}
        >
          {groom} <span className="text-yellow-300">&amp;</span> {bride}
        </h3>
        <p className="mt-3 text-sm text-white/70 md:text-base">
          Together with their families
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-[24px] border border-yellow-300/15 bg-black/20 p-5 text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-yellow-300/75">
            Day & Date
          </p>
          <p
            className="mt-3 text-2xl"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Friday
          </p>
          <p className="mt-1 text-white/75">{date}</p>
        </div>

        <div className="rounded-[24px] border border-yellow-300/15 bg-black/20 p-5 text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-yellow-300/75">
            Time
          </p>
          <p
            className="mt-3 text-2xl"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            {time}
          </p>
          <p className="mt-1 text-white/75">We would love you there</p>
        </div>

        <div className="rounded-[24px] border border-yellow-300/15 bg-black/20 p-5 text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-yellow-300/75">
            Venue
          </p>
          <p
            className="mt-3 text-2xl"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            {venue}
          </p>
          <p className="mt-1 text-white/75">{note}</p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
          <p className="text-xs uppercase tracking-[0.32em] text-white/60">
            Groom's Family
          </p>
          <p className="mt-3 text-lg text-white/90">
            Harindra Fernando &amp; Chandani Perera
          </p>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
          <p className="text-xs uppercase tracking-[0.32em] text-white/60">
            Bride's Family
          </p>
          <p className="mt-3 text-lg text-white/90">
            Nihal Warnakulasuriya &amp; Nilmini Rajakaruna
          </p>
        </div>
      </div>
    </motion.section>
  );
}
