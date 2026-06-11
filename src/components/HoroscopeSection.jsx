import { motion } from 'framer-motion'
import { Mandala } from './shared.jsx'

const EASE = [0.22, 1, 0.36, 1]

export default function HoroscopeSection({ data }) {
  return (
    <section id="horoscope" className="wine-deep-bg relative overflow-hidden py-28 md:py-40">
      <Mandala
        className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05]"
        size={620}
        color="#CBB07A"
      />

      <div className="relative z-10 mx-auto max-w-[1000px] px-6 md:px-10">
        <div className="text-center">
          <span className="text-[0.72rem] uppercase tracking-[0.22em] text-brass-soft">05 — Horoscope</span>
          <p className="te mt-3 text-2xl font-semibold text-brass-soft md:text-3xl">{data.teHeading}</p>
          <h2 className="mt-1 font-heading text-3xl font-semibold text-paper md:text-4xl">{data.heading}</h2>
          <span className="mx-auto mt-5 block h-px w-16 bg-brass/50" />
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-brass/20 bg-brass/15 sm:grid-cols-2">
          {data.rows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
              className="flex flex-col gap-1 bg-wine-deep px-7 py-6"
            >
              <span className="text-[0.72rem] uppercase tracking-[0.22em] text-brass-soft/80">{row.label}</span>
              <span className="font-heading text-xl text-paper">{row.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
