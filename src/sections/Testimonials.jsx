import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiMessageCircle } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import { testimonials } from '../data/portfolioData'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)

  const goTo = useCallback(
    (newIndex, dir) => {
      setDirection(dir)
      setIndex((newIndex + testimonials.length) % testimonials.length)
    },
    []
  )

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => goTo(index + 1, 1), 5500)
    return () => clearInterval(timer)
  }, [index, paused, goTo])

  const current = testimonials[index]

  return (
    <section id="testimonials" className="section-padding relative">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Kind words"
          title="Testimonials"
          subtitle="What people I've worked with have said about the process."
        />

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="glass-card relative min-h-[260px] overflow-hidden p-8 sm:p-12">
            <FiMessageCircle className="absolute right-8 top-8 text-4xl text-white/10" />
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="flex flex-col items-center gap-6 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-grad-primary font-display text-xl font-bold shadow-glow">
                  {current.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <p className="max-w-xl text-lg leading-relaxed text-white/90">
                  "{current.review}"
                </p>
                <div>
                  <p className="font-semibold">{current.name}</p>
                  <p className="text-sm text-muted">{current.position}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <button
            onClick={() => goTo(index - 1, -1)}
            aria-label="Previous testimonial"
            className="glass absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full text-white transition-transform hover:scale-110 hover:text-secondary sm:-translate-x-14"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={() => goTo(index + 1, 1)}
            aria-label="Next testimonial"
            className="glass absolute right-0 top-1/2 translate-x-4 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full text-white transition-transform hover:scale-110 hover:text-secondary sm:translate-x-14"
          >
            <FiChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > index ? 1 : -1)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? 'w-8 bg-secondary' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
