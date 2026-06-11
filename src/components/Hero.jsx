import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import { Photo, Mandala, SunDivider, RangoliCorner, Sunflower, Kalasam, Lotus } from './shared.jsx'

export default function Hero({ data, onView, onDownload }) {
  return (
    <section id="hero" className="sun-bg texture relative flex min-h-screen items-center overflow-hidden">
      <Mandala className="-left-40 -top-40" size={520} color="#EE7B0C" />
      <Mandala className="-bottom-48 -right-44" reverse size={580} color="#E5639B" />
      <RangoliCorner className="absolute left-0 top-0 h-40 w-40" />
      <RangoliCorner className="absolute right-0 top-0 h-40 w-40 -scale-x-100" />
      <RangoliCorner className="absolute bottom-0 left-0 h-40 w-40 -scale-y-100" />
      <RangoliCorner className="absolute bottom-0 right-0 h-40 w-40 -scale-100" />
      <Kalasam size={66} className="absolute left-1/2 top-6 z-10 -translate-x-1/2 animate-sway" />
      <Lotus size={120} className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-50" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        {/* Text */}
        <div className="order-2 text-center md:order-1 md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="te text-2xl font-semibold text-saffron md:text-3xl"
          >
            {data.blessing}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="te mt-2 text-4xl font-bold leading-tight text-maroon md:text-5xl"
          >
            {data.nameTe}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45 }}
            className="mt-3 font-heading text-3xl font-semibold sun-text md:text-4xl"
          >
            {data.name}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-6 flex justify-center md:justify-start"
          >
            <SunDivider />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.72 }}
            className="mx-auto mt-6 max-w-md font-display text-2xl italic text-ink/85 md:mx-0"
          >
            {data.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className="te-body mt-3 text-lg font-medium tracking-wide text-peacock"
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
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium shadow-sm ${
                    [
                      'border-saffron/50 bg-saffron/10 text-saffron',
                      'border-peacock/50 bg-peacock/10 text-peacock',
                      'border-kumkum/50 bg-kumkum/10 text-kumkum',
                      'border-emerald/50 bg-emerald/10 text-emerald',
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
            <button onClick={onDownload} className="btn-outline inline-flex items-center gap-2 px-8 py-3 text-sm">
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
          <span className="glow-blob -left-8 -top-8 h-48 w-48 bg-saffron" />
          <span className="glow-blob -bottom-8 -right-8 h-48 w-48 bg-lotus" />
          <Sunflower size={56} className="absolute -right-4 -top-6 z-20 animate-sway" />
          <Sunflower size={40} className="absolute -bottom-3 -left-5 z-20 animate-sway" />
          <div className="arch-frame relative z-10">
            <div className="inner aspect-[3/4]">
              <Photo src={data.photo} alt={`${data.name} portrait`} label="Hero portrait" />
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#intro"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-saffron"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  )
}
