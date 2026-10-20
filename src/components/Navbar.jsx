import { useEffect, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks } from '../data/portfolioData'
import useActiveSection from '../hooks/useActiveSection'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useActiveSection(navLinks.map((l) => l.to))

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass py-3 shadow-soft' : 'bg-transparent py-6'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-24">
        <ScrollLink
          to="hero"
          smooth
          duration={600}
          className="cursor-pointer font-display text-xl font-semibold tracking-tight"
        >
          <span className="gradient-text">Bilal</span>
          <span className="text-white">.Dev</span>
        </ScrollLink>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <ScrollLink
                to={link.to}
                smooth
                duration={600}
                offset={-80}
                className={`relative cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  activeSection === link.to
                    ? 'text-secondary'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.name}
                {activeSection === link.to && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-secondary"
                  />
                )}
              </ScrollLink>
            </li>
          ))}
        </ul>

        <ScrollLink
          to="contact"
          smooth
          duration={600}
          offset={-80}
          className="btn-primary hidden lg:inline-flex !py-2.5 !px-6 text-sm cursor-pointer"
        >
          Let's Talk
        </ScrollLink>

        {/* Mobile toggle */}
        <button
          className="text-2xl text-white lg:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="glass overflow-hidden lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <ScrollLink
                    to={link.to}
                    smooth
                    duration={600}
                    offset={-80}
                    onClick={() => setMobileOpen(false)}
                    className="block cursor-pointer rounded-lg px-3 py-3 text-white/80 hover:bg-white/5 hover:text-white"
                  >
                    {link.name}
                  </ScrollLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
