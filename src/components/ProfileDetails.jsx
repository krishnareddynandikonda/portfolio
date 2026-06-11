import * as Icons from 'lucide-react'
import { Reveal, SectionHeading } from './shared.jsx'

export default function ProfileDetails({ data }) {
  return (
    <section id="profile" className="sun-bg texture relative py-28">
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading teHeading={data.teHeading} heading={data.heading} />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {data.rows.map((row, i) => {
            const Icon = Icons[row.icon] || Icons.Dot
            return (
              <Reveal key={row.label} delay={i * 0.04}>
                <div className="card flex items-center gap-4 px-6 py-5 transition-transform duration-300 hover:-translate-y-1">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sunshine to-saffron text-white shadow-sun">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <div>
                    <p className="eyebrow text-[10px] text-saffron">{row.label}</p>
                    <p className="font-display text-xl font-medium text-ink">{row.value}</p>
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
