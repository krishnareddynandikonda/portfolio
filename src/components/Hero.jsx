import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import { Photo, Mandala, RangoliCorner, Sunflower, Kalasam } from './shared.jsx'
import { Toranam, TempleGopuram, PeacockFeather } from './CulturalArtwork.jsx'

export default function Hero({ data, onView, onDownload }) {
  return (
    <section id="hero" className="royal-bg relative flex min-h-screen items-center overflow-hidden">
      {/* temple skyline */}
      <TempleGopuram className="absolute bottom-0 left-1/2 h-64 w-[34rem] max-w-none -translate-x-1/2 opacity-25" color="rgba(201,162,39,0.35)" />
      <Mandala className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" size={680} color="#E6C766" />

      {/* hanging garland across the top */}
      <Toranam className="absolute inset-x-0 top-0 h-14 opacity-90" />

      <RangoliCorner className="absolute left-0 top-10 h-36 w-36 opacity-60" />
      <RangoliCorner className="absolute right-0 top-10 h-36 w-36 -scale-x-100 opacity-60" />
      <PeacockFeather className="absolute -left-2 top-1/3 hidden opacity-40 md:block" size={70} />
      <PeacockFeather className="absolute -right-2 top-1/3 hidden -scale-x-100 opacity-40 md:block" size={70} />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-6 pb-24 pt-28 md:grid-cols-2">
        {/* Text */}
        <div className="order-2 text-center md:order-1 md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="flex justify-center md:justify-start"
          >
            <Kalasam size={56} className="animate-sway" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18 }}
            className="te mt-2 text-2xl font-semibold text-gold-soft md:text-3xl"
          >
            {data.blessing}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="te mt-2 text-4xl font-bold leading-tight gold-text md:text-5xl"
          >
            {data.nameTe}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45 }}
            className="mt-3 font-heading text-3xl font-semibold text-cream md:text-4xl"
          >
            {data.name}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-5 flex justify-center md:justify-start"
          >
            <Toranam className="h-9 w-56" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.72 }}
            className="mx-auto mt-5 max-w-md font-display text-2xl italic text-cream/90 md:mx-0"
          >
            {data.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className="te-body mt-3 text-lg font-medium tracking-wide text-gold-soft"
          >
            {data.teLine}
          </motion.p>

          {data.quickFacts && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.92 }}
              className="mt-6 flex flex-wrap justify-center gap-2.5 md:justify-start"
            >
              {data.quickFacts.map((f, i) => (
                <span
                  key={f}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium backdrop-blur-sm ${
                    [
                      'border-gold/60 bg-gold/15 text-gold-soft',
                      'border-peacock/60 bg-peacock/20 text-cyan-100',
                      'border-lotus/60 bg-lotus/20 text-pink-100',
                      'border-emerald/60 bg-emerald/20 text-green-100',
                    ][i % 4]
                  }`}
                >
                  {f}
                </span>
              ))}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start"
          >
            <button onClick={onView} className="btn-sun px-8 py-3 text-sm">
              {data.ctaPrimary}
            </button>
            <button onClick={onDownload} className="btn-outline inline-flex items-center gap-2 border-gold-soft/70 bg-white/10 px-8 py-3 text-sm text-gold-soft hover:bg-white/20">
              <Download className="h-4 w-4" /> {data.ctaSecondary}
            </button>
          </motion.div>
        </div>

        {/* Portrait in temple arch */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-1 mx-auto w-full max-w-sm md:order-2"
        >
          <Mandala className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-125" size={460} color="#E6C766" />
          <span className="glow-blob -left-8 -top-8 h-48 w-48 bg-saffron" />
          <span className="glow-blob -bottom-8 -right-8 h-48 w-48 bg-lotus" />
          <Sunflower size={42} className="absolute -right-3 -top-5 z-20 animate-sway" />
          <Kalasam size={44} className="absolute -bottom-4 -left-5 z-20 animate-sway" />
          <div className="arch-frame relative z-10">
            <div className="inner aspect-[3/4]">
              <Photo src={data.photo} alt={`${data.name} portrait`} label="Hero portrait" />
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#intro"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-gold-soft"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  )
}
