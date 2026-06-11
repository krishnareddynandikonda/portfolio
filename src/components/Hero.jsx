import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import { Photo, Mandala } from './shared.jsx'
import { GoldOrnamentDivider } from './CulturalArtwork.jsx'

const EASE = [0.22, 1, 0.36, 1]

export default function Hero({ data, onView, onDownload }) {
  return (
    <section id="hero" className="royal-bg relative flex min-h-screen items-center overflow-hidden">
      {/* single faint mandala for depth — restraint */}
      <Mandala className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05]" size={720} color="#E6C766" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 px-6 py-28 md:grid-cols-2">
        {/* Text */}
        <div className="order-2 text-center md:order-1 md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            className="te text-xl font-medium text-gold-soft md:text-2xl"
          >
            {data.blessing}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28, ease: EASE }}
            className="name-te gold-text mx-auto mt-4 md:mx-0"
          >
            {(data.nameTeLines || [data.nameTe]).map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.42, ease: EASE }}
            className="name-en mx-auto mt-4 text-ivory/80 md:mx-0"
          >
            {data.name}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="mt-7 flex justify-center md:justify-start"
          >
            <GoldOrnamentDivider width={230} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.66, ease: EASE }}
            className="mx-auto mt-7 max-w-md font-[Cormorant_Garamond] text-xl italic text-ivory/75 md:mx-0"
          >
            {data.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.76, ease: EASE }}
            className="te-body mt-3 text-base tracking-wide text-gold-soft/80"
          >
            {data.teLine}
          </motion.p>

          {data.quickFacts && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.86, ease: EASE }}
              className="mt-7 flex flex-wrap justify-center gap-2 md:justify-start"
            >
              {data.quickFacts.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-gold/30 px-4 py-1.5 text-xs tracking-wide text-ivory/70"
                >
                  {f}
                </span>
              ))}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.96, ease: EASE }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4 md:justify-start"
          >
            <button onClick={onView} className="btn-sun px-8 py-3 text-sm">
              {data.ctaPrimary}
            </button>
            <button onClick={onDownload} className="btn-outline inline-flex items-center gap-2 px-8 py-3 text-sm text-gold-soft">
              <Download className="h-4 w-4" /> {data.ctaSecondary}
            </button>
          </motion.div>
        </div>

        {/* Portrait — clean arch, hairline, soft shadow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: EASE }}
          className="relative order-1 mx-auto w-full max-w-xs md:order-2 md:max-w-sm"
        >
          <Mandala className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]" size={440} color="#E6C766" />
          <div className="arch-frame relative z-10">
            <div className="inner aspect-[3/4]">
              <Photo src={data.photo} alt={`${data.name} portrait`} label="Hero portrait" />
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#intro"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-gold-soft/70"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  )
}
