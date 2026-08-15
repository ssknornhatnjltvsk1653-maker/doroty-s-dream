export function Rose({
  className = "",
  size = 64,
  bloom = false,
  delay = 0,
}: {
  className?: string;
  size?: number;
  bloom?: boolean;
  delay?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden
      className={`${bloom ? "animate-bloom" : ""} ${className}`}
      style={{ animationDelay: `${delay}ms`, transformOrigin: "50% 60%" }}
    >
      <defs>
        <radialGradient id={`rg-${size}-${delay}`} cx="45%" cy="35%">
          <stop offset="0%" stopColor="oklch(0.82 0.12 12)" />
          <stop offset="55%" stopColor="oklch(0.65 0.19 14)" />
          <stop offset="100%" stopColor="oklch(0.44 0.17 18)" />
        </radialGradient>
      </defs>
      <g fill={`url(#rg-${size}-${delay})`}>
        <path d="M50 18c16 0 30 13 30 29S66 78 50 78 20 63 20 47s14-29 30-29z" opacity="0.55" />
        <path d="M50 26c11 0 21 9 21 21s-10 21-21 21-21-9-21-21 10-21 21-21z" opacity="0.75" />
        <path d="M50 34c7.5 0 13.5 6 13.5 13.5S57.5 61 50 61s-13.5-6-13.5-13.5S42.5 34 50 34z" />
        <path d="M50 41c4 0 7 3 7 7s-3 7-7 7-7-3-7-7 3-7 7-7z" opacity="0.85" />
      </g>
      <path
        d="M50 76c0 8 0 12 0 18"
        stroke="oklch(0.55 0.09 145)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M50 84c-8-6-14-4-16-2 4 6 11 7 16 2z"
        fill="oklch(0.6 0.11 148)"
        opacity="0.9"
      />
    </svg>
  );
}
