import { FaWhatsapp, FaLink } from "react-icons/fa";

export default function Share() {
  const shareText = "You're invited to our wedding ❤️";
  const url = typeof window !== "undefined" ? window.location.href : "/";

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    alert("Invitation link copied!");
  };

  const shareWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(shareText + " " + url)}`,
    );
  };

  return (
    <section className="py-20 text-center bg-black text-white">
      <h2 className="text-3xl font-bold text-yellow-400">
        Share Our Invitation
      </h2>

      <p className="text-white/60 mt-2">Send love to friends & family 💌</p>

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={copyLink}
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-full flex items-center gap-2"
        >
          <FaLink /> Copy Link
        </button>

        <button
          onClick={shareWhatsApp}
          className="px-6 py-3 bg-green-500 text-white rounded-full flex items-center gap-2"
        >
          <FaWhatsapp /> WhatsApp
        </button>
      </div>
    </section>
  );
}
