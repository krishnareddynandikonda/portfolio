import { Reveal, SectionHeading } from './shared.jsx'

export default function CareerSection({ data }) {
  return (
    <section id="career" className="paper-ivory relative py-28">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <SectionHeading eyebrow={data.eyebrow} heading={data.heading} />
        </Reveal>

        <div className="relative mt-14 pl-8 md:pl-0">
          {/* vertical line */}
          <span className="absolute left-[7px] top-2 h-full w-[2px] bg-gradient-to-b from-gold via-gold/40 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8">
            {data.timeline.map((item, i) => {
              const left = i % 2 === 0
              return (
                <Reveal key={item.title} delay={i * 0.05}>
                  <div className={`relative md:flex md:items-center ${left ? '' : 'md:flex-row-reverse'}`}>
                    {/* node */}
                    <span className="absolute -left-[27px] top-2 h-4 w-4 rounded-full border-2 border-ivory bg-gold shadow-gold md:left-1/2 md:-translate-x-1/2" />
                    <div className="md:w-1/2 md:px-8">
                      <div className="glass px-6 py-5">
                        <h3 className="font-heading text-xl font-semibold text-wine">{item.title}</h3>
                        <p className="mt-1 text-espresso/75">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
