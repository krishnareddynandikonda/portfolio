import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Photo, Mandala, SunDivider } from './shared.jsx'

const EASE = [0.22, 1, 0.36, 1]

// One quiet color mood per chapter — calm, alternating, never neon
const STORY_MOODS = [
  'linear-gradient(180deg,#fbf3e6,#f6ead4)', // ivory warm
  'linear-gradient(180deg,#eef5f6,#e2eef1)', // soft peacock mist
  'linear-gradient(180deg,#fbf0f4,#f6e2ea)', // soft lotus
  'linear-gradient(180deg,#eef5ef,#e0eee4)', // soft emerald
  'linear-gradient(180deg,#fbf2dd,#f6e8c4)', // soft turmeric
  'linear-gradient(180deg,#faf3e8,#f1e6d2)', // sandalwood
  'linear-gradient(180deg,#f1f4f6,#e7eef1)', // pale blue
  'linear-gradient(180deg,#42101c,#330b15)', // deep maroon (dark)
  'linear-gradient(180deg,#2c1846,#241046)', // royal purple (dark)
  'linear-gradient(180deg,#fbf3df,#f6e9c6)', // gold blessing
]
const DARK_STORIES = new Set([7, 8])

function StoryRow({ item, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  const reversed = index % 2 === 1
  const num = String(index + 1).padStart(2, '0')
  const dark = DARK_STORIES.has(index)

  return (
    <div ref={ref} className="relative overflow-hidden" style={{ background: STORY_MOODS[index % STORY_MOODS.length] }}>
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:gap-16 md:py-28">
        {/* Photo — clean arch */}
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: EASE }}
          className={`relative mx-auto w-full max-w-xs md:max-w-sm ${reversed ? 'md:order-2' : 'md:order-1'}`}
        >
          <Mandala
            className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05]"
            size={420}
            color={dark ? '#E6C766' : '#6a0f1a'}
          />
          <div className="arch-frame relative z-10">
            <div className="inner aspect-[3/4]">
              <Photo src={item.photo} alt={item.title} label={`Story ${num}`} />
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.12, ease: EASE }}
          className={`text-center md:text-left ${reversed ? 'md:order-1' : 'md:order-2'}`}
        >
          <span className={`eyebrow text-xs ${dark ? 'text-gold-soft/80' : 'text-maroon/50'}`}>
            Chapter {num}
          </span>
          <h3 className={`te mt-3 text-2xl font-semibold md:text-3xl ${dark ? 'text-gold-soft' : 'text-maroon'}`}>
            {item.teTitle}
          </h3>
          <p className={`mt-1 font-heading text-xl font-medium md:text-2xl ${dark ? 'text-ivory/85' : 'text-maroon/80'}`}>
            {item.title}
          </p>
          <div className="mt-5 md:flex md:justify-start">
            <SunDivider />
          </div>
          <p className={`mt-6 text-base leading-relaxed ${dark ? 'text-ivory/70' : 'text-ink/70'}`}>
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
      <div className="cream-bg relative overflow-hidden py-20 text-center">
        <div className="relative z-10">
          <p className="te text-2xl font-semibold text-maroon/80 md:text-3xl">కథ • పది చిత్రాలు</p>
          <h2 className="mt-1 font-heading text-3xl font-semibold text-maroon md:text-4xl">
            A Story in Ten Frames
          </h2>
          <div className="mt-5 flex justify-center">
            <SunDivider />
          </div>
        </div>
      </div>

      {items.map((item, i) => (
        <StoryRow key={i} item={item} index={i} />
      ))}
    </section>
  )
}
