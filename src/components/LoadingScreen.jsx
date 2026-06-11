import { motion } from 'framer-motion'

export default function LoadingScreen({ data }) {
  return (
    <motion.div
      className="wine-deep-bg fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="font-heading text-5xl font-semibold tracking-[0.3em] text-brass-soft md:text-6xl"
      >
        NKR
      </motion.span>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.35 }}
        className="te mt-6 text-3xl font-medium text-brass-soft md:text-4xl"
      >
        {data.blessing}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.55 }}
        className="mt-3 text-[0.72rem] uppercase tracking-[0.22em] text-paper/50"
      >
        {data.name}
      </motion.p>

      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.4, ease: 'easeInOut' }}
        className="mt-8 h-px w-44 origin-left bg-gradient-to-r from-transparent via-brass to-transparent"
      />
    </motion.div>
  )
}
