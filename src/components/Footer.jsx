import { Link as ScrollLink } from 'react-scroll'
import * as FiIcons from 'react-icons/fi'
import * as FaIcons from 'react-icons/fa'
import { navLinks, personal } from '../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 px-6 py-14 sm:px-10 lg:px-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center">
        <ScrollLink to="hero" smooth duration={600} className="cursor-pointer font-display text-2xl font-semibold">
          <span className="gradient-text">{personal.name.split(' ')[0]}</span>
          <span className="text-white">.dev</span>
        </ScrollLink>

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <li key={link.to}>
              <ScrollLink
                to={link.to}
                smooth
                duration={600}
                offset={-80}
                className="cursor-pointer text-sm text-muted transition-colors hover:text-secondary"
              >
                {link.name}
              </ScrollLink>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          {personal.socials.map((social) => {
             const IconComponent = FiIcons[social.icon] || FaIcons[social.icon]
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="glass flex h-10 w-10 items-center justify-center rounded-full text-white/70 transition-all hover:-translate-y-1 hover:text-secondary"
              >
                {typeof IconComponent === 'function' ? <IconComponent /> : null}
              </a>
            )
          })}
        </div>

        <p className="text-xs text-muted">
          &copy; {year} {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
