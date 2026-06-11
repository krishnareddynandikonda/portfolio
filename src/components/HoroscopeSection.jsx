import { Sun } from 'lucide-react'
import { Reveal, SectionHeading, Mandala } from './shared.jsx'

export default function HoroscopeSection({ data }) {
  return (
    <section id="horoscope" className="petal-bg texture relative overflow-hidden py-28">
      <Mandala className="-right-40 bottom-0" reverse size={500} color="#EE7B0C" />

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <Reveal>
          <SectionHeading teHeading={data.teHeading} heading={data.heading} />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="card mt-12 overflow-hidden">
            <div className="flex items-center justify-center gap-3 border-b border-saffron/25 bg-gradient-to-r from-sunshine/30 to-saffron/20 py-5">
              <Sun className="h-5 w-5 text-saffron" />
              <span className="eyebrow text-xs text-saffron">Traditional Particulars</span>
            </div>
            <dl className="divide-y divide-saffron/15">
              {data.rows.map((row) => (
                <div key={row.label} className="flex items-center justify-between px-7 py-4">
                  <dt className="font-body text-ink/65">{row.label}</dt>
                  <dd className="font-display text-lg font-medium text-maroon">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
