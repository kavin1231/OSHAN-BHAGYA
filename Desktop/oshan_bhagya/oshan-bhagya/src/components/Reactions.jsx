import { useEffect, useState } from "react";

export default function Reactions() {
  const [hearts, setHearts] = useState([]);

  const addHeart = () => {
    const newHeart = {
      id: Date.now() + Math.random(),
      left: Math.random() * 100,
    };

    setHearts((prev) => [...prev, newHeart]);

    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 3000);
  };

  useEffect(() => {
    const interval = setInterval(addHeart, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute text-red-500 text-2xl animate-bounce"
          style={{ left: `${h.left}%`, bottom: 0 }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
}
