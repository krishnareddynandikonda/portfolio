import { motion } from 'framer-motion'
import { Flower2 } from 'lucide-react'

export default function LoadingScreen({ data }) {
  return (
    <motion.div
      className="silk-maroon fixed inset-0 z-[100] flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
    >
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex h-28 w-28 items-center justify-center"
      >
        <span className="absolute inset-0 rounded-full bg-gold/20 blur-2xl" />
        <Flower2 className="h-14 w-14 text-gold-soft drop-shadow-[0_0_18px_rgba(230,199,102,0.6)]" strokeWidth={1.2} />
      </motion.div>

      <motion.h1
        initial={{ y: 18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.35 }}
        className="mt-8 font-heading text-3xl font-semibold gold-text md:text-4xl"
      >
        {data.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="eyebrow mt-3 text-[11px] text-gold-soft/70"
      >
        {data.tagline}
      </motion.p>
    </motion.div>
  )
}
