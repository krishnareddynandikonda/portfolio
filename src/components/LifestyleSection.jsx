import * as Icons from 'lucide-react'
import { motion } from 'framer-motion'
import { Reveal, SectionHeading } from './shared.jsx'

export default function LifestyleSection({ data }) {
  return (
    <section id="lifestyle" className="cream-bg texture relative py-28">
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading teHeading={data.teHeading} heading={data.heading} />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {data.tiles.map((tile, i) => {
            const Icon = Icons[tile.icon] || Icons.Sparkles
            return (
              <motion.div
                key={tile.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="card group flex flex-col items-center gap-3 px-4 py-7 text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-sunshine to-saffron text-white shadow-sun transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <span className="font-display text-base font-medium text-ink">{tile.label}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
