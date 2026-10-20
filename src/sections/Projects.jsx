import { useMemo, useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { FiExternalLink, FiGithub, FiCode } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import { projectCategories, projects } from '../data/portfolioData'

function ProjectCard({ project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl p-[1px] transition-shadow duration-500"
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-2xl bg-grad-full opacity-0 blur-[2px] transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl glass">
        {/* Image / placeholder */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/20">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-5xl text-white/30 transition-transform duration-700 group-hover:scale-110">
              <FiCode />
            </div>
          )}
          <div className="absolute inset-0 flex items-center justify-center gap-3 bg-bg/70 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="glass flex h-10 w-10 items-center justify-center rounded-full text-white transition-transform hover:scale-110 hover:text-secondary"
              aria-label={`Live demo of ${project.title}`}
            >
              <FiExternalLink />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="glass flex h-10 w-10 items-center justify-center rounded-full text-white transition-transform hover:scale-110 hover:text-secondary"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <FiGithub />
            </a>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-6">
          <h3 className="font-display text-lg font-semibold">{project.title}</h3>
          <p className="text-sm leading-relaxed text-muted">{project.description}</p>
          <div className="mt-auto flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = useMemo(
    () =>
      activeCategory === 'All'
        ? projects
        : projects.filter((p) => p.category === activeCategory),
    [activeCategory]
  )

  return (
    <section id="projects" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured Projects"
          subtitle="A mix of frontend builds, React applications, and full-stack products."
        />

        {/* Filter tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300 ${
                activeCategory === cat
                  ? 'text-white'
                  : 'glass text-white/60 hover:text-white'
              }`}
            >
              {activeCategory === cat && (
                <motion.span
                  layoutId="project-filter-pill"
                  className="absolute inset-0 rounded-full bg-grad-primary shadow-glow"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{cat}</span>
            </button>
          ))}
        </div>

        <LayoutGroup>
          <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  )
}
