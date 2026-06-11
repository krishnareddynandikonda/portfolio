import { useMemo } from 'react'
import { Sunflower, Marigold } from './shared.jsx'

// Elegant lotus-pink petal
function Petal({ size = 14 }) {
  return (
    <svg width={size} height={size * 1.3} viewBox="0 0 40 52" aria-hidden="true">
      <defs>
        <linearGradient id="pet" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FBC7DC" />
          <stop offset="55%" stopColor="#EE83AE" />
          <stop offset="100%" stopColor="#D7457E" />
        </linearGradient>
      </defs>
      <path
        d="M20 1 C33 14 35 34 20 51 C5 34 7 14 20 1 Z"
        fill="url(#pet)"
        stroke="#C73C72"
        strokeWidth="0.8"
      />
      <path d="M20 6 C24 20 24 36 20 48" fill="none" stroke="#C73C72" strokeWidth="0.7" opacity="0.5" />
    </svg>
  )
}

// Weighted flower picker: 75% pink petals, 15% tiny marigold, 10% small sunflower
function pickKind(r) {
  if (r < 0.75) return 'petal'
  if (r < 0.9) return 'marigold'
  return 'sunflower'
}

function renderFlower(kind, size) {
  if (kind === 'sunflower') return <Sunflower size={size} />
  if (kind === 'marigold') return <Marigold size={size} color={Math.random() > 0.5 ? '#EE7B0C' : '#F5B700'} />
  return <Petal size={size} />
}

// Premium wedding flower shower: small pink petals drifting across the whole
// site with depth (blur/opacity variation). Fixed, pointer-events-none.
export default function FloatingFlowerShower({ count = 42 }) {
  const flowers = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const kind = pickKind(Math.random())
        // keep petals small & elegant; sunflowers/marigolds tiny accents
        const base =
          kind === 'sunflower' ? 12 + Math.random() * 8 : kind === 'marigold' ? 9 + Math.random() * 7 : 8 + Math.random() * 12
        const depth = Math.random() // 0 = far (small/blurred), 1 = near
        return {
          left: Math.random() * 100,
          size: base * (0.7 + depth * 0.6),
          duration: 16 + Math.random() * 18,
          delay: -Math.random() * 34,
          opacity: 0.18 + depth * 0.4,
          blur: (1 - depth) * 1.4,
          kind,
          alt: i % 2 === 0,
        }
      }),
    [count],
  )

  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden" aria-hidden="true">
      {flowers.map((f, i) => (
        <span
          key={i}
          className="absolute top-0"
          style={{
            left: `${f.left}%`,
            animation: `${f.alt ? 'fallAlt' : 'fall'} ${f.duration}s linear ${f.delay}s infinite`,
            opacity: f.opacity,
            filter: f.blur > 0.2 ? `blur(${f.blur.toFixed(1)}px)` : undefined,
          }}
        >
          {renderFlower(f.kind, f.size)}
        </span>
      ))}
    </div>
  )
}
