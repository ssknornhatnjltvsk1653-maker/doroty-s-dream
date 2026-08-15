import { useMemo } from "react";

type Kind = "petal" | "heart" | "sparkle";

const GLYPHS: Record<Kind, string[]> = {
  petal: ["🌸", "🌹", "🌷"],
  heart: ["♡", "❤", "💗"],
  sparkle: ["✦", "✧", "·"],
};

export function Petals({
  count = 18,
  kind = "petal",
  className = "",
  opacity = 0.75,
}: {
  count?: number;
  kind?: Kind;
  className?: string;
  opacity?: number;
}) {
  const items = useMemo(() => {
    const glyphs = GLYPHS[kind];
    return Array.from({ length: count }, (_, i) => {
      const seed = (i * 9301 + 49297) % 233280;
      const r = seed / 233280;
      const r2 = ((i + 3) * 4001) % 97 / 97;
      return {
        id: i,
        left: (r * 100).toFixed(2) + "%",
        delay: (r2 * 14).toFixed(2) + "s",
        duration: (11 + r * 12).toFixed(2) + "s",
        size: (10 + r2 * 20).toFixed(0) + "px",
        drift: ((r - 0.5) * 220).toFixed(0) + "px",
        glyph: glyphs[i % glyphs.length],
      };
    });
  }, [count, kind]);

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {items.map((p) => (
        <span
          key={p.id}
          className="absolute top-0 select-none will-change-transform"
          style={{
            left: p.left,
            fontSize: p.size,
            opacity: 0,
            ["--petal-drift" as string]: p.drift,
            ["--petal-opacity" as string]: String(opacity),
            animation: `${kind === "heart" ? "rise-heart" : "petal-fall"} ${p.duration} linear ${p.delay} infinite`,
          }}
        >
          {p.glyph}
        </span>
      ))}
    </div>
  );
}

export function Sparkles({ count = 14 }: { count?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const r = ((i * 7717) % 1000) / 1000;
        const r2 = ((i * 3313) % 1000) / 1000;
        return {
          id: i,
          left: (r * 100).toFixed(2) + "%",
          top: (r2 * 100).toFixed(2) + "%",
          delay: (r2 * 5).toFixed(2) + "s",
          size: (6 + r * 12).toFixed(0) + "px",
        };
      }),
    [count],
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((s) => (
        <span
          key={s.id}
          className="absolute text-rose"
          style={{
            left: s.left,
            top: s.top,
            fontSize: s.size,
            animation: `sparkle 3.6s ease-in-out ${s.delay} infinite`,
          }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}
