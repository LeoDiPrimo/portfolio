import Section from '../../components/ui/Section'
import { EXPERIENCE } from '../../data/experience'
import ExperienceItem from './ExperienceItem'

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experiencia"
      subtitle="Mi trayectoria profesional."
    >
      {/* The vertical rule is the list's `before:`; each item draws its own dot. */}
      <ul className="relative pl-7 before:absolute before:top-1.5 before:bottom-1.5 before:left-[5px] before:w-0.5 before:bg-border-strong">
        {EXPERIENCE.map((job) => (
          <ExperienceItem key={job.id} job={job} />
        ))}
      </ul>
    </Section>
  )
}
