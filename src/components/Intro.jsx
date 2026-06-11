import { Reveal } from './shared.jsx'

export default function Intro({ data }) {
  return (
    <section id="intro" className="paper-bg relative py-28 md:py-40">
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="text-[0.72rem] uppercase tracking-[0.22em] text-brass">01 — Introduction</p>
          <p className="te mt-3 text-2xl font-semibold text-wine md:text-3xl">{data.teHeading}</p>
          <h2 className="mt-1 font-heading text-3xl font-semibold text-ink md:text-4xl">{data.heading}</h2>
          <span className="mx-auto mt-5 block h-px w-16 bg-brass/50" />
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-10 font-heading text-2xl italic leading-relaxed text-ink/75 md:text-3xl">
            {data.body}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="te-body mt-6 text-base text-brass">{data.teLine}</p>
        </Reveal>
      </div>
    </section>
  )
}
