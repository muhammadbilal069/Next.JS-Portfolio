import { motion, useScroll, useSpring } from 'framer-motion'

// Thin gradient bar pinned to the top of the viewport, tracking scroll depth.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-grad-full"
      style={{ scaleX }}
    />
  )
}
