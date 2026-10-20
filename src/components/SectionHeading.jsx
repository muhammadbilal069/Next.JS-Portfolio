import { motion } from 'framer-motion'

// Shared heading block: eyebrow label + title + optional subtitle,
// with a consistent fade-up reveal used across every section.
export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <motion.div
      className={`mb-16 flex flex-col gap-4 ${alignment}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="max-w-2xl text-3xl font-semibold sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-base text-muted sm:text-lg">{subtitle}</p>
      )}
    </motion.div>
  )
}
