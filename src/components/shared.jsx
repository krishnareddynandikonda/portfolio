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

// ---- Marigold flower (layered petals) ----
export function Marigold({ className = '', size = 36, color = '#EE7B0C' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true">
      {Array.from({ length: 12 }).map((_, i) => (
        <circle key={`o${i}`} cx="50" cy="20" r="11" fill={color} transform={`rotate(${i * 30} 50 50)`} opacity="0.95" />
      ))}
      {Array.from({ length: 12 }).map((_, i) => (
        <circle key={`m${i}`} cx="50" cy="30" r="9" fill="#FFB000" transform={`rotate(${i * 30 + 15} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="13" fill="#C85A00" />
    </svg>
  )
}

// ---- Lotus motif ----
export function Lotus({ className = '', size = 60, color = '#E5639B' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 80" className={className} aria-hidden="true">
      <g fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round">
        <path d="M60 72 C40 55 40 28 60 12 C80 28 80 55 60 72 Z" fill={`${color}22`} />
        <path d="M60 72 C30 60 20 38 26 20 C46 26 58 46 60 72 Z" fill={`${color}1a`} />
        <path d="M60 72 C90 60 100 38 94 20 C74 26 62 46 60 72 Z" fill={`${color}1a`} />
        <path d="M60 72 C22 66 8 50 6 36 C30 36 50 52 60 72 Z" fill={`${color}14`} />
        <path d="M60 72 C98 66 112 50 114 36 C90 36 70 52 60 72 Z" fill={`${color}14`} />
      </g>
    </svg>
  )
}

// ---- Kalasam (decorative pot + coconut) ----
export function Kalasam({ className = '', size = 60 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 120" className={className} aria-hidden="true">
      <g stroke="#9C7C1A" strokeWidth="2">
        <ellipse cx="50" cy="40" rx="20" ry="14" fill="#1E7A52" />
        <path d="M30 44 C30 80 38 104 50 110 C62 104 70 80 70 44 Z" fill="#EE7B0C" />
        <path d="M34 58 H66 M32 72 H68 M34 86 H66" stroke="#FFD34D" strokeWidth="3" fill="none" />
        <circle cx="50" cy="22" r="10" fill="#C85A00" />
        <path d="M50 12 C46 4 54 4 50 12" fill="#7A3E0A" />
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

// ---- Marigold garland divider ----
export function Garland({ count = 11, className = '' }) {
  return (
    <div className={`garland ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <i key={i} />
      ))}
    </div>
  )
}

// ---- Section heading: Telugu + English ----
export function SectionHeading({ teHeading, heading, center = true, dark = false }) {
  return (
    <div className={center ? 'text-center' : ''}>
      {teHeading && (
        <p className={`te text-2xl font-semibold md:text-3xl ${dark ? 'text-gold-soft' : 'text-maroon/80'}`}>
          {teHeading}
        </p>
      )}
      <h2
        className={`mt-1 font-heading text-3xl font-semibold tracking-wide md:text-4xl ${
          dark ? 'gold-text' : 'text-maroon'
        }`}
      >
        {heading}
      </h2>
      <div className={`mt-5 ${center ? 'flex justify-center' : ''}`}>
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
