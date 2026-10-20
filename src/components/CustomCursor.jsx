import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Optional custom cursor — a small glowing dot with a trailing ring.
// Only enabled on fine-pointer (mouse) devices; touch devices keep the
// native cursor.
export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!isFinePointer || reducedMotion) return
    setEnabled(true)

    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      const target = e.target
      setIsPointer(Boolean(target.closest('a, button, [role="button"], input, textarea')))
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  if (!enabled) return null

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[999] h-2 w-2 rounded-full bg-secondary"
        animate={{ x: position.x - 4, y: position.y - 4, scale: isPointer ? 1.8 : 1 }}
        transition={{ type: 'spring', stiffness: 800, damping: 40, mass: 0.2 }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[998] h-9 w-9 rounded-full border border-secondary/50"
        animate={{
          x: position.x - 18,
          y: position.y - 18,
          scale: isPointer ? 1.4 : 1,
          opacity: isPointer ? 0.9 : 0.5,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25, mass: 0.5 }}
      />
    </>
  )
}
