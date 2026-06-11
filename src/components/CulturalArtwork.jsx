// Reusable CSS/SVG cultural artwork — no image stickers.

// ---- Toranam: hanging mango-leaf + marigold garland (full width) ----
export function Toranam({ className = '' }) {
  const leaves = Array.from({ length: 24 })
  return (
    <svg
      viewBox="0 0 1200 70"
      preserveAspectRatio="none"
      className={`pointer-events-none w-full ${className}`}
      aria-hidden="true"
    >
      {/* string */}
      <path d="M0 8 Q600 30 1200 8" fill="none" stroke="#9C7C1A" strokeWidth="2" />
      {leaves.map((_, i) => {
        const x = 12 + i * (1176 / 23)
        const t = i / 23
        const y = 8 + Math.sin(t * Math.PI) * 22
        const isFlower = i % 2 === 0
        return isFlower ? (
          <g key={i} transform={`translate(${x} ${y})`}>
            <circle r="7" fill="#EE7B0C" />
            <circle r="4" fill="#FFD34D" />
          </g>
        ) : (
          <path
            key={i}
            d={`M${x} ${y} q7 16 0 30 q-7 -14 0 -30 Z`}
            fill="#1E7A52"
            stroke="#15603f"
            strokeWidth="0.8"
          />
        )
      })}
    </svg>
  )
}

// ---- Temple gopuram silhouette (South Indian tower) ----
export function TempleGopuram({ className = '', color = 'rgba(0,0,0,0.18)' }) {
  return (
    <svg viewBox="0 0 200 160" className={className} aria-hidden="true" preserveAspectRatio="xMidYMax meet">
      <g fill={color}>
        {/* stacked tiers */}
        <polygon points="40,160 160,160 150,128 50,128" />
        <polygon points="52,128 148,128 140,100 60,100" />
        <polygon points="62,100 138,100 131,76 69,76" />
        <polygon points="71,76 129,76 123,55 77,55" />
        <polygon points="79,55 121,55 116,38 84,38" />
        {/* kalasams on top */}
        <circle cx="100" cy="30" r="6" />
        <rect x="97" y="16" width="6" height="12" />
        <circle cx="84" cy="40" r="3" />
        <circle cx="116" cy="40" r="3" />
        {/* doorway */}
        <path d="M92 160 L92 138 Q100 128 108 138 L108 160 Z" fill="rgba(0,0,0,0.10)" />
      </g>
    </svg>
  )
}

// ---- Mandapam frame: ornamental wedding pillars + arch beam ----
export function MandapamFrame({ className = '' }) {
  return (
    <svg
      viewBox="0 0 320 420"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="mpg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F6E3A0" />
          <stop offset="50%" stopColor="#C9A227" />
          <stop offset="100%" stopColor="#8A6A14" />
        </linearGradient>
      </defs>
      <g fill="url(#mpg)">
        {/* left + right pillars */}
        <rect x="4" y="40" width="20" height="376" rx="4" />
        <rect x="296" y="40" width="20" height="376" rx="4" />
        {/* pillar capitals + bases */}
        <rect x="-2" y="34" width="32" height="12" rx="3" />
        <rect x="290" y="34" width="32" height="12" rx="3" />
        <rect x="-2" y="404" width="32" height="14" rx="3" />
        <rect x="290" y="404" width="32" height="14" rx="3" />
        {/* top beam */}
        <rect x="4" y="6" width="312" height="16" rx="4" />
        {/* arch swag */}
        <path d="M24 30 Q160 96 296 30 L296 44 Q160 110 24 44 Z" />
        {/* finials */}
        <circle cx="14" cy="2" r="7" />
        <circle cx="306" cy="2" r="7" />
        <circle cx="160" cy="0" r="8" />
      </g>
    </svg>
  )
}

// ---- Diya glow (small lamp with flame) ----
export function DiyaGlow({ className = '', size = 40 }) {
  return (
    <span className={`relative inline-block ${className}`} aria-hidden="true">
      <span className="absolute left-1/2 top-0 h-6 w-6 -translate-x-1/2 -translate-y-2 rounded-full bg-amber-300/70 blur-md animate-glow" />
      <svg width={size} height={size} viewBox="0 0 60 60" className="relative">
        <path d="M30 14 C33 22 33 28 30 34 C27 28 27 22 30 14 Z" fill="#FFC93C" />
        <path d="M30 18 C32 24 32 28 30 32 C28 28 28 24 30 18 Z" fill="#EE7B0C" />
        <path d="M8 38 Q30 54 52 38 Q30 46 8 38 Z" fill="#C9852B" />
        <path d="M8 38 Q30 50 52 38" fill="none" stroke="#8A6A14" strokeWidth="2" />
      </svg>
    </span>
  )
}

// ---- Gold ornament divider (wedding-invitation style) ----
export function GoldOrnamentDivider({ className = '', width = 220 }) {
  return (
    <svg width={width} height="22" viewBox="0 0 220 22" className={className} aria-hidden="true">
      <g stroke="#C9A227" strokeWidth="1.5" fill="none">
        <path d="M6 11 H92" />
        <path d="M214 11 H128" />
        <path d="M92 11 q9 -9 18 0 q9 9 18 0" />
      </g>
      <g fill="#C9A227">
        <circle cx="110" cy="11" r="3.4" />
        <circle cx="6" cy="11" r="2.6" />
        <circle cx="214" cy="11" r="2.6" />
        <path d="M110 2 l3 6 -3 -1 -3 1 z" />
        <path d="M110 20 l3 -6 -3 1 -3 -1 z" />
      </g>
    </svg>
  )
}

// ---- Peacock feather accent ----
export function PeacockFeather({ className = '', size = 80 }) {
  return (
    <svg width={size} height={size * 2.4} viewBox="0 0 60 144" className={className} aria-hidden="true">
      <g>
        <path d="M30 140 C30 100 30 60 30 40" stroke="#0E7C9B" strokeWidth="2" fill="none" />
        <ellipse cx="30" cy="30" rx="22" ry="30" fill="#0E7C9B" opacity="0.30" />
        <ellipse cx="30" cy="30" rx="15" ry="21" fill="#1E7A52" opacity="0.45" />
        <ellipse cx="30" cy="28" rx="9" ry="13" fill="#1c3a8a" opacity="0.8" />
        <circle cx="30" cy="26" r="5" fill="#C9A227" />
        <circle cx="30" cy="26" r="2.4" fill="#3d0d14" />
        {Array.from({ length: 14 }).map((_, i) => {
          const a = -60 + i * 9
          return (
            <line
              key={i}
              x1="30"
              y1="58"
              x2={30 + 26 * Math.sin((a * Math.PI) / 180)}
              y2={58 + 26 * Math.cos((a * Math.PI) / 180)}
              stroke="#0E7C9B"
              strokeWidth="1"
              opacity="0.5"
            />
          )
        })}
      </g>
    </svg>
  )
}
