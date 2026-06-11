import { Reveal, SunDivider, Mandala, Lotus } from './shared.jsx'

export default function Intro({ data }) {
  return (
    <section id="intro" className="cream-bg relative overflow-hidden py-28">
      <Mandala className="-right-40 top-10 opacity-[0.05]" size={420} color="#0E7C9B" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <div className="mb-6 flex justify-center opacity-80">
            <Lotus size={72} color="#7A1220" />
          </div>
        </Reveal>
        <Reveal>
          <p className="te text-2xl font-semibold text-saffron md:text-3xl">{data.teHeading}</p>
          <h2 className="mt-1 font-heading text-4xl font-semibold text-maroon md:text-5xl">
            {data.heading}
          </h2>
          <div className="mt-5 flex justify-center">
            <SunDivider />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-8 font-display text-2xl leading-relaxed text-ink/85 md:text-[27px]">
            {data.body}
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="te-body mt-6 text-lg font-medium text-peacock">{data.teLine}</p>
        </Reveal>
      </div>
    </section>
  )
}
