import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

// Animates a number from 0 to `end` once the element scrolls into view.
export default function useCounter(end, duration = 2000) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let startTime = null
    let frame

    const step = (timestamp) => {
      if (startTime === null) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      setCount(Math.floor(eased * end))
      if (progress < 1) frame = requestAnimationFrame(step)
      else setCount(end)
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [isInView, end, duration])

  return { ref, count }
}
