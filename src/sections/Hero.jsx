import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import { FiDownload, FiMail, FiChevronDown } from 'react-icons/fi'
import * as FiIcons from 'react-icons/fi'
import ParticlesBackground from '../components/ParticlesBackground'
import GradientBlobs from '../components/GradientBlobs'
import { personal } from '../data/portfolioData'

export default function Hero() {
  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: personal.taglineWords,
      typeSpeed: 55,
      backSpeed: 30,
      backDelay: 1400,
      loop: true,
      smartBackspace: true,
    })
    return () => typed.destroy()
  }, [])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 sm:px-10 lg:px-24"
    >
      <GradientBlobs />
      <ParticlesBackground density={70} />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Text content */}
        <div>
          <motion.p
            className="eyebrow mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            className="text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Hi, I'm <span className="gradient-text">{personal.name}</span>
          </motion.h1>

          <motion.div
            className="mt-4 h-10 text-xl font-medium text-secondary sm:text-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span ref={typedRef} />
            <span className="animate-pulse-glow">|</span>
          </motion.div>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {personal.intro}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <a href={personal.resumeUrl} download className="btn-primary">
              <FiDownload /> Download Resume
            </a>
            <ScrollLink to="contact" smooth duration={600} offset={-80} className="btn-outline cursor-pointer">
              <FiMail /> Contact Me
            </ScrollLink>
          </motion.div>

          <motion.div
            className="mt-10 flex gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            {personal.socials.map((social) => {
              const Icon = FiIcons[social.icon]
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="glass flex h-11 w-11 items-center justify-center rounded-full text-lg text-white/80 transition-all duration-300 hover:-translate-y-1 hover:text-secondary hover:shadow-glow-cyan"
                >
                  <Icon />
                </a>
              )
            })}
          </motion.div>
        </div>

        {/* Profile image */}
        <motion.div
          className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-96 sm:w-96"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 animate-spin-slow rounded-full bg-grad-full opacity-40 blur-2xl" />
          <motion.div
            className="glass-card relative h-full w-full overflow-hidden rounded-[2.5rem] p-2"
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            {personal.avatar ? (
              <img
                src={personal.avatar}
                alt={personal.name}
                loading="lazy"
                className="h-full w-full rounded-[2rem] object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center rounded-[2rem] bg-grad-primary/20">
                <span className="font-display text-7xl font-bold gradient-text">
                  {personal.name.split(' ').map((n) => n[0]).join('')}
                </span>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="font-mono text-xs tracking-[0.25em]">SCROLL</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <FiChevronDown className="text-xl" />
        </motion.div>
      </motion.div>
    </section>
  )
}
