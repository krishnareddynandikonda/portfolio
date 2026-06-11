import * as Icons from 'lucide-react'
import { Reveal, SectionHeading, Mandala } from './shared.jsx'

export default function FamilyBackground({ data }) {
  return (
    <section id="family" className="cream-bg texture relative overflow-hidden py-28">
      <Mandala className="-left-44 top-1/4" size={460} color="#1E7A52" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading teHeading={data.teHeading} heading={data.heading} />
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-10 max-w-3xl text-center font-display text-2xl leading-relaxed text-ink/85">
            {data.body}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {data.members.map((m, i) => {
            const Icon = Icons[m.icon] || Icons.UserRound
            const iconBg = ['from-peacock to-emerald', 'from-lotus to-kumkum', 'from-sunshine to-saffron'][i % 3]
            return (
              <Reveal key={m.role} delay={i * 0.08}>
                <div className="card card-accent flex h-full flex-col items-center px-6 py-8 text-center transition-transform duration-300 hover:-translate-y-1">
                  <span className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${iconBg} text-white shadow-sun`}>
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <p className="eyebrow mt-4 text-[10px] text-saffron">{m.role}</p>
                  <p className="mt-1 font-heading text-xl font-semibold text-maroon">{m.name}</p>
                  <p className="mt-1 text-ink/70">{m.detail}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {data.values.map((v) => (
              <span
                key={v}
                className="rounded-full border border-saffron/40 bg-white/70 px-4 py-2 text-sm text-saffron shadow-sm"
              >
                {v}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
