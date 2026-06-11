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
