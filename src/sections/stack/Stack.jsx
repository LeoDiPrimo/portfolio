import Badge from '../../components/ui/Badge'
import Card from '../../components/ui/Card'
import Reveal from '../../components/ui/Reveal'
import Section from '../../components/ui/Section'
import { STACK_ICONS } from '../../components/ui/stackIcons'
import { SKILL_GROUPS } from '../../data/stack'

export default function Stack() {
  return (
    <Section
      id="stack"
      title="Stack & habilidades"
      subtitle="Tecnologías con las que trabajo a diario."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group) => {
          const Icon = STACK_ICONS[group.icon]
          return (
            <Reveal key={group.id}>
              <Card className="h-full">
                <h3 className="mb-3.5 flex items-center gap-2 text-base font-bold">
                  <span aria-hidden="true" className="flex text-xl text-accent">
                    {Icon && <Icon />}
                  </span>
                  {group.label}
                </h3>

                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge as="li" key={skill}>
                      {skill}
                    </Badge>
                  ))}
                </ul>
              </Card>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
