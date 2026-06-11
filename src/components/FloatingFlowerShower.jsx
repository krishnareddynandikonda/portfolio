import { useMemo } from 'react'
import { Sunflower, Marigold } from './shared.jsx'

// A small lotus-pink petal
function Petal({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      <path d="M20 2 C30 12 30 28 20 38 C10 28 10 12 20 2 Z" fill="#F2A0C0" stroke="#E5639B" strokeWidth="1.5" />
    </svg>
  )
}

function renderFlower(kind, size) {
  if (kind === 0) return <Sunflower size={size} />
  if (kind === 1) return <Marigold size={size} color="#EE7B0C" />
  if (kind === 2) return <Marigold size={size} color="#F5B700" />
  return <Petal size={size * 0.7} />
}

// Festive flower shower across the whole site: sunflowers, marigolds, petals
// falling slowly from top to bottom, drifting and rotating. Fixed layer,
// pointer-events-none so it never blocks content.
export default function FloatingFlowerShower({ count = 28 }) {
  const flowers = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        left: Math.random() * 100,
        size: 14 + Math.random() * 26,
        duration: 14 + Math.random() * 16,
        delay: -Math.random() * 30, // negative so the shower is mid-fall on load
        opacity: 0.2 + Math.random() * 0.35,
        kind: i % 4,
        alt: i % 2 === 0,
      })),
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
          }}
        >
          {renderFlower(f.kind, f.size)}
        </span>
      ))}
    </div>
  )
}
