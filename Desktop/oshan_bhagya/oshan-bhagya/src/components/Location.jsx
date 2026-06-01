import { motion } from "framer-motion";

export default function Location({
  name = "Pabavee Regency",
  address = "Gampaha",
  mapsQuery,
}) {
  const query = encodeURIComponent(mapsQuery || `${name} ${address}`);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
  const embedUrl = `https://www.google.com/maps?q=${query}&output=embed`;

  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="mx-auto my-8 max-w-6xl overflow-hidden rounded-[32px] border border-yellow-500/20 bg-white/10 p-5 text-white shadow-2xl backdrop-blur-xl md:p-6"
    >
      <div className="grid gap-5 lg:grid-cols-[1.05fr_1fr]">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10">
          <img
            src="/a1.png"
            alt="Venue"
            className="h-full min-h-[280px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
          <div className="absolute bottom-5 left-5">
            <p className="text-xs uppercase tracking-[0.45em] text-yellow-300/80">
              Venue Image
            </p>
            <p
              className="mt-2 text-3xl"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              {name}
            </p>
            <p className="mt-1 text-white/75">{address}</p>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-[28px] border border-yellow-300/15 bg-black/25 p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-yellow-300/80">
              Venue & Directions
            </p>
            <h4
              className="mt-3 text-3xl"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              {name}
            </h4>
            <p className="mt-2 text-white/70">{address}</p>
            <p className="mt-4 text-sm leading-7 text-white/65">
              Join us at the celebration venue and open the map for quick
              directions.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-yellow-300 px-5 py-3 font-semibold text-black transition hover:scale-105"
            >
              Open in Google Maps
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
            >
              View Location
            </a>
          </div>
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-[28px] border border-white/10">
        <iframe
          title="Pabavee Regency map"
          src={embedUrl}
          className="h-72 w-full"
          loading="lazy"
        />
      </div>
    </motion.section>
  );
}
