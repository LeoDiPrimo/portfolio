import Card from '../../components/ui/Card'
import Reveal from '../../components/ui/Reveal'
import Section from '../../components/ui/Section'
import { ABOUT } from '../../data/about'

export default function About() {
  return (
    <Section id="about" title="Sobre mí">
      <Reveal>
        <Card className="leading-[1.8] text-muted">
          <div className="max-w-[75ch] space-y-4 text-pretty">
            {ABOUT.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Card>
      </Reveal>
    </Section>
  )
}
