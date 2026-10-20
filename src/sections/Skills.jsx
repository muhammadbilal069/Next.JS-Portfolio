import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { skills } from '../data/portfolioData'

function SkillBar({ name, level, delay }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-white/90">{name}</span>
        <span className="font-mono text-muted">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-grad-primary"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const categories = Object.entries(skills)

  return (
    <section id="skills" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What I work with"
          title="Skills & Technologies"
          subtitle="Tools I reach for daily, grouped by where they sit in the stack."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {categories.map(([category, list], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              whileHover={{ scale: 1.02, rotate: 0.3 }}
              className="glass-card group relative overflow-hidden p-7 transition-shadow duration-500 hover:shadow-glow"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-grad-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
              <h3 className="mb-6 font-display text-xl font-semibold text-secondary">
                {category}
              </h3>
              <div className="flex flex-col gap-5">
                {list.map((skill, i) => (
                  <SkillBar key={skill.name} {...skill} delay={i * 0.1} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
