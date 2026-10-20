import SectionHeading from '../components/SectionHeading'
import { techStack } from '../data/portfolioData'

export default function TechStack() {
  const loopItems = [...techStack, ...techStack]

  return (
    <section id="tech-stack" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-24">
        <SectionHeading
          eyebrow="Always working with"
          title="Tech Stack"
          subtitle="The tools in my everyday rotation."
        />
      </div>

      {/* Infinite marquee, paused on hover, with edge fade */}
      <div className="group relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />
        <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
          {loopItems.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="glass flex items-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-sm font-medium text-white/80"
            >
              <span className="h-2 w-2 rounded-full bg-secondary" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
