import { Sun } from 'lucide-react'
import { Reveal, SectionHeading, Mandala } from './shared.jsx'

export default function HoroscopeSection({ data }) {
  return (
    <section id="horoscope" className="silk-maroon relative overflow-hidden py-28">
      <Mandala className="-right-40 bottom-0" reverse size={560} />

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <Reveal>
          <SectionHeading eyebrow={data.eyebrow} heading={data.heading} dark />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="glass-dark mt-12 overflow-hidden">
            <div className="flex items-center justify-center gap-3 border-b border-gold/25 py-5">
              <Sun className="h-5 w-5 text-gold-soft" />
              <span className="eyebrow text-xs text-gold-soft/80">Traditional Particulars</span>
            </div>
            <dl className="divide-y divide-gold/15">
              {data.rows.map((row) => (
                <div key={row.label} className="flex items-center justify-between px-7 py-4">
                  <dt className="font-body text-ivory/65">{row.label}</dt>
                  <dd className="font-display text-lg font-medium text-gold-soft">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
