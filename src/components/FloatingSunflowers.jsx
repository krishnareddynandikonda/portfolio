import { useMemo } from 'react'
import { Sunflower } from './shared.jsx'

// Soft, slow-floating sunflowers used as a festive background layer across
// the whole site. Fixed + pointer-events-none so it never blocks content.
export default function FloatingSunflowers({ count = 18 }) {
  const flowers = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        left: Math.random() * 100,
        size: 16 + Math.random() * 30,
        duration: 20 + Math.random() * 22,
        delay: Math.random() * 26,
        opacity: 0.16 + Math.random() * 0.28,
      })),
    [count],
  )

  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden" aria-hidden="true">
      {flowers.map((f, i) => (
        <span
          key={i}
          className="absolute bottom-[-70px]"
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
