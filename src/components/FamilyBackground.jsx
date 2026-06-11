import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

export default function FamilyBackground({ data }) {
  return (
    <section id="family" className="paper-bg relative py-28 md:py-40">
      <div className="relative z-10 mx-auto max-w-[1000px] px-6 md:px-10">
        <div className="text-center">
          <span className="text-[0.72rem] uppercase tracking-[0.22em] text-brass">04 — Family</span>
          <p className="te mt-3 text-2xl font-semibold text-wine md:text-3xl">{data.teHeading}</p>
          <h2 className="mt-1 font-heading text-3xl font-semibold text-ink md:text-4xl">{data.heading}</h2>
          <span className="mx-auto mt-5 block h-px w-16 bg-brass/50" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto mt-10 max-w-2xl text-center font-heading text-xl italic leading-relaxed text-ink/70 md:text-2xl"
        >
          {data.body}
        </motion.p>

        <div className="mt-14 border-t border-brass/25">
          {data.members.map((m, i) => (
            <motion.div
              key={m.role}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              className="flex flex-col gap-1 border-b border-brass/25 py-7 md:flex-row md:items-baseline md:justify-between md:gap-8"
            >
              <span className="text-[0.72rem] uppercase tracking-[0.22em] text-brass">{m.role}</span>
              <span className="font-heading text-2xl text-wine md:flex-1 md:px-8">{m.name}</span>
              <span className="text-sm text-ink/60 md:text-right">{m.detail}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {data.values.map((v) => (
            <span key={v} className="text-[0.72rem] uppercase tracking-[0.22em] text-brass/70">
              {v}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
