import Card from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'
import Reveal from '../../components/ui/Reveal'
import Section from '../../components/ui/Section'
import { LanguageIcon, GraduationCapIcon } from '../../components/ui/icons'
import { EDUCATION, LANGUAGES } from '../../data/education'

export default function Education() {
  return (
    <Section id="education" title="Formación">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Reveal>
          <Card className="h-full">
            <ul>
              {EDUCATION.map((item) => (
                <li
                  key={item.id}
                  className="border-b border-border py-3.5 first:pt-0 last:border-b-0 last:pb-0"
                >
                  <h3 className="flex items-center gap-2 font-bold">
                    <GraduationCapIcon />
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-accent">
                    {item.institution}
                  </p>
                  <p className="text-xs text-subtle">{item.period}</p>
                  {item.status && (
                    <Badge variant="accent" className="mt-2">
                      {item.status}
                    </Badge>
                  )}
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>

        <Reveal>
          <Card className="h-full">
            <h3 className="mb-3 flex items-center gap-2 text-base font-bold">
              <span aria-hidden="true" className="flex text-xl">
                <LanguageIcon />
              </span>
              Idiomas
            </h3>

            <dl className="space-y-3">
              {LANGUAGES.map((language) => (
                <div key={language.id}>
                  <dt className="text-sm font-semibold">{language.name}</dt>
                  <dd className="text-sm text-muted">{language.level}</dd>
                </div>
              ))}
            </dl>
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}
