import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Photo, Mandala } from './shared.jsx'

function StoryRow({ item, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  // subtle parallax on the photo
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  const reversed = index % 2 === 1
  const num = String(index + 1).padStart(2, '0')

  return (
    <div
      ref={ref}
      className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:gap-16 md:py-24"
    >
      {/* Photo */}
      <motion.div
        style={{ y }}
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`mx-auto w-full max-w-md ${reversed ? 'md:order-2' : 'md:order-1'}`}
      >
        <div className="gold-frame">
          <div className="inner aspect-[3/4]">
            <Photo src={item.photo} alt={item.title} label={`Story ${num}`} />
          </div>
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className={`text-center md:text-left ${reversed ? 'md:order-1' : 'md:order-2'}`}
      >
        <span className="font-heading text-7xl font-semibold text-gold/25 md:text-8xl">{num}</span>
        <h3 className="-mt-4 font-heading text-3xl font-semibold gold-text md:text-4xl">
          {item.title}
        </h3>
        <div className="mt-4 flex justify-center md:justify-start">
          <span className="h-[2px] w-20 bg-gradient-to-r from-gold to-transparent" />
        </div>
        <p className="mx-auto mt-5 max-w-md font-body text-lg leading-relaxed text-ivory/75 md:mx-0">
          {item.text}
        </p>
      </motion.div>
    </div>
  )
}

export default function PhotoStory({ items }) {
  return (
    <section id="story" className="silk-maroon relative overflow-hidden">
      <Mandala className="left-1/2 top-20 -translate-x-1/2" size={680} />

      <div className="relative z-10 py-16 text-center">
        <p className="eyebrow text-xs text-gold-soft/80">In Ten Frames</p>
        <h2 className="mt-3 font-heading text-4xl font-semibold gold-text md:text-5xl">
          A Story Worth Telling
        </h2>
      </div>

      <div className="relative z-10">
        {items.map((item, i) => (
          <StoryRow key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
