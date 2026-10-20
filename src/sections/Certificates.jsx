import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiAward, FiX } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import { certificates } from '../data/portfolioData'

export default function Certificates() {
  const [active, setActive] = useState(null)

  return (
    <section id="certificates" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Verified learning"
          title="Certificates"
          subtitle="Courses and certifications completed along the way."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <motion.button
              key={cert.title}
              onClick={() => setActive(cert)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass-card group overflow-hidden text-left"
            >
              <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-primary/25 via-secondary/15 to-accent/20">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <FiAward className="text-5xl text-white/30 transition-transform duration-500 group-hover:scale-125" />
                )}
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold">{cert.title}</h3>
                <p className="mt-1 text-sm text-muted">{cert.issuer} · {cert.year}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal preview */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-bg/80 p-6 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card relative w-full max-w-lg p-8"
              role="dialog"
              aria-modal="true"
              aria-label={active.title}
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close preview"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-white/70 hover:bg-white/10 hover:text-white"
              >
                <FiX />
              </button>
              <div className="mb-6 flex h-48 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/25">
                <FiAward className="text-6xl text-white/40" />
              </div>
              <h3 className="font-display text-xl font-semibold">{active.title}</h3>
              <p className="mt-2 text-muted">{active.issuer} · {active.year}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
