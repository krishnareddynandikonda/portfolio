import { motion } from 'framer-motion'

// Resolve a /public asset path against Vite's base (so photos work on
// GitHub Pages project sites, e.g. /portfolio/photos/...).
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

// ---- Sunflower (decorative + floating particle) ----
export function Sunflower({ className = '', size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true">
      <g>
        {Array.from({ length: 16 }).map((_, i) => {
          const a = (i * 360) / 16
          return (
            <ellipse
              key={i}
              cx="50"
              cy="22"
              rx="7"
              ry="18"
              fill="#F5B700"
              stroke="#EE7B0C"
              strokeWidth="1"
              transform={`rotate(${a} 50 50)`}
            />
          )
        })}
        <circle cx="50" cy="50" r="17" fill="#7A3E0A" />
        <circle cx="50" cy="50" r="17" fill="url(#seed)" opacity="0.5" />
        <defs>
          <radialGradient id="seed">
            <stop offset="0%" stopColor="#A9590F" />
            <stop offset="100%" stopColor="#5A2E06" />
          </radialGradient>
        </defs>
      </g>
    </svg>
  )
}

// ---- Sunflower / rangoli divider ----
export function SunDivider({ className = '' }) {
  return (
    <div className={`sun-divider ${className}`}>
      <span className="line" />
      <span className="dot" />
      <Sunflower size={26} />
      <span className="dot" />
      <span className="line" />
    </div>
  )
}

// ---- Section heading: Telugu + English ----
export function SectionHeading({ teHeading, heading, center = true }) {
  return (
    <div className={center ? 'text-center' : ''}>
      {teHeading && (
        <p className="te text-2xl font-semibold text-saffron md:text-3xl">{teHeading}</p>
      )}
      <h2 className="mt-1 font-heading text-4xl font-semibold text-maroon md:text-5xl">
        {heading}
      </h2>
      <div className="mt-5 flex justify-center">
        <SunDivider />
      </div>
    </div>
  )
}

// ---- Photo with warm placeholder fallback ----
export function Photo({ src, alt = 'Portrait', label = 'Add your photo' }) {
  if (src) {
    return <img className="ph-img" src={asset(src)} alt={alt} loading="lazy" />
  }
  return (
    <div className="photo-ph aspect-[3/4]">
      <Sunflower size={42} />
      <span className="eyebrow text-[11px] text-saffron">{label}</span>
      <span className="font-display text-sm italic text-saffron/80">3:4 portrait looks best</span>
    </div>
  )
}

// ---- Rangoli corner ornament ----
export function RangoliCorner({ className = '' }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <g fill="none" stroke="#EE7B0C" strokeWidth="1.4" opacity="0.55">
        <path d="M0 60 A60 60 0 0 1 60 0" />
        <path d="M0 40 A40 40 0 0 1 40 0" />
        <path d="M0 80 A80 80 0 0 1 80 0" />
        {Array.from({ length: 6 }).map((_, i) => {
          const a = (i * 90) / 5
          const r = 70
          const x = r * Math.cos((a * Math.PI) / 180)
          const y = r * Math.sin((a * Math.PI) / 180)
          return <circle key={i} cx={x} cy={y} r="4" fill="#F5B700" stroke="none" />
        })}
      </g>
    </svg>
  )
}

// ---- Subtle rotating mandala ----
export function Mandala({ className = '', reverse = false, size = 520, color = '#EE7B0C' }) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={`pointer-events-none absolute opacity-[0.10] ${
        reverse ? 'animate-spinRev' : 'animate-spinSlow'
      } ${className}`}
      aria-hidden="true"
    >
      <g fill="none" stroke={color} strokeWidth="0.7">
        <circle cx="100" cy="100" r="96" />
        <circle cx="100" cy="100" r="76" />
        <circle cx="100" cy="100" r="54" />
        <circle cx="100" cy="100" r="30" />
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i * Math.PI) / 12
          return (
            <line
              key={i}
              x1={100 + 30 * Math.cos(a)}
              y1={100 + 30 * Math.sin(a)}
              x2={100 + 96 * Math.cos(a)}
              y2={100 + 96 * Math.sin(a)}
            />
          )
        })}
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * Math.PI) / 6
          return <circle key={`p${i}`} cx={100 + 76 * Math.cos(a)} cy={100 + 76 * Math.sin(a)} r="5" />
        })}
      </g>
    </svg>
  )
}
