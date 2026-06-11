import { useMemo } from 'react'
import { Sunflower } from './shared.jsx'

// Soft, slow-floating sunflowers used as elegant background particles.
// `count` kept low so it stays premium, not busy.
export default function FloatingSunflowers({ count = 9 }) {
  const flowers = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        left: Math.random() * 100,
        size: 16 + Math.random() * 22,
        duration: 24 + Math.random() * 20,
        delay: Math.random() * 22,
        opacity: 0.12 + Math.random() * 0.22,
      })),
    [count],
  )

  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden" aria-hidden="true">
      {flowers.map((f, i) => (
        <span
          key={i}
          className="absolute bottom-[-60px]"
          style={{
            left: `${f.left}%`,
            animation: `floatUp ${f.duration}s linear ${f.delay}s infinite`,
            opacity: f.opacity,
          }}
        >
          <Sunflower size={f.size} />
        </span>
      ))}
    </div>
  )
}
