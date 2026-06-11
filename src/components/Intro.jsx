import { Reveal, SunDivider, Mandala, Lotus, RangoliCorner } from './shared.jsx'

export default function Intro({ data }) {
  return (
    <section id="intro" className="cream-bg texture relative overflow-hidden py-28">
      <Mandala className="-right-40 top-10" size={420} color="#0E7C9B" />
      <RangoliCorner className="absolute left-0 top-0 h-32 w-32 opacity-60" />
      <RangoliCorner className="absolute right-0 top-0 h-32 w-32 -scale-x-100 opacity-60" />
      <RangoliCorner className="absolute bottom-0 left-0 h-32 w-32 -scale-y-100 opacity-60" />
      <RangoliCorner className="absolute bottom-0 right-0 h-32 w-32 -scale-100 opacity-60" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <div className="mb-6 flex justify-center">
            <Lotus size={84} color="#7A1220" />
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
