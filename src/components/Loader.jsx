import { motion, AnimatePresence } from 'framer-motion'

// Full-screen entrance loader shown briefly while the page boots.
export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-bg"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <motion.div
            className="h-14 w-14 rounded-full border-2 border-white/10 border-t-secondary"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          />
          <motion.p
            className="font-mono text-sm tracking-[0.3em] text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            LOADING PORTFOLIO
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
