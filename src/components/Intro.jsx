import { Reveal, GoldDivider, Mandala } from './shared.jsx'

export default function Intro({ data }) {
  return (
    <section id="intro" className="paper-ivory relative overflow-hidden py-28">
      <Mandala className="-right-40 top-10 text-gold" size={460} />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="eyebrow text-xs text-gold">{data.eyebrow}</p>
          <h2 className="mt-3 font-heading text-4xl font-semibold text-wine md:text-5xl">
            {data.heading}
          </h2>
          <div className="mt-5 flex justify-center">
            <GoldDivider />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-8 font-display text-2xl leading-relaxed text-espresso/85 md:text-[27px]">
            {data.body}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
