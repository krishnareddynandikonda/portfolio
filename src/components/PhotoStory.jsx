import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Photo, Mandala, Sunflower, Garland, RangoliCorner } from './shared.jsx'
import { Toranam } from './CulturalArtwork.jsx'

// One rich cultural color mood per story chapter (per the wedding brief)
const STORY_MOODS = [
  // 01 saffron + maroon + gold
  'radial-gradient(700px 460px at 10% 0%, rgba(238,123,12,.30), transparent 60%), radial-gradient(700px 460px at 100% 100%, rgba(122,18,32,.20), transparent 60%), linear-gradient(180deg,#fff3df,#ffe3b8)',
  // 02 peacock blue + ivory + gold
  'radial-gradient(700px 460px at 0% 0%, rgba(14,124,155,.26), transparent 60%), radial-gradient(700px 460px at 100% 100%, rgba(201,162,39,.22), transparent 60%), linear-gradient(180deg,#f3fbfd,#dcf0f6)',
  // 03 lotus pink + maroon + emerald
  'radial-gradient(700px 460px at 0% 0%, rgba(229,99,155,.30), transparent 60%), radial-gradient(700px 460px at 100% 100%, rgba(30,122,82,.16), transparent 60%), linear-gradient(180deg,#fff2f7,#ffdfeb)',
  // 04 emerald + ivory + gold
  'radial-gradient(700px 460px at 10% 0%, rgba(30,122,82,.26), transparent 60%), radial-gradient(700px 460px at 100% 100%, rgba(201,162,39,.22), transparent 60%), linear-gradient(180deg,#f1fbf5,#daf1e4)',
  // 05 turmeric + maroon + emerald
  'radial-gradient(700px 460px at 0% 0%, rgba(245,183,0,.34), transparent 60%), radial-gradient(700px 460px at 100% 100%, rgba(30,122,82,.18), transparent 60%), linear-gradient(180deg,#fff6cf,#ffe79e)',
  // 06 sandalwood cream + lotus pink + gold
  'radial-gradient(700px 460px at 100% 0%, rgba(229,99,155,.20), transparent 60%), radial-gradient(700px 460px at 0% 100%, rgba(201,162,39,.22), transparent 60%), linear-gradient(180deg,#fdf3e4,#f2e2c6)',
  // 07 lotus pink + peacock blue + ivory
  'radial-gradient(700px 460px at 0% 0%, rgba(229,99,155,.24), transparent 60%), radial-gradient(700px 460px at 100% 100%, rgba(14,124,155,.22), transparent 60%), linear-gradient(180deg,#fff3f8,#e8f3f8)',
  // 08 deep maroon + gold + lotus (dark)
  'radial-gradient(760px 520px at 50% -10%, rgba(201,162,39,.32), transparent 62%), radial-gradient(640px 480px at 100% 100%, rgba(229,99,155,.28), transparent 60%), linear-gradient(180deg,#6a1020,#48101f)',
  // 09 royal purple + saffron + gold (dark)
  'radial-gradient(760px 520px at 50% -10%, rgba(201,162,39,.28), transparent 62%), radial-gradient(640px 480px at 0% 100%, rgba(238,123,12,.26), transparent 60%), linear-gradient(180deg,#3c1a5a,#2a134a)',
  // 10 gold + maroon + lotus + ivory (blessing)
  'radial-gradient(760px 520px at 50% 0%, rgba(201,162,39,.32), transparent 62%), radial-gradient(640px 480px at 100% 100%, rgba(229,99,155,.18), transparent 60%), linear-gradient(180deg,#fff6df,#ffe9c2)',
]
const GLOWS = ['#F5B700', '#E5639B', '#0E7C9B', '#1E7A52', '#EE7B0C']

function StoryRow({ item, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  const reversed = index % 2 === 1
  const num = String(index + 1).padStart(2, '0')
  const glow = GLOWS[index % GLOWS.length]

  return (
    <div
      ref={ref}
      className="texture relative overflow-hidden"
      style={{ background: STORY_MOODS[index % STORY_MOODS.length] }}
    >
      <RangoliCorner className="absolute left-0 top-0 h-28 w-28 opacity-70" />
      <RangoliCorner className="absolute bottom-0 right-0 h-28 w-28 -scale-100 opacity-70" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:grid-cols-2 md:gap-14 md:py-20">
        {/* Photo */}
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={`relative mx-auto w-full max-w-md ${reversed ? 'md:order-2' : 'md:order-1'}`}
        >
          <span
            className="glow-blob -left-6 -top-6 h-40 w-40"
            style={{ background: glow }}
          />
          <span
            className="glow-blob -bottom-6 -right-6 h-40 w-40"
            style={{ background: GLOWS[(index + 2) % GLOWS.length] }}
          />
          <Sunflower
            size={46}
            className="absolute -right-3 -top-5 z-20 animate-sway drop-shadow"
          />
          <div className="arch-frame relative z-10">
            <div className="inner aspect-[3/4]">
              <Photo src={item.photo} alt={item.title} label={`Story ${num}`} />
            </div>
          </div>
        </motion.div>

        {/* Text card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className={`${reversed ? 'md:order-1' : 'md:order-2'}`}
        >
          <div className="card card-accent px-7 py-9 text-center md:px-9 md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-saffron to-kumkum px-4 py-1 font-accent text-sm text-white shadow-sun">
              <Sunflower size={18} /> {num}
            </span>
            <h3 className="te mt-4 text-3xl font-bold text-kumkum md:text-4xl">{item.teTitle}</h3>
            <p className="mt-1 font-heading text-2xl font-semibold text-maroon md:text-3xl">
              {item.title}
            </p>
            <div className="mt-4 flex justify-center md:justify-start">
              <Garland count={7} />
            </div>
            <p className="mt-5 font-body text-lg leading-relaxed text-ink/80">{item.text}</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default function PhotoStory({ items }) {
  return (
    <section id="story" className="relative">
      <div className="sun-bg texture relative overflow-hidden py-16 text-center">
        <Toranam className="absolute inset-x-0 top-0 h-12 opacity-90" />
        <Mandala className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" size={520} />
        <div className="relative z-10">
          <div className="mb-4 flex justify-center">
            <Garland count={11} />
          </div>
          <p className="te text-3xl font-bold text-kumkum md:text-4xl">కథ • పది చిత్రాలు</p>
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
