import { motion } from 'framer-motion'
import { Lotus } from './shared.jsx'

export default function LoadingScreen({ data }) {
  return (
    <motion.div
      className="royal-bg fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <Lotus size={88} color="#d8b85f" />
      </motion.div>

      <motion.h1
        initial={{ y: 14, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.35 }}
        className="te mt-6 text-4xl font-semibold gold-text md:text-5xl"
      >
        {data.blessing}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="name-en mx-auto mt-3 text-center text-ivory/70"
      >
        {data.name}
      </motion.p>

      {/* slim gold progress line */}
      <motion.span
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.5, ease: 'easeInOut' }}
        className="mt-8 h-px w-40 origin-left bg-gradient-to-r from-transparent via-gold to-transparent"
      />
    </motion.div>
  )
}
