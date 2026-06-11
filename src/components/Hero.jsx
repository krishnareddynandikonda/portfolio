import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import { Photo, Mandala, GoldDivider } from './shared.jsx'

// Soft floating golden petals
function Petals() {
  const petals = Array.from({ length: 14 })
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((_, i) => {
        const left = Math.random() * 100
        const dur = 14 + Math.random() * 12
        const delay = Math.random() * 12
        const size = 6 + Math.random() * 8
        return (
          <span
            key={i}
            className="absolute bottom-[-40px] rounded-full bg-gold-soft/40 blur-[1px] animate-floatUp"
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              animationDuration: `${dur}s`,
              animationDelay: `${delay}s`,
            }}
          />
        )
      })}
    </div>
  )
}

export default function Hero({ data, onView, onDownload }) {
  return (
    <section id="hero" className="silk-maroon relative flex min-h-screen items-center overflow-hidden">
      <Mandala className="-left-40 -top-40" size={560} />
      <Mandala className="-bottom-48 -right-44" reverse size={620} />
      <Petals />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        {/* Text */}
        <div className="order-2 text-center md:order-1 md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="eyebrow text-[11px] text-gold-soft/80"
          >
            {data.kicker}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="mt-4 font-heading text-5xl font-semibold leading-tight gold-text md:text-6xl"
          >
            {data.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="mt-6 flex justify-center md:justify-start"
          >
            <GoldDivider />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mx-auto mt-6 max-w-md font-display text-2xl italic text-ivory/90 md:mx-0"
          >
            {data.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className="mx-auto mt-4 max-w-md text-ivory/65 md:mx-0"
          >
            {data.subtext}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4 md:justify-start"
          >
            <button onClick={onView} className="btn-gold px-8 py-3 text-sm">
              {data.ctaPrimary}
            </button>
            <button onClick={onDownload} className="btn-outline inline-flex items-center gap-2 px-8 py-3 text-sm">
              <Download className="h-4 w-4" /> {data.ctaSecondary}
            </button>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 mx-auto w-full max-w-sm md:order-2"
        >
          <div className="gold-frame">
            <div className="inner aspect-[3/4]">
              <Photo src={data.photo} alt={`${data.name} portrait`} label="Hero portrait" />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-gold-soft/70"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </motion.a>
    </section>
  )
}
