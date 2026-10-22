import { motion } from 'framer-motion'
import * as FiIcons from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import { services } from '../data/portfolioData'

export default function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How I can help"
          title="Services"
          subtitle="I build modern web interfaces, reliable backend APIs, and complete web applications tailored to real-world needs."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = FiIcons[service.icon]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card group relative flex flex-col gap-4 p-7 transition-shadow duration-500 hover:shadow-glow-cyan"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-grad-primary text-2xl text-white shadow-glow transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <Icon />
                </span>
                <h3 className="font-display text-lg font-semibold">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{service.description}</p>
                <div className="mt-auto h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
