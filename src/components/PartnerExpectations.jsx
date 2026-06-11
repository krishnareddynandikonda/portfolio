import { HeartHandshake } from 'lucide-react'
import { Reveal, SectionHeading, Mandala } from './shared.jsx'

export default function PartnerExpectations({ data }) {
  return (
    <section id="partner" className="silk-maroon relative overflow-hidden py-28">
      <Mandala className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" size={640} />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <SectionHeading eyebrow={data.eyebrow} heading={data.heading} dark />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="glass-dark mt-12 p-10 md:p-14">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gold-soft to-gold text-wine shadow-gold">
              <HeartHandshake className="h-7 w-7" strokeWidth={1.5} />
            </span>
            <p className="mt-7 font-display text-2xl leading-relaxed text-ivory/90 md:text-[27px]">
              “{data.body}”
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
