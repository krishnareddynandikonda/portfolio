import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Reveal, SectionHeading, Photo, asset } from './shared.jsx'

export default function Gallery({ data }) {
  const [active, setActive] = useState(null)
  const photos = data.photos

  return (
    <section id="gallery" className="cream-bg texture relative py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading teHeading={data.teHeading} heading={data.heading} index="09 — Gallery" />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {photos.map((g, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => g.photo && setActive(i)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (i % 5) * 0.05 }}
              className="group sun-frame !p-2 text-left"
            >
              <div className="inner aspect-[3/4]">
                <div className="h-full w-full overflow-hidden">
                  <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-110">
                    <Photo src={g.photo} alt={g.caption} label={`Photo ${i + 1}`} />
                  </div>
                </div>
                {g.caption && (
                  <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-maroon/85 to-transparent px-3 pb-2 pt-6 font-accent text-xs tracking-wide text-sunshine opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {g.caption}
                  </span>
                )}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && photos[active]?.photo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-maroon/90 p-6 backdrop-blur-sm"
          >
            <button
              onClick={() => setActive(null)}
              className="absolute right-6 top-6 text-sunshine hover:text-white"
              aria-label="Close"
            >
              <X className="h-8 w-8" />
            </button>
            <motion.img
              key={active}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={asset(photos[active].photo)}
              alt={photos[active].caption}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-full rounded-lg border-2 border-sunflower/70 shadow-warm"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
