import { Phone, MessageCircle, Download, Mail, MapPin } from 'lucide-react'
import { Reveal, SectionHeading, Mandala } from './shared.jsx'

export default function Contact({ data, onDownload }) {
  return (
    <section id="contact" className="silk-maroon relative overflow-hidden py-28">
      <Mandala className="-left-40 -bottom-40" size={560} />

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <Reveal>
          <SectionHeading eyebrow={data.eyebrow} heading={data.heading} dark />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="glass-dark mt-12 p-10 text-center md:p-12">
            <div className="grid gap-6 sm:grid-cols-3">
              <a href={`tel:${data.phoneDial}`} className="flex flex-col items-center gap-2 text-ivory/85 hover:text-gold-soft">
                <Phone className="h-6 w-6 text-gold-soft" />
                <span className="font-display text-lg">{data.phone}</span>
              </a>
              <a href={`mailto:${data.email}`} className="flex flex-col items-center gap-2 text-ivory/85 hover:text-gold-soft">
                <Mail className="h-6 w-6 text-gold-soft" />
                <span className="font-display text-lg">{data.email}</span>
              </a>
              <div className="flex flex-col items-center gap-2 text-ivory/85">
                <MapPin className="h-6 w-6 text-gold-soft" />
                <span className="font-display text-lg">{data.location}</span>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a href={`tel:${data.phoneDial}`} className="btn-gold inline-flex items-center gap-2 px-7 py-3 text-sm">
                <Phone className="h-4 w-4" /> Contact Family
              </a>
              <a
                href={`https://wa.me/${data.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-2 px-7 py-3 text-sm"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <button onClick={onDownload} className="btn-outline inline-flex items-center gap-2 px-7 py-3 text-sm">
                <Download className="h-4 w-4" /> Download Biodata PDF
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
