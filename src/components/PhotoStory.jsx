import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Photo } from './shared.jsx'

const EASE = [0.22, 1, 0.36, 1]

function StoryRow({ item, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [36, -36])

  const reversed = index % 2 === 1
  const dark = reversed // alternate paper / wine
  const num = String(index + 1).padStart(2, '0')

  return (
    <div ref={ref} className={`relative overflow-hidden ${dark ? 'wine-bg' : 'paper-bg'}`}>
      {/* oversized index number watermark */}
      <span
        className={`pointer-events-none absolute select-none font-heading font-semibold leading-none ${
          dark ? 'text-brass/15' : 'text-wine/[0.06]'
        } ${reversed ? 'right-4 md:right-12' : 'left-4 md:left-12'} top-10`}
        style={{ fontSize: 'clamp(8rem, 22vw, 18rem)' }}
        aria-hidden="true"
      >
        {num}
      </span>

      <div className="relative z-10 mx-auto grid max-w-[1200px] items-center gap-12 px-6 py-28 md:grid-cols-2 md:gap-20 md:px-10 md:py-40">
        {/* Photo */}
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: EASE }}
          className={`mx-auto w-full max-w-xs md:max-w-sm ${reversed ? 'md:order-2' : 'md:order-1'}`}
        >
          <div className="arch-frame">
            <div className="inner aspect-[3/4]">
              <Photo src={item.photo} alt={item.title} label={`Story ${num}`} />
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className={`text-center md:text-left ${reversed ? 'md:order-1' : 'md:order-2'}`}
        >
          <span className={`text-[0.72rem] uppercase tracking-[0.22em] ${dark ? 'text-brass-soft' : 'text-brass'}`}>
            {num} — Chapter
          </span>
          <h3 className={`te mt-4 text-3xl font-semibold md:text-4xl ${dark ? 'text-paper' : 'text-wine'}`}>
            {item.teTitle}
          </h3>
          <p className={`mt-2 font-heading text-xl italic md:text-2xl ${dark ? 'text-brass-soft' : 'text-ink/70'}`}>
            {item.title}
          </p>
          <span className={`mt-6 block h-px w-16 ${dark ? 'bg-brass/50' : 'bg-wine/25'} ${reversed ? 'mx-auto md:mx-0' : 'mx-auto md:mx-0'}`} />
          <p className={`mt-6 max-w-md text-base leading-relaxed ${dark ? 'text-paper/75' : 'text-ink/70'} ${'mx-auto md:mx-0'}`}>
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
      <div className="paper-bg relative py-24 text-center md:py-28">
        <span className="text-[0.72rem] uppercase tracking-[0.22em] text-brass">02 — The Story</span>
        <p className="te mt-3 text-2xl font-semibold text-wine md:text-3xl">కథ • పది చిత్రాలు</p>
        <h2 className="mt-1 font-heading text-3xl font-semibold text-ink md:text-4xl">A Story in Ten Frames</h2>
        <span className="mx-auto mt-5 block h-px w-16 bg-brass/50" />
      </div>

      {items.map((item, i) => (
        <StoryRow key={i} item={item} index={i} />
      ))}
    </section>
  )
}
