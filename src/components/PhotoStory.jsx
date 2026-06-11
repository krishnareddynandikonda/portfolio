import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Photo, Mandala, Sunflower } from './shared.jsx'

const FRAME_TINTS = ['cream-bg', 'petal-bg', 'cream-bg', 'petal-bg']

function StoryRow({ item, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  const reversed = index % 2 === 1
  const num = String(index + 1).padStart(2, '0')

  return (
    <div
      ref={ref}
      className={`${FRAME_TINTS[index % FRAME_TINTS.length]} texture relative overflow-hidden`}
    >
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:gap-16 md:py-24">
        {/* Photo */}
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={`mx-auto w-full max-w-md ${reversed ? 'md:order-2' : 'md:order-1'}`}
        >
          <div className="arch-frame">
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
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 font-accent text-sm text-saffron shadow-sm ring-1 ring-saffron/30">
            <Sunflower size={18} /> {num}
          </span>
          <h3 className="te mt-4 text-3xl font-bold text-maroon md:text-4xl">{item.teTitle}</h3>
          <p className="mt-1 font-heading text-2xl font-semibold sun-text md:text-3xl">{item.title}</p>
          <div className="mt-4 flex justify-center md:justify-start">
            <span className="h-[3px] w-20 rounded bg-gradient-to-r from-saffron to-sunflower" />
          </div>
          <p className="mx-auto mt-5 max-w-md font-body text-lg leading-relaxed text-ink/80 md:mx-0">
            {item.text}
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default function PhotoStory({ items }) {
  return (
    <section id="story" className="relative">
      <div className="sun-bg texture relative overflow-hidden py-16 text-center">
        <Mandala className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" size={520} />
        <div className="relative z-10">
          <p className="te text-2xl font-semibold text-saffron md:text-3xl">కథ • పది చిత్రాలు</p>
          <h2 className="mt-1 font-heading text-4xl font-semibold text-maroon md:text-5xl">
            A Story in Ten Frames
          </h2>
        </div>
      </div>

      {items.map((item, i) => (
        <StoryRow key={i} item={item} index={i} />
      ))}
    </section>
  )
}
