import { FaHeart, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t border-yellow-500/20 bg-black px-6 py-12">
      <div className="absolute inset-0 bg-yellow-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl text-center">
        <h3
          className="text-3xl text-yellow-400 md:text-4xl"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Oshan{" "}
          <FaHeart className="mx-1 inline-block align-middle text-pink-400" />{" "}
          Bhagya
        </h3>

        <p className="mt-4 italic text-white/60">
          "A Beautiful Beginning to a Lifetime of Memories"
        </p>

        <div className="mx-auto my-8 h-px w-24 bg-yellow-500" />

        <div className="space-y-3">
          <h4 className="text-xl font-semibold text-white">
            Designed & Developed By
          </h4>

          <p className="text-lg font-medium text-yellow-400">Invitations.lk</p>

          <div className="flex items-center justify-center gap-2 text-white/70">
            <FaPhoneAlt className="text-yellow-400" />
            <span>077 473 6449</span>
          </div>

          <p className="text-white/50">Kavin Fernando</p>
        </div>

        <div className="mt-10 text-sm text-white/40">
          © {new Date().getFullYear()} Invitations.lk • All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
