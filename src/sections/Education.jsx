import { FiBookOpen } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import Timeline from '../components/Timeline'
import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Academic background"
          title="Education"
          subtitle="The formal foundation behind the day-to-day work."
        />
        <Timeline items={education} icon={FiBookOpen} />
      </div>
    </section>
  )
}
