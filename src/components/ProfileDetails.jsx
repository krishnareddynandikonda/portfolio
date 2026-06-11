import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

export default function ProfileDetails({ data }) {
  return (
    <section id="profile" className="wine-bg relative py-28 md:py-40">
      <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-10">
        <div className="text-center">
          <span className="text-[0.72rem] uppercase tracking-[0.22em] text-brass-soft">03 — Profile</span>
          <p className="te mt-3 text-2xl font-semibold text-brass-soft md:text-3xl">{data.teHeading}</p>
          <h2 className="mt-1 font-heading text-3xl font-semibold text-paper md:text-4xl">{data.heading}</h2>
          <span className="mx-auto mt-5 block h-px w-16 bg-brass/50" />
        </div>

        <dl className="mt-14 grid gap-x-16 md:grid-cols-2">
          {data.rows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.06, ease: EASE }}
              className="flex items-baseline justify-between gap-6 border-b border-brass/20 py-5"
            >
              <dt className="shrink-0 text-[0.72rem] uppercase tracking-[0.22em] text-brass-soft/80">
                {row.label}
              </dt>
              <dd className="text-right font-heading text-lg text-paper md:text-xl">{row.value}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  )
}
