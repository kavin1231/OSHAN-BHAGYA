export default function Details() {
  return (
    <section className="bg-black px-6 py-20 text-center text-white">
      <p className="text-xs uppercase tracking-[0.35em] text-yellow-300/90">
        Wedding Details
      </p>
      <h2 className="mt-3 text-3xl font-bold md:text-4xl">Save the date</h2>

      <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h3 className="text-xl text-yellow-300">Date</h3>
          <p className="mt-2 text-white/75">25 December 2026</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h3 className="text-xl text-yellow-300">Venue</h3>
          <p className="mt-2 text-white/75">Grand Pearl Hotel</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h3 className="text-xl text-yellow-300">Time</h3>
          <p className="mt-2 text-white/75">6:00 PM Onwards</p>
        </div>
      </div>
    </section>
  );
}
