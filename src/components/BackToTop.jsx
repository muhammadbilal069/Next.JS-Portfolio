import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'
import { animateScroll } from 'react-scroll'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => animateScroll.scrollToTop({ duration: 500 })}
          aria-label="Back to top"
          className="glass fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full text-lg text-white shadow-glow-cyan"
        >
          <FiArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
