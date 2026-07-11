import { useMemo } from "react";

/**
 * Fixed, full-viewport ambient background: aurora blobs, a faint grid,
 * and slow-drifting particles. Purely decorative — sits behind all content.
 */
export default function AnimatedBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 6,
      })),
    []
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-base-950">
      {/* Base grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:56px_56px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      {/* Aurora blobs */}
      <div className="absolute -top-40 -left-40 w-[32rem] h-[32rem] rounded-full bg-aurora-blue/30 blur-[120px] animate-blob" />
      <div className="absolute top-1/3 -right-40 w-[36rem] h-[36rem] rounded-full bg-aurora-purple/30 blur-[130px] animate-blob [animation-delay:4s]" />
      <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] rounded-full bg-aurora-cyan/20 blur-[120px] animate-blob [animation-delay:8s]" />

      {/* Floating particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-white/50 animate-float-slow"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: 0.35,
          }}
        />
      ))}

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-base-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,16,0.6)_100%)]" />
    </div>
  );
}
