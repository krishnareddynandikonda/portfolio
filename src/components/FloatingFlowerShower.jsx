import { useMemo } from 'react'
import { Sunflower, Marigold } from './shared.jsx'

// Elegant petal (lotus-pink by default, or gold)
const PETAL_COLORS = {
  pink: ['#FBC7DC', '#EE83AE', '#D7457E', '#C73C72'],
  gold: ['#FBE7B0', '#ECC85B', '#C9A227', '#9C7C1A'],
}
function Petal({ size = 14, tone = 'pink', id = 'p' }) {
  const c = PETAL_COLORS[tone]
  const gid = `pet-${tone}-${id}`
  return (
    <svg width={size} height={size * 1.3} viewBox="0 0 40 52" aria-hidden="true">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={c[0]} />
          <stop offset="55%" stopColor={c[1]} />
          <stop offset="100%" stopColor={c[2]} />
        </linearGradient>
      </defs>
      <path d="M20 1 C33 14 35 34 20 51 C5 34 7 14 20 1 Z" fill={`url(#${gid})`} stroke={c[3]} strokeWidth="0.8" />
      <path d="M20 6 C24 20 24 36 20 48" fill="none" stroke={c[3]} strokeWidth="0.7" opacity="0.5" />
    </svg>
  )
}

// Weighted picker: 80% pink petals, 10% marigold, 5% gold petal, 5% tiny sunflower
function pickKind(r) {
  if (r < 0.8) return 'petal'
  if (r < 0.9) return 'marigold'
  if (r < 0.95) return 'gold'
  return 'sunflower'
}

function renderFlower(kind, size, id) {
  if (kind === 'sunflower') return <Sunflower size={size} />
  if (kind === 'marigold') return <Marigold size={size} color={id % 2 ? '#EE7B0C' : '#F5B700'} />
  if (kind === 'gold') return <Petal size={size} tone="gold" id={id} />
  return <Petal size={size} tone="pink" id={id} />
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
          kind === 'sunflower'
            ? 11 + Math.random() * 6
            : kind === 'marigold'
              ? 9 + Math.random() * 6
              : 8 + Math.random() * 12
        const depth = Math.random() // 0 = far (small/blurred), 1 = near
        return {
          left: Math.random() * 100,
          size: base * (0.7 + depth * 0.6),
          duration: 16 + Math.random() * 18,
          delay: -Math.random() * 34,
          opacity: 0.1 + depth * 0.22,
          blur: (1 - depth) * 1.6,
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
          {renderFlower(f.kind, f.size, i)}
        </span>
      ))}
    </div>
  )
}
