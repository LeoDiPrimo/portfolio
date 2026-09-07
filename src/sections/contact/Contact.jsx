import Card from '../../components/ui/Card'
import Reveal from '../../components/ui/Reveal'
import Section from '../../components/ui/Section'
import { MailIcon } from '../../components/ui/icons'
import { SOCIAL_ICONS } from '../../components/ui/socialIcons'
import { PROFILE, SOCIAL_LINKS } from '../../data/profile'

const SOCIAL_DETAILS = {
  linkedin: 'Experiencia y trayectoria.',
  github: 'Código y proyectos.',
}

/**
 * Contact cards. `auto-fit` splits the row only between the entries that
 * actually exist, so a missing profile leaves no gap.
 */
export default function Contact() {
  const cards = [
    ...(PROFILE.email
      ? [
          {
            id: 'email',
            title: 'Email',
            detail: PROFILE.email,
            action: 'Escribime',
            href: `mailto:${PROFILE.email}`,
            Icon: MailIcon,
          },
        ]
      : []),
    ...SOCIAL_LINKS.filter((link) => link.url).map((link) => ({
      id: link.id,
      title: link.label,
      detail: SOCIAL_DETAILS[link.id],
      action: 'Ver perfil',
      href: link.url,
      Icon: SOCIAL_ICONS[link.id],
    })),
  ]

  return (
    <Section id="contact" eyebrow="Contacto" title="Hablemos" subtitle="Opciones de contacto.">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ id, title, detail, action, href, Icon }) => (
          <Reveal key={id}>
            <Card
              as="a"
              spotlight
              href={href}
              {...(href.startsWith('http')
                ? { target: '_blank', rel: 'noreferrer' }
                : {})}
              className="flex h-full flex-col items-center gap-2 p-7 text-center transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg"
            >
              {Icon && (
                <span className="mb-1 flex h-12 w-12 items-center justify-center rounded-xl border border-border-strong bg-accent-subtle text-accent [&_svg]:h-5 [&_svg]:w-5">
                  <Icon />
                </span>
              )}

              <h3 className="text-base font-bold">{title}</h3>

              {detail && (
                <p className="text-sm break-words text-muted">{detail}</p>
              )}

              <p className="mt-auto pt-4 text-sm font-semibold text-accent">
                {action} <span aria-hidden="true">→</span>
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
