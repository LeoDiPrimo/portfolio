import CopyButton from '../../components/ui/CopyButton'
import LinkButton from '../../components/ui/LinkButton'
import Reveal from '../../components/ui/Reveal'
import Section from '../../components/ui/Section'
import { MailIcon } from '../../components/ui/icons'
import { SOCIAL_ICONS } from '../../components/ui/socialIcons'
import { PROFILE, SOCIAL_LINKS } from '../../data/profile'
import ContactCard from './ContactCard'

const SOCIAL_DETAILS = {
  linkedin: 'Experiencia y trayectoria.',
  github: 'Código y proyectos.',
}

/**
 * Contact cards. A missing email or profile drops its card entirely, so the
 * grid closes up instead of leaving a gap.
 *
 * The email card offers both routes on purpose: `mailto:` only works for
 * visitors with a mail client wired to the browser, while copying the address
 * works everywhere else.
 */
export default function Contact() {
  const socialLinks = SOCIAL_LINKS.filter((link) => link.url)

  return (
    <Section id="contact" eyebrow="Contacto" title="Hablemos" subtitle="Opciones de contacto.">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PROFILE.email && (
          <Reveal>
            <ContactCard title="Email" detail={PROFILE.email} Icon={MailIcon}>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <LinkButton href={`mailto:${PROFILE.email}`} variant="primary">
                  Escribime
                </LinkButton>
                <CopyButton value={PROFILE.email} />
              </div>
            </ContactCard>
          </Reveal>
        )}

        {socialLinks.map((link) => (
          <Reveal key={link.id}>
            <ContactCard
              as="a"
              href={link.url}
              target="_blank"
              rel="noreferrer"
              title={link.label}
              detail={SOCIAL_DETAILS[link.id]}
              Icon={SOCIAL_ICONS[link.id]}
            >
              <p className="text-sm font-semibold text-accent">
                Ver perfil <span aria-hidden="true">→</span>
              </p>
            </ContactCard>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
