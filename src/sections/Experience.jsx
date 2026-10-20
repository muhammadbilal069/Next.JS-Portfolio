import { FiBriefcase } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import Timeline from '../components/Timeline'
import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Where I've worked"
          title="Experience"
          subtitle="A timeline of the roles that shaped how I build software."
        />
        <Timeline items={experience} icon={FiBriefcase} />
      </div>
    </section>
  )
}
