import { motion } from 'framer-motion'
import { FiBriefcase } from 'react-icons/fi'

// Reusable vertical animated timeline used by both Experience and Education.
export default function Timeline({ items, icon: Icon = FiBriefcase }) {
  return (
    <div className="relative mx-auto max-w-3xl">
      {/* Center line */}
      <div className="absolute left-[19px] top-0 h-full w-px bg-gradient-to-b from-primary via-secondary to-accent sm:left-1/2 sm:-translate-x-1/2" />

      <div className="flex flex-col gap-10">
        {items.map((item, i) => (
          <motion.div
            key={item.company || item.institution}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className={`relative flex items-start gap-6 sm:w-1/2 ${
              i % 2 === 0 ? 'sm:pr-10' : 'sm:ml-auto sm:pl-10'
            }`}
          >
            <span className="glass absolute left-0 z-10 flex h-10 w-10 items-center justify-center rounded-full text-secondary shadow-glow-cyan sm:left-auto sm:right-[-20px] sm:hidden">
              <Icon />
            </span>
            <span
              className={`glass absolute top-0 z-10 hidden h-4 w-4 items-center justify-center rounded-full bg-primary shadow-glow sm:flex ${
                i % 2 === 0 ? 'right-[-8px]' : 'left-[-8px]'
              }`}
            />
            <div className="glass-card ml-14 w-full p-6 sm:ml-0">
              <p className="font-mono text-xs tracking-wide text-secondary">{item.duration}</p>
              <h3 className="mt-1 font-display text-lg font-semibold">
                {item.position || item.degree}
              </h3>
              <p className="text-sm text-white/70">{item.company || item.institution}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
