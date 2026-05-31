import { useState } from "react";

export default function RSVP() {
  const [sent, setSent] = useState(false);

  return (
    <section className="py-20 text-center bg-black text-white">
      <h2 className="text-3xl font-bold text-yellow-400">RSVP Now</h2>

      {!sent ? (
        <button
          onClick={() => setSent(true)}
          className="mt-6 px-8 py-3 bg-yellow-500 text-black rounded-full"
        >
          I’m Attending ❤️
        </button>
      ) : (
        <p className="mt-6 text-green-400 text-lg">
          Thank you! We can’t wait to see you 💍
        </p>
      )}
    </section>
  );
}
