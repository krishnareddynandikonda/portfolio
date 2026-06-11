import { Phone, MessageCircle, Download, Mail, MapPin } from 'lucide-react'
import { Reveal, SectionHeading, Mandala } from './shared.jsx'

export default function Contact({ data, onDownload }) {
  const hasPhone = data.phoneDial && data.phoneDial.trim() !== ''
  const hasWhatsapp = data.whatsapp && data.whatsapp.trim() !== ''
  const hasEmail = data.email && data.email.includes('@')

  return (
    <section id="contact" className="sun-bg texture relative overflow-hidden py-28">
      <Mandala className="-left-40 -bottom-40" size={500} color="#0E7C9B" />

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <Reveal>
          <SectionHeading teHeading={data.teHeading} heading={data.heading} />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="card mt-12 p-10 text-center md:p-12">
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="flex flex-col items-center gap-2 text-ink/85">
                <Phone className="h-6 w-6 text-saffron" />
                <span className="font-display text-lg">{data.phone}</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-ink/85">
                <Mail className="h-6 w-6 text-saffron" />
                <span className="font-display text-lg">{data.email}</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-ink/85">
                <MapPin className="h-6 w-6 text-saffron" />
                <span className="font-display text-lg">{data.location}</span>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              {hasPhone ? (
                <a href={`tel:${data.phoneDial}`} className="btn-sun inline-flex items-center gap-2 px-7 py-3 text-sm">
                  <Phone className="h-4 w-4" /> Contact Family
                </a>
              ) : (
                <span className="btn-sun inline-flex cursor-not-allowed items-center gap-2 px-7 py-3 text-sm opacity-60">
                  <Phone className="h-4 w-4" /> Contact Family
                </span>
              )}

              {hasWhatsapp ? (
                <a
                  href={`https://wa.me/${data.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center gap-2 px-7 py-3 text-sm"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              ) : (
                <span className="btn-outline inline-flex cursor-not-allowed items-center gap-2 px-7 py-3 text-sm opacity-60">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </span>
              )}

              <button onClick={onDownload} className="btn-outline inline-flex items-center gap-2 px-7 py-3 text-sm">
                <Download className="h-4 w-4" /> Download Biodata PDF
              </button>
            </div>

            {(!hasPhone || !hasEmail) && (
              <p className="mt-6 text-sm italic text-ink/50">
                Contact details will be shared on request — to be updated.
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
