import { motion } from 'framer-motion'
import { FiCheckCircle, FiUsers, FiAward, FiClock } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import GradientBlobs from '../components/GradientBlobs'
import useCounter from '../hooks/useCounter'
import { aboutStats } from '../data/portfolioData'

const icons = [FiCheckCircle, FiUsers, FiAward, FiClock]

function AchievementCard({ stat, Icon, delay }) {
  const { ref, count } = useCounter(stat.value, 2200)
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05 }}
      className="glass-card flex flex-col items-center gap-3 p-8 text-center transition-shadow duration-500 hover:shadow-glow"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-grad-accent text-2xl text-white shadow-glow-pink">
        <Icon />
      </span>
      <p className="font-display text-4xl font-bold gradient-text">
        {count}
        {stat.suffix}
      </p>
      <p className="text-sm text-muted">{stat.label}</p>
    </motion.div>
  )
}

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding relative overflow-hidden">
      <GradientBlobs />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="By the numbers"
          title="Achievements"
          subtitle="A snapshot of the work delivered so far."
        />
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {aboutStats.map((stat, i) => (
            <AchievementCard key={stat.label} stat={stat} Icon={icons[i]} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
