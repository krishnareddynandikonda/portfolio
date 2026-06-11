import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { Reveal, SectionHeading, Mandala } from './shared.jsx'

export default function FamilyBackground({ data }) {
  return (
    <section id="family" className="silk-maroon relative overflow-hidden py-28">
      <Mandala className="-left-44 top-1/4" size={520} />

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <Reveal>
          <SectionHeading eyebrow={data.eyebrow} heading={data.heading} dark />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="glass-dark mt-12 p-10 text-center md:p-14">
            <p className="font-display text-2xl leading-relaxed text-ivory/90 md:text-[26px]">
              {data.body}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {data.values.map((v, i) => (
                <motion.span
                  key={v}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm text-gold-soft"
                >
                  <Heart className="h-3.5 w-3.5" /> {v}
                </motion.span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
