import { motion } from 'framer-motion'
import { Flower2 } from 'lucide-react'

// Resolve a /public asset path against Vite's base (so photos work on
// GitHub Pages project sites, e.g. /krishnareddy/photos/...).
export const asset = (p) => (p ? import.meta.env.BASE_URL + p.replace(/^\//, '') : p)

// ---- Reveal-on-scroll wrapper ----
export function Reveal({ children, delay = 0, y = 28, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ---- Gold divider with lotus ----
export function GoldDivider({ className = '' }) {
  return (
    <div className={`gold-divider ${className}`}>
      <span className="line" />
      <span className="dot" />
      <Flower2 className="h-5 w-5 text-gold-soft" strokeWidth={1.4} />
      <span className="dot" />
      <span className="line" />
    </div>
  )
}

// ---- Section eyebrow + heading ----
export function SectionHeading({ eyebrow, heading, dark = false, center = true }) {
  return (
    <div className={center ? 'text-center' : ''}>
      <p className={`eyebrow text-xs ${dark ? 'text-gold-soft/80' : 'text-gold/90'}`}>{eyebrow}</p>
      <h2
        className={`mt-3 font-heading text-4xl font-semibold md:text-5xl ${
          dark ? 'gold-text' : 'text-wine'
        }`}
      >
        {heading}
      </h2>
      <div className="mt-5 flex justify-center">
        <GoldDivider />
      </div>
    </div>
  )
}

// ---- Photo with graceful placeholder fallback ----
export function Photo({ src, alt = 'Portrait', label = 'Add your photo' }) {
  if (src) {
    return <img className="ph-img" src={asset(src)} alt={alt} loading="lazy" />
  }
  return (
    <div className="photo-ph aspect-[3/4]">
      <Flower2 className="h-10 w-10 text-gold-soft/80" strokeWidth={1.3} />
      <span className="eyebrow text-[11px] text-gold-soft/90">{label}</span>
      <span className="font-display text-sm italic text-ivory/70">3:4 portrait looks best</span>
    </div>
  )
}

// ---- Subtle rotating mandala layer ----
export function Mandala({ className = '', reverse = false, size = 520 }) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={`pointer-events-none absolute opacity-[0.08] ${
        reverse ? 'animate-spinRev' : 'animate-spinSlow'
      } ${className}`}
      aria-hidden="true"
    >
      <g fill="none" stroke="#C9A227" strokeWidth="0.6">
        <circle cx="100" cy="100" r="96" />
        <circle cx="100" cy="100" r="78" />
        <circle cx="100" cy="100" r="58" />
        <circle cx="100" cy="100" r="34" />
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i * Math.PI) / 12
          return (
            <line
              key={i}
              x1={100 + 34 * Math.cos(a)}
              y1={100 + 34 * Math.sin(a)}
              x2={100 + 96 * Math.cos(a)}
              y2={100 + 96 * Math.sin(a)}
            />
          )
        })}
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * Math.PI) / 6
          return (
            <circle key={`p${i}`} cx={100 + 78 * Math.cos(a)} cy={100 + 78 * Math.sin(a)} r="6" />
          )
        })}
      </g>
    </svg>
  )
}
