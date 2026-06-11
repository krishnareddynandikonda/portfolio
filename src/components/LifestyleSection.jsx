import * as Icons from 'lucide-react'
import { motion } from 'framer-motion'
import { Reveal, SectionHeading } from './shared.jsx'

export default function LifestyleSection({ data }) {
  return (
    <section id="lifestyle" className="paper-ivory relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading eyebrow={data.eyebrow} heading={data.heading} />
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
                className="group flex flex-col items-center gap-3 rounded-2xl border border-gold/30 bg-white/40 px-4 py-7 text-center shadow-sm transition-colors hover:border-gold hover:bg-gold/5"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold-soft to-gold text-wine shadow-gold transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <span className="font-accent text-sm text-espresso">{tile.label}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
