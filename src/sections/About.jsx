import { motion } from 'framer-motion'
import { FiMapPin, FiBookOpen, FiTarget } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import GradientBlobs from '../components/GradientBlobs'
import useCounter from '../hooks/useCounter'
import { aboutStats, personal } from '../data/portfolioData'

function Counter({ stat }) {
  const { ref, count } = useCounter(stat.value)
  return (
    <div ref={ref} className="glass-card px-5 py-6 text-center">
      <p className="font-display text-3xl font-bold gradient-text sm:text-4xl">
        {count}
        {stat.suffix}
      </p>
      <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
    </div>
  )
}

const highlights = [
  { icon: FiMapPin, label: 'Based in', value: personal.location },
  { icon: FiBookOpen, label: 'Education', value: 'BS Computer Science' },
  { icon: FiTarget, label: 'Currently', value: 'Building accessible, motion-rich UI' },
]

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <GradientBlobs variant="reverse" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Get to know me"
          title="About Me"
          subtitle="A quick look at who I am, what I've studied, and where I'm headed next."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="glass-card p-8"
          >
            <p className="text-base leading-relaxed text-white/85 sm:text-lg">
              {personal.intro} My goal is to keep building products that are as
              enjoyable to use as they are reliable — where every interaction
              feels considered, from layout to load time.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {highlights.map((h) => (
                <div key={h.label} className="flex items-center gap-4">
                  <span className="glass flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-secondary">
                    <h.icon />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted">{h.label}</p>
                    <p className="text-sm text-white/90">{h.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats + mini timeline */}
          <div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
              {aboutStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Counter stat={stat} />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card mt-6 p-6"
            >
              <p className="eyebrow mb-3">Goal</p>
              <p className="text-white/85">
                To keep growing as a full-stack engineer while mentoring others —
                and to eventually lead a small, high-craft product team.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
