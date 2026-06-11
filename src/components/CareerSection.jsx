import * as Icons from 'lucide-react'
import { Reveal, SectionHeading } from './shared.jsx'

export default function CareerSection({ data }) {
  return (
    <section id="career" className="sun-bg texture relative py-28">
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading teHeading={data.teHeading} heading={data.heading} />
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-10 max-w-3xl text-center font-display text-2xl leading-relaxed text-ink/85">
            {data.body}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.cards.map((c, i) => {
            const Icon = Icons[c.icon] || Icons.Briefcase
            return (
              <Reveal key={c.label} delay={i * 0.05}>
                <div className="card flex items-start gap-4 px-6 py-6 transition-transform duration-300 hover:-translate-y-1">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sunshine to-saffron text-white shadow-sun">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <div>
                    <p className="eyebrow text-[10px] text-saffron">{c.label}</p>
                    <p className="mt-1 font-display text-lg font-medium text-ink">{c.value}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
