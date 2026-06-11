import { HeartHandshake } from 'lucide-react'
import { Reveal, SectionHeading, Mandala } from './shared.jsx'
import { DiyaGlow } from './CulturalArtwork.jsx'

export default function PartnerExpectations({ data }) {
  return (
    <section id="partner" className="rose-bg relative overflow-hidden py-28">
      <Mandala className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" size={560} color="#E6C766" />
      <DiyaGlow className="absolute left-10 top-28 hidden md:block" size={46} />
      <DiyaGlow className="absolute right-10 top-28 hidden md:block" size={46} />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <SectionHeading teHeading={data.teHeading} heading={data.heading} dark />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="card card-accent mt-12 p-10 md:p-14">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-sunshine to-saffron text-white shadow-sun">
              <HeartHandshake className="h-7 w-7" strokeWidth={1.5} />
            </span>
            <p className="mt-7 font-display text-2xl leading-relaxed text-ink/85 md:text-[27px]">
              “{data.body}”
            </p>
            <p className="te-body mt-6 text-lg font-medium text-peacock">{data.teLine}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
