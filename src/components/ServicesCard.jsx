import React, { useEffect, useRef, useState } from "react";

const ServicesCard = ({ service }) => {
  const cardRef = useRef(null);

  const [target, setTarget] = useState({ x: 0, y: 0, active: false });
  const [pos, setPos] = useState({ x: 0, y: 0, active: false });
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  // Smooth follow
  useEffect(() => {
    let raf;
    const tick = () => {
      setPos((p) => {
        const lerp = (a, b, t) => a + (b - a) * t;
        return {
          x: lerp(p.x, target.x, 0.15),
          y: lerp(p.y, target.y, 0.15),
          active: target.active,
        };
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);

  const handleMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setTarget({ x, y, active: true });

    // Tilt
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 6;
    const rotateY = ((x - centerX) / centerX) * -6;
    setTilt({ rotateX, rotateY });
  };

  const resetTilt = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setTarget((t) => ({ ...t, active: false }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseEnter={() => setTarget((t) => ({ ...t, active: true }))}
      onMouseLeave={resetTilt}
      className="relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/10 dark:bg-gray-900/40 backdrop-blur-xl transition-all duration-500 hover:scale-[1.03]"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        boxShadow: pos.active
          ? "0 0 25px rgba(59,130,246,0.7), 0 0 45px rgba(236,72,153,0.6), 0 0 65px rgba(34,211,238,0.5)"
          : "none",
      }}
    >
      {/* Cursor neon glow */}
      <div
        className={`pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 blur-3xl rounded-full mix-blend-screen transition-opacity duration-300 ${
          pos.active ? "opacity-90" : "opacity-0"
        }`}
        style={{
          left: pos.x,
          top: pos.y,
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle at center, rgba(59,130,246,0.6), rgba(236,72,153,0.5), rgba(34,211,238,0.5), transparent 70%)",
          animation: pos.active ? "spin 12s linear infinite" : "none",
        }}
      />

      {/* Neon border */}
      <div
        className={`absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-300 ${
          pos.active ? "opacity-60" : "opacity-20"
        }`}
        style={{
          border: "2px solid transparent",
          borderImage:
            "linear-gradient(120deg, #60a5fa, #a78bfa, #ec4899, #22d3ee) 1",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center gap-10 p-8 hover:p-7 transition-all rounded-[10px]">
        <div className="rounded-full p-4 bg-gray-100 dark:bg-gray-800 shadow-inner">
          <img
            src={service.icon}
            alt=""
            className="w-16 h-16 object-contain rounded-full"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white">
            {service.title}
          </h3>
          <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
            {service.description}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default ServicesCard;
