import { motion } from 'framer-motion'
import { Sunflower } from './shared.jsx'

export default function LoadingScreen({ data }) {
  return (
    <motion.div
      className="royal-bg fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
    >
      {/* soft floating sunflowers */}
      {Array.from({ length: 6 }).map((_, i) => (
        <span
          key={i}
          className="absolute bottom-[-50px]"
          style={{
            left: `${10 + i * 15}%`,
            animation: `floatUp ${16 + i * 2}s linear ${i * 1.5}s infinite`,
            opacity: 0.4,
          }}
        >
          <Sunflower size={28 + (i % 3) * 10} />
        </span>
      ))}

      <motion.div
        initial={{ scale: 0.6, opacity: 0, rotate: -30 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex h-28 w-28 items-center justify-center"
      >
        <span className="absolute inset-0 rounded-full bg-sunflower/40 blur-2xl animate-glow" />
        <Sunflower size={88} />
      </motion.div>

      <motion.h1
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="te mt-7 text-4xl font-bold gold-text md:text-5xl"
      >
        {data.blessing}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.55 }}
        className="name-en mx-auto mt-3 text-center text-cream"
      >
        {data.name}
      </motion.p>
    </motion.div>
  )
}
